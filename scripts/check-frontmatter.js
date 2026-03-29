const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '../docs');
const methodsDir = path.join(docsDir, 'methods');
const practicesDir = path.join(docsDir, 'practices');
const risksDir = path.join(docsDir, 'risks');

// We'll collect all valid titles and tags in this set
const validRefs = new Set();
const fileByRef = new Map();

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach( f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
};

function parseFrontMatter(content) {
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) return null;
  
  const yaml = fmMatch[1];
  const lines = yaml.split('\n');
  const result = {
    title: '',
    tags: [],
    part_of: '',
    method: { practices: [] },
    practice: { mitigates: [], attendant: [], related: [] }
  };

  // Very basic YAML parsing for our specific needs
  let currentSection = '';
  let inPractices = false;
  let inMitigates = false;
  let inAttendant = false;
  let inRelated = false;
  let currentPractice = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    if (!trimmedLine) continue;

    // Title
    const titleMatch = line.match(/^title:\s*(.*)/);
    if (titleMatch) {
      result.title = titleMatch[1].replace(/['"]/g, '').trim();
      continue;
    }

    // part_of
    const partOfMatch = line.match(/^part_of:\s*(.*)/);
    if (partOfMatch) {
        result.part_of = partOfMatch[1].replace(/['"]/g, '').trim();
        continue;
    }

    // Tags list or array
    const tagsMatch = line.match(/^tags:\s*\[(.*)\]/);
    if (tagsMatch) {
      result.tags = tagsMatch[1].split(',').map(t => t.trim().replace(/['"]/g, ''));
      continue;
    }

    // Indented sections
    if (line.match(/^tags:/)) {
      currentSection = 'tags';
      continue;
    }
    if (line.match(/^method:/)) {
        currentSection = 'method';
        continue;
    }
    if (line.match(/^practice:/)) {
        currentSection = 'practice';
        inPractices = false;
        continue;
    }

    // Items within sections
    if (currentSection === 'tags' && line.match(/^\s*-\s*(.*)/)) {
      result.tags.push(line.match(/^\s*-\s*(.*)/)[1].trim().replace(/['"]/g, ''));
      continue;
    }

    if (currentSection === 'method') {
        if (line.match(/^\s*practices:/)) {
            inPractices = true;
            continue;
        }
        if (inPractices && line.match(/^\s*-\s*tag:\s*(.*)/)) {
            currentPractice = { tag: line.match(/^\s*-\s*tag:\s*(.*)/)[1].trim().replace(/['"]/g, '') };
            result.method.practices.push(currentPractice);
            continue;
        }
    }

    if (currentSection === 'practice') {
        if (line.match(/^\s*mitigates:/)) {
            inMitigates = true;
            inAttendant = false;
            inRelated = false;
            continue;
        }
        if (line.match(/^\s*attendant:/)) {
            inAttendant = true;
            inMitigates = false;
            inRelated = false;
            continue;
        }
        if (line.match(/^\s*related:/)) {
            inRelated = true;
            inMitigates = false;
            inAttendant = false;
            continue;
        }
        if ((inMitigates || inAttendant) && line.match(/^\s*-\s*tag:\s*(.*)/)) {
            const tag = line.match(/^\s*-\s*tag:\s*(.*)/)[1].trim().replace(/['"]/g, '');
            if (inMitigates) result.practice.mitigates.push({ tag });
            if (inAttendant) result.practice.attendant.push({ tag });
        }
        if (inRelated && line.match(/^\s*-\s*(.*)/)) {
            result.practice.related.push(line.match(/^\s*-\s*(.*)/)[1].trim().replace(/['"]/g, ''));
        }
    }

    // Reset section if unindented
    if (line.length > 0 && !line.match(/^\s/)) {
        if (!line.match(/^(title|tags|part_of|method|practice):/)) {
            currentSection = '';
            inPractices = false;
            inMitigates = false;
            inAttendant = false;
            inRelated = false;
        }
    }
  }

  return result;
}

console.log('--- Collecting valid titles and tags ---');
walk(docsDir, (filePath) => {
  if (!filePath.endsWith('.md')) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const fm = parseFrontMatter(content);
  if (fm) {
    if (fm.title) {
        validRefs.add(fm.title);
        fileByRef.set(fm.title, filePath);
    }
    fm.tags.forEach(t => {
        if (t) {
            validRefs.add(t);
            fileByRef.set(t, filePath);
        }
    });
  }
});

console.log(`Found ${validRefs.size} valid reference targets.`);

let errors = 0;

function checkRef(ref, filePath, field) {
  if (!ref) return;
  
  // If it's a relative path starting with '.', check file existence
  if (ref.startsWith('.')) {
    // Resolve relative to the file directory
    const dir = path.dirname(filePath);
    let target = path.resolve(dir, ref);
    if (!fs.existsSync(target) && !fs.existsSync(target + '.md') && !fs.existsSync(target + '.mdx')) {
        console.error(`ERROR: [${path.relative(docsDir, filePath)}] Invalid path in field '${field}': "${ref}"`);
        errors++;
    }
  } else {
    // Check if it's a valid title or tag
    if (!validRefs.has(ref)) {
        console.error(`ERROR: [${path.relative(docsDir, filePath)}] Invalid link in field '${field}': "${ref}"`);
        errors++;
    }
  }
}

console.log('\n--- Checking front-matter references ---');
[methodsDir, practicesDir, risksDir].forEach(dir => {
  walk(dir, (filePath) => {
    if (!filePath.endsWith('.md')) return;
    const content = fs.readFileSync(filePath, 'utf8');
    const fm = parseFrontMatter(content);
    if (!fm) return;

    // Check title (should exist)
    if (fm.part_of) checkRef(fm.part_of, filePath, 'part_of');

    // Check method.practices
    fm.method.practices.forEach(p => {
      checkRef(p.tag, filePath, 'method.practices.tag');
    });

    // Check practice mitigates/attendant/related
    fm.practice.mitigates.forEach(m => checkRef(m.tag, filePath, 'practice.mitigates.tag'));
    fm.practice.attendant.forEach(a => checkRef(a.tag, filePath, 'practice.attendant.tag'));
    fm.practice.related.forEach(r => checkRef(r, filePath, 'practice.related'));
  });
});

if (errors > 0) {
  console.log(`\nFound ${errors} potential link errors in front-matter.`);
  // We'll exit with 0 for now so as not to break the build, 
  // but let's see if the user wants it to be a hard failure.
  // Actually, usually users want builders to fail on errors.
  process.exit(1);
} else {
  console.log('\nNo front-matter reference errors found.');
  process.exit(0);
}

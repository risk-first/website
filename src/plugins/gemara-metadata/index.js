const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

/**
 * Plugin to collect mapping references from metadata.yaml files
 * and make them available as global data for gemara components.
 */
module.exports = async function gemaraMetadataPlugin(context, options) {
  return {
    name: 'gemara-metadata',
    
    async loadContent() {
      const { siteDir } = context;
      const docsDir = path.join(siteDir, 'docs');
      
      const mappingReferences = {};
      const catalogs = {};
      
      // Find all metadata.yaml files recursively
      function findMetadataFiles(dir) {
        const files = [];
        try {
          const entries = fs.readdirSync(dir, { withFileTypes: true });
          for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory() && !entry.name.startsWith('.')) {
              files.push(...findMetadataFiles(fullPath));
            } else if (entry.name === 'metadata.yaml' || entry.name === 'metadata.yml') {
              files.push(fullPath);
            }
          }
        } catch (err) {
          // Directory doesn't exist or can't be read
        }
        return files;
      }
      
      const metadataFiles = findMetadataFiles(docsDir);
      
      for (const filePath of metadataFiles) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          const data = yaml.load(content);
          
          if (data?.metadata) {
            const meta = data.metadata;
            const catalogId = meta.id;
            
            // Store catalog info
            if (catalogId) {
              catalogs[catalogId] = {
                id: catalogId,
                title: meta.title,
                description: meta.description,
                version: meta.version,
                author: meta.author,
                filePath: path.relative(siteDir, filePath),
              };
            }
            
            // Collect mapping references
            if (meta['mapping-references']) {
              for (const ref of meta['mapping-references']) {
                mappingReferences[ref.id] = {
                  id: ref.id,
                  title: ref.title,
                  version: ref.version,
                  description: ref.description,
                  url: ref.url,
                  catalog: catalogId,
                };
              }
            }
          }
        } catch (err) {
          console.warn(`[gemara-metadata] Error parsing ${filePath}:`, err.message);
        }
      }
      
      return { mappingReferences, catalogs };
    },
    
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    },
  };
};

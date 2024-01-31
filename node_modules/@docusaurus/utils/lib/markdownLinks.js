"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceMarkdownLinks = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const dataFileUtils_1 = require("./dataFileUtils");
const pathUtils_1 = require("./pathUtils");
function parseCodeFence(line) {
    const match = line.trim().match(/^(?<fence>`{3,}|~{3,})(?<rest>.*)/);
    if (!match) {
        return null;
    }
    return {
        type: match.groups.fence[0],
        definitelyOpen: !!match.groups.rest,
        count: match.groups.fence.length,
    };
}
/**
 * Takes a Markdown file and replaces relative file references with their URL
 * counterparts, e.g. `[link](./intro.md)` => `[link](/docs/intro)`, preserving
 * everything else.
 *
 * This method uses best effort to find a matching file. The file reference can
 * be relative to the directory of the current file (most likely) or any of the
 * content paths (so `/tutorials/intro.md` can be resolved as
 * `<siteDir>/docs/tutorials/intro.md`). Links that contain the `http(s):` or
 * `@site/` prefix will always be ignored.
 */
function replaceMarkdownLinks({ siteDir, fileString, filePath, contentPaths, sourceToPermalink, }) {
    const brokenMarkdownLinks = [];
    // Replace internal markdown linking (except in fenced blocks).
    let lastOpenCodeFence = null;
    const lines = fileString.split('\n').map((line) => {
        const codeFence = parseCodeFence(line);
        if (codeFence) {
            if (!lastOpenCodeFence) {
                lastOpenCodeFence = codeFence;
            }
            else if (!codeFence.definitelyOpen &&
                lastOpenCodeFence.type === codeFence.type &&
                lastOpenCodeFence.count <= codeFence.count) {
                // All three conditions must be met in order for this to be considered
                // a closing fence.
                lastOpenCodeFence = null;
            }
        }
        if (lastOpenCodeFence) {
            return line;
        }
        let modifiedLine = line;
        // Replace inline-style links or reference-style links e.g:
        // This is [Document 1](doc1.md)
        // [doc1]: doc1.md
        const linkTitlePattern = '(?:\\s+(?:\'.*?\'|".*?"|\\(.*?\\)))?';
        const linkSuffixPattern = '(?:\\?[^#>\\s]+)?(?:#[^>\\s]+)?';
        const linkCapture = (forbidden) => `((?!https?://|@site/)[^${forbidden}#?]+)`;
        const linkURLPattern = `(?:(?!<)${linkCapture('()\\s')}${linkSuffixPattern}|<${linkCapture('>')}${linkSuffixPattern}>)`;
        const linkPattern = new RegExp(`\\[(?:(?!\\]\\().)*\\]\\(\\s*${linkURLPattern}${linkTitlePattern}\\s*\\)|^\\s*\\[[^[\\]]*[^[\\]\\s][^[\\]]*\\]:\\s*${linkURLPattern}${linkTitlePattern}$`, 'dgm');
        let mdMatch = linkPattern.exec(modifiedLine);
        while (mdMatch !== null) {
            // Replace it to correct html link.
            const mdLink = mdMatch.slice(1, 5).find(Boolean);
            const mdLinkRange = mdMatch.indices.slice(1, 5).find(Boolean);
            if (!/\.mdx?$/.test(mdLink)) {
                mdMatch = linkPattern.exec(modifiedLine);
                continue;
            }
            const sourcesToTry = [];
            // ./file.md and ../file.md are always relative to the current file
            if (!mdLink.startsWith('./') && !mdLink.startsWith('../')) {
                sourcesToTry.push(...(0, dataFileUtils_1.getContentPathList)(contentPaths), siteDir);
            }
            // /file.md is always relative to the content path
            if (!mdLink.startsWith('/')) {
                sourcesToTry.push(path_1.default.dirname(filePath));
            }
            const aliasedSourceMatch = sourcesToTry
                .map((p) => path_1.default.join(p, decodeURIComponent(mdLink)))
                .map((source) => (0, pathUtils_1.aliasedSitePath)(source, siteDir))
                .find((source) => sourceToPermalink[source]);
            const permalink = aliasedSourceMatch
                ? sourceToPermalink[aliasedSourceMatch]
                : undefined;
            if (permalink) {
                // MDX won't be happy if the permalink contains a space, we need to
                // convert it to %20
                const encodedPermalink = permalink
                    .split('/')
                    .map((part) => part.replace(/\s/g, '%20'))
                    .join('/');
                modifiedLine = `${modifiedLine.slice(0, mdLinkRange[0])}${encodedPermalink}${modifiedLine.slice(mdLinkRange[1])}`;
                // Adjust the lastIndex to avoid passing over the next link if the
                // newly replaced URL is shorter.
                linkPattern.lastIndex += encodedPermalink.length - mdLink.length;
            }
            else {
                const brokenMarkdownLink = {
                    contentPaths,
                    filePath,
                    link: mdLink,
                };
                brokenMarkdownLinks.push(brokenMarkdownLink);
            }
            mdMatch = linkPattern.exec(modifiedLine);
        }
        return modifiedLine;
    });
    const newContent = lines.join('\n');
    return { newContent, brokenMarkdownLinks };
}
exports.replaceMarkdownLinks = replaceMarkdownLinks;
//# sourceMappingURL=markdownLinks.js.map
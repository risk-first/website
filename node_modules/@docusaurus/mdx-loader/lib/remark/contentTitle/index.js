"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A remark plugin to extract the h1 heading found in Markdown files
 * This is exposed as "data.contentTitle" to the processed vfile
 * Also gives the ability to strip that content title (used for the blog plugin)
 */
const plugin = function plugin(options = {}) {
    // content title is
    const removeContentTitle = options.removeContentTitle ?? false;
    return async (root, vfile) => {
        const { toString } = await import('mdast-util-to-string');
        const { visit, EXIT } = await import('unist-util-visit');
        visit(root, 'heading', (headingNode, index, parent) => {
            if (headingNode.depth === 1) {
                vfile.data.contentTitle = toString(headingNode);
                if (removeContentTitle) {
                    // @ts-expect-error: TODO how to fix?
                    parent.children.splice(index, 1);
                }
                return EXIT; // We only handle the very first heading
            }
            // We only handle contentTitle if it's the very first heading found
            if (headingNode.depth >= 1) {
                return EXIT;
            }
            return undefined;
        });
    };
};
exports.default = plugin;
//# sourceMappingURL=index.js.map
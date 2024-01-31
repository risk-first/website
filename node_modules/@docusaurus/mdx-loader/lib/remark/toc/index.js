"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const parser_1 = require("@babel/parser");
const traverse_1 = tslib_1.__importDefault(require("@babel/traverse"));
const stringify_object_1 = tslib_1.__importDefault(require("stringify-object"));
const utils_1 = require("../utils");
const parseOptions = {
    plugins: ['jsx'],
    sourceType: 'module',
};
const isImport = (child) => child.type === 'mdxjsEsm' && child.value.startsWith('import');
const hasImports = (index) => index > -1;
const isExport = (child) => child.type === 'mdxjsEsm' && child.value.startsWith('export');
const isTarget = (child, name) => {
    let found = false;
    const ast = (0, parser_1.parse)(child.value, parseOptions);
    (0, traverse_1.default)(ast, {
        VariableDeclarator: (path) => {
            if (path.node.id.name === name) {
                found = true;
            }
        },
    });
    return found;
};
const getOrCreateExistingTargetIndex = async (children, name) => {
    let importsIndex = -1;
    let targetIndex = -1;
    children.forEach((child, index) => {
        if (isImport(child)) {
            importsIndex = index;
        }
        else if (isExport(child) && isTarget(child, name)) {
            targetIndex = index;
        }
    });
    if (targetIndex === -1) {
        const target = await createExportNode(name, []);
        targetIndex = hasImports(importsIndex) ? importsIndex + 1 : 0;
        children.splice(targetIndex, 0, target);
    }
    return targetIndex;
};
const plugin = function plugin(options = {}) {
    const name = options.name || 'toc';
    return async (root) => {
        const { toString } = await import('mdast-util-to-string');
        const { visit } = await import('unist-util-visit');
        const headings = [];
        visit(root, 'heading', (child) => {
            const value = toString(child);
            // depth:1 headings are titles and not included in the TOC
            if (!value || child.depth < 2) {
                return;
            }
            headings.push({
                value: (0, utils_1.toValue)(child, toString),
                id: child.data.id,
                level: child.depth,
            });
        });
        const { children } = root;
        const targetIndex = await getOrCreateExistingTargetIndex(children, name);
        if (headings?.length) {
            children[targetIndex] = await createExportNode(name, headings);
        }
    };
};
exports.default = plugin;
async function createExportNode(name, object) {
    const { valueToEstree } = await import('estree-util-value-to-estree');
    return {
        type: 'mdxjsEsm',
        value: `export const ${name} = ${(0, stringify_object_1.default)(object)}`,
        data: {
            estree: {
                type: 'Program',
                body: [
                    {
                        type: 'ExportNamedDeclaration',
                        declaration: {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    id: {
                                        type: 'Identifier',
                                        name,
                                    },
                                    init: valueToEstree(object),
                                },
                            ],
                            kind: 'const',
                        },
                        specifiers: [],
                        source: null,
                    },
                ],
                sourceType: 'module',
            },
        },
    };
}
//# sourceMappingURL=index.js.map
/**
 * Check if `node` is a declaration.
 *
 * @param {Readonly<Node>} node
 *   Node to check.
 * @returns {node is Declaration}
 *   Whether `node` is a declaration.
 */
export function isDeclaration(node: Readonly<Node>): node is import("estree").Declaration;
export type Declaration = import('estree-jsx').Declaration;
export type Node = import('estree-jsx').Node;

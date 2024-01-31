/**
 * @param {Readonly<Node>} from
 *   Node to take from.
 * @param {Node} to
 *   Node to add to.
 * @returns {undefined}
 *   Nothing.
 */
export function create(from: Readonly<Node>, to: Node): undefined;
export type Node = import('estree-jsx').Node;

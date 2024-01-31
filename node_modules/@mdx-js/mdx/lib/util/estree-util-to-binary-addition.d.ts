/**
 * @param {ReadonlyArray<Expression>} expressions
 *   Expressions.
 * @returns {Expression}
 *   Addition.
 */
export function toBinaryAddition(expressions: ReadonlyArray<Expression>): Expression;
export type Expression = import('estree-jsx').Expression;

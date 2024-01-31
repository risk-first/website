# estree-util-value-to-estree

[![github actions](https://github.com/remcohaszing/estree-util-value-to-estree/actions/workflows/ci.yaml/badge.svg)](https://github.com/remcohaszing/estree-util-value-to-estree/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/remcohaszing/estree-util-value-to-estree/branch/main/graph/badge.svg)](https://codecov.io/gh/remcohaszing/estree-util-value-to-estree)
[![npm](https://img.shields.io/npm/v/estree-util-value-to-estree)](https://www.npmjs.com/package/estree-util-value-to-estree)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)

Convert a JavaScript value to an [estree](https://github.com/estree/estree) expression

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [API](#api)
    - [`valueToEstree(value, options?)`](#valuetoestreevalue-options)
      - [options](#options)
- [License](#license)

## Installation

```sh
npm install estree-util-value-to-estree
```

## Usage

This package converts a JavaScript value to an [estree](https://github.com/estree/estree) for values
that can be constructed without the need for a context.

Currently the following types are supported:

- arrays
- bigints
- booleans
- dates
- maps
- null
- numbers (including `Infinity`, `NaN`, and negative numbers)
- objects (plain objects only)
- regular expressions
- sets
- strings
- symbols (only global symbols)
- typed arrays (`BigInt64Array`, `BigUint64Array`, `Float32Array`, `Float64Array`, `Int8Array`,
  `Int16Array`, `Int32Array`, `Uint8Array`, `Uint8ClampedArray`, `Uint16Array`, and`Uint32Array`)
- undefined
- URL objects
- URLSearchParams objects

if `options.instanceAsObject` is set to `true`, other objects are turned into plain object.

```ts
import { deepEqual, throws } from 'node:assert/strict'

import { valueToEstree } from 'estree-util-value-to-estree'

const result = valueToEstree({
  null: null,
  undefined,
  string: 'Hello world!',
  number: 42,
  negativeNumber: -1337,
  infinity: Number.POSITIVE_INFINITY,
  notANumber: Number.NaN,
  regex: /\w+/i,
  date: new Date('1970-01-01'),
  array: ['I’m an array item!'],
  object: { nested: 'value' }
})

deepEqual(result, {
  type: 'ObjectExpression',
  properties: [
    {
      type: 'Property',
      method: false,
      shorthand: false,
      computed: false,
      kind: 'init',
      key: { type: 'Literal', value: 'null' },
      value: { type: 'Literal', value: null }
    },
    {
      type: 'Property',
      method: false,
      shorthand: false,
      computed: false,
      kind: 'init',
      key: { type: 'Literal', value: 'undefined' },
      value: { type: 'Identifier', name: 'undefined' }
    },
    {
      type: 'Property',
      method: false,
      shorthand: false,
      computed: false,
      kind: 'init',
      key: { type: 'Literal', value: 'string' },
      value: { type: 'Literal', value: 'Hello world!' }
    },
    {
      type: 'Property',
      method: false,
      shorthand: false,
      computed: false,
      kind: 'init',
      key: { type: 'Literal', value: 'number' },
      value: { type: 'Literal', value: 42 }
    },
    {
      type: 'Property',
      method: false,
      shorthand: false,
      computed: false,
      kind: 'init',
      key: { type: 'Literal', value: 'negativeNumber' },
      value: {
        type: 'UnaryExpression',
        operator: '-',
        prefix: true,
        argument: { type: 'Literal', value: 1337 }
      }
    },
    {
      type: 'Property',
      method: false,
      shorthand: false,
      computed: false,
      kind: 'init',
      key: { type: 'Literal', value: 'infinity' },
      value: { type: 'Identifier', name: 'Infinity' }
    },
    {
      type: 'Property',
      method: false,
      shorthand: false,
      computed: false,
      kind: 'init',
      key: { type: 'Literal', value: 'notANumber' },
      value: { type: 'Identifier', name: 'NaN' }
    },
    {
      type: 'Property',
      method: false,
      shorthand: false,
      computed: false,
      kind: 'init',
      key: { type: 'Literal', value: 'regex' },
      value: {
        type: 'Literal',
        value: /\w+/i,
        regex: { pattern: '\\w+', flags: 'i' }
      }
    },
    {
      type: 'Property',
      method: false,
      shorthand: false,
      computed: false,
      kind: 'init',
      key: { type: 'Literal', value: 'date' },
      value: {
        type: 'NewExpression',
        callee: { type: 'Identifier', name: 'Date' },
        arguments: [{ type: 'Literal', value: 0 }]
      }
    },
    {
      type: 'Property',
      method: false,
      shorthand: false,
      computed: false,
      kind: 'init',
      key: { type: 'Literal', value: 'array' },
      value: {
        type: 'ArrayExpression',
        elements: [{ type: 'Literal', value: 'I’m an array item!' }]
      }
    },
    {
      type: 'Property',
      method: false,
      shorthand: false,
      computed: false,
      kind: 'init',
      key: { type: 'Literal', value: 'object' },
      value: {
        type: 'ObjectExpression',
        properties: [
          {
            type: 'Property',
            method: false,
            shorthand: false,
            computed: false,
            kind: 'init',
            key: { type: 'Literal', value: 'nested' },
            value: { type: 'Literal', value: 'value' }
          }
        ]
      }
    }
  ]
})

class Point {
  line: number
  column: number
  constructor(line: number, column: number) {
    this.line = line
    this.column = column
  }
}

// Normally complex objects throw.
throws(() => valueToEstree(new Point(2, 3)))

// `instanceAsObject: true` treats them as plain objects.
deepEqual(valueToEstree(new Point(2, 3), { instanceAsObject: true }), {
  type: 'ObjectExpression',
  properties: [
    {
      type: 'Property',
      method: false,
      shorthand: false,
      computed: false,
      kind: 'init',
      key: { type: 'Literal', value: 'line' },
      value: { type: 'Literal', value: 2 }
    },
    {
      type: 'Property',
      method: false,
      shorthand: false,
      computed: false,
      kind: 'init',
      key: { type: 'Literal', value: 'column' },
      value: { type: 'Literal', value: 3 }
    }
  ]
})
```

### API

This API exports the function `valueToEstree`.

#### `valueToEstree(value, options?)`

Convert a value to an ESTree node.

##### options

- `instanceAsObject` (boolean, default: `false`) — If true, treat objects that have a prototype as
  plain objects.

## License

[MIT](LICENSE.md) © [Remco Haszing](https://github.com/remcohaszing)

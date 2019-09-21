module.exports = {
  base: '/javascript-basic/',
  title: 'JavaScript Basic',
  description: 'Love what you do, do what you love. :)',
  head: [
    ['link', { ref: 'icon', href: '/image/js-cube.png' }],
  ],
  host: '0.0.0.0',
  port: '8080',
  dest: 'docs',
  cache: true,
  extraWatchFiles: [],
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: (config, isServer) => { },
  evergreen: true,
  themeConfig: {
    repo: 'itellboy/javascript-basic',
    lastUpdated: '最后更新',
    sidebarDepth: 1,
    sidebar: [
      ['/welcome', 'welcome'],
      {
        title: '标准内建对象',
        children: [
          '/built-in-objects/infinity',
          '/built-in-objects/nan',
          '/built-in-objects/undefined',
          '/built-in-objects/null',
          '/built-in-objects/global-this',
          '/built-in-objects/eval',
          '/built-in-objects/uneval',
          '/built-in-objects/parse-float',
          '/built-in-objects/parse-int',
          '/built-in-objects/decode-uri',
          '/built-in-objects/decode-uri-component',
          '/built-in-objects/encode-uri',
          '/built-in-objects/encode-uri-component',
          '/built-in-objects/escape',
          '/built-in-objects/unescape',
          '/built-in-objects/object',
          '/built-in-objects/function',
          '/built-in-objects/boolean',
          '/built-in-objects/symbol',
          '/built-in-objects/error',
          '/built-in-objects/eval-error',
          '/built-in-objects/interal-error',
          '/built-in-objects/syntax-error',
          '/built-in-objects/type-error',
          '/built-in-objects/uri-error',
          '/built-in-objects/number',
          '/built-in-objects/big-int',
          '/built-in-objects/date',
          '/built-in-objects/number',
          '/built-in-objects/string',
          '/built-in-objects/regexp',
          '/built-in-objects/array',
          '/built-in-objects/int-8-array',
          '/built-in-objects/uint-8-array',
          '/built-in-objects/uint-8-clamped-array',
          '/built-in-objects/int-16-array',
          '/built-in-objects/uint-16-array',
          '/built-in-objects/int-32-array',
          '/built-in-objects/uint-32-array',
          '/built-in-objects/float-32-array',
          '/built-in-objects/float-64-array',
          '/built-in-objects/big-int-64-array',
          '/built-in-objects/big-uint-64-array',
          '/built-in-objects/map',
          '/built-in-objects/set',
          '/built-in-objects/weak-map',
          '/built-in-objects/weak-set',
          '/built-in-objects/array-buffer',
          '/built-in-objects/shared-array-buffer',
          '/built-in-objects/atomics',
          '/built-in-objects/data-view',
          '/built-in-objects/json',
          '/built-in-objects/promise',
          '/built-in-objects/generator',
          '/built-in-objects/generator-function',
          '/built-in-objects/async-function',
          '/built-in-objects/reflect',
          '/built-in-objects/proxy',
          '/built-in-objects/intl',
          '/built-in-objects/intl-collator',
          '/built-in-objects/intl-date-time-format',
          '/built-in-objects/intl-list-format',
          '/built-in-objects/intl-number-format',
          '/built-in-objects/intl-plural-rules',
          '/built-in-objects/intl-relative-time-format',
          '/built-in-objects/intl-locale',
          '/built-in-objects/web-assembly',
          '/built-in-objects/web-assembly-module',
          '/built-in-objects/web-assembly-instance',
          '/built-in-objects/web-assembly-memory',
          '/built-in-objects/web-assembly-table',
          '/built-in-objects/web-assembly-compile-error',
          '/built-in-objects/web-assembly-link-error',
          '/built-in-objects/web-assembly-runtime-error',
          '/built-in-objects/arguments',
        ],
      }, {
        title: '表达式和操作符',
        children: [
          '/expressions-operators/this',
          '/expressions-operators/function',
          '/expressions-operators/function*',
          '/expressions-operators/class',
          '/expressions-operators/yield',
          '/expressions-operators/yield*',
          '/expressions-operators/async-function',
          '/expressions-operators/await',
          '/expressions-operators/array-init',
          '/expressions-operators/object-init',
          '/expressions-operators/grouping',
          '/expressions-operators/property-accessors',
          '/expressions-operators/new',
          '/expressions-operators/new-target',
          '/expressions-operators/spread-syntax',
          '/expressions-operators/arithmatic-operators',
          '/expressions-operators/delete',
          '/expressions-operators/void',
          '/expressions-operators/typeof',
          '/expressions-operators/bitwise-operators',
          '/expressions-operators/logical-operators',
          '/expressions-operators/in',
          '/expressions-operators/instanceof',
          '/expressions-operators/comparison-operators',
          '/expressions-operators/conditional-operators',
          '/expressions-operators/assignment-operators',
          '/expressions-operators/destructuring-operators',
          '/expressions-operators/comma-operator',
        ],
      }, {
        title: '语句和声明',
        children: [
          '/statements-declarations/block',
          '/statements-declarations/break',
          '/statements-declarations/continue',
          '/statements-declarations/empty',
          '/statements-declarations/if-else',
          '/statements-declarations/switch',
          '/statements-declarations/throw',
          '/statements-declarations/try-catch',
          '/statements-declarations/var',
          '/statements-declarations/let',
          '/statements-declarations/function',
          '/statements-declarations/function*',
          '/statements-declarations/async-function',
          '/statements-declarations/return',
          '/statements-declarations/class',
          '/statements-declarations/do-while',
          '/statements-declarations/for',
          '/statements-declarations/for-in',
          '/statements-declarations/for-of',
          '/statements-declarations/for-wait-of',
          '/statements-declarations/while',
          '/statements-declarations/debugger',
          '/statements-declarations/export',
          '/statements-declarations/import',
          '/statements-declarations/import.meta',
          '/statements-declarations/label',
          '/statements-declarations/with',
        ],
      }, {
        title: '函数',
        children: [
          '/functions/arrow-functions',
          '/functions/default-parameters',
          '/functions/method-definitions',
          '/functions/rest-parameters',
          '/functions/arguments',
          '/functions/getter',
          '/functions/setter',
        ],
      }, {
        title: 'TypeScript',
        children: [
          '/typescript/basic-types',
          '/typescript/interfaces',
          '/typescript/functions',
          '/typescript/generics',
        ],
      }, {
        title: '其他',
        children: [
          '/other/style',
          '/other/interview',
        ],
      }
    ],
  },
}
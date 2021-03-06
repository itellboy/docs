module.exports = {
  base: '/javascript-basic/',
  title: 'JavaScript Basic',
  description: 'Love what you do, do what you love. :)',
  head: [
    ['link', { rel: 'icon', href: '/svg/js-cube.svg', }],
  ],
  host: '0.0.0.0',
  port: '8080',
  cache: true,
  extraWatchFiles: [],
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    '@vuepress/back-to-top', [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-161940276-2'
      }
    ]
  ],
  configureWebpack: (config, isServer) => { },
  evergreen: true,
  themeConfig: {
    repo: 'itellboy/javascript-basic',
    lastUpdated: '最后更新',
    sidebarDepth: 2,
    logo: '/svg/js-cube.svg',
    nav: [
      {
        text: '友情链接',
        items: [
          {
            text: 'Collection',
            link: 'https://itellboy.github.io/collection',
          }
        ],
      }
    ],
    sidebar: [
      ['/welcome', 'welcome'],
      {
        title: '标准内建对象',
        children: [
          {
            title: '值属性',
            children: [
              '/built-in-objects/value-properties/infinity',
              '/built-in-objects/value-properties/nan',
              '/built-in-objects/value-properties/undefined',
              '/built-in-objects/value-properties/null',
              '/built-in-objects/value-properties/global-this',
            ],
          },
          {
            title: '函数属性',
            children: [
              '/built-in-objects/function-properties/eval',
              '/built-in-objects/function-properties/uneval',
              '/built-in-objects/function-properties/is-finite',
              '/built-in-objects/function-properties/is-nan',
              '/built-in-objects/function-properties/parse-float',
              '/built-in-objects/function-properties/parse-int',
              '/built-in-objects/function-properties/decode-uri',
              '/built-in-objects/function-properties/decode-uri-component',
              '/built-in-objects/function-properties/encode-uri',
              '/built-in-objects/function-properties/encode-uri-component',
              '/built-in-objects/function-properties/escape',
              '/built-in-objects/function-properties/unescape',
            ],
          },
          {
            title: '基础对象',
            children: [
              '/built-in-objects/fundamental-objects/object',
              '/built-in-objects/fundamental-objects/function',
              '/built-in-objects/fundamental-objects/boolean',
              '/built-in-objects/fundamental-objects/symbol',
            ],
          },
          {
            title: '异常对象',
            children: [
              '/built-in-objects/error-objects/error',
              '/built-in-objects/error-objects/aggregate-error',
              '/built-in-objects/error-objects/eval-error',
              '/built-in-objects/error-objects/range-error',
              '/built-in-objects/error-objects/reference-error',
              '/built-in-objects/error-objects/syntax-error',
              '/built-in-objects/error-objects/type-error',
              '/built-in-objects/error-objects/uri-error',
            ],
          },
          {
            title: '数值和日期',
            children: [
              '/built-in-objects/numbers-dates/number',
              '/built-in-objects/numbers-dates/big-int',
              '/built-in-objects/numbers-dates/math',
              '/built-in-objects/numbers-dates/date',
            ],
          },
          {
            title: '文本处理',
            children: [
              '/built-in-objects/text-processing/string',
              '/built-in-objects/text-processing/reg-exp',
            ],
          },
          {
            title: '有序集合',
            children: [
              '/built-in-objects/indexed-collections/array',
              '/built-in-objects/indexed-collections/int-8-array',
              '/built-in-objects/indexed-collections/uint-8-array',
              '/built-in-objects/indexed-collections/uint-8-clamped-array',
              '/built-in-objects/indexed-collections/int-16-array',
              '/built-in-objects/indexed-collections/uint-16-array',
              '/built-in-objects/indexed-collections/int-32-array',
              '/built-in-objects/indexed-collections/uint-32-array',
              '/built-in-objects/indexed-collections/float-32-array',
              '/built-in-objects/indexed-collections/float-64-array',
              '/built-in-objects/indexed-collections/big-int-64-array',
              '/built-in-objects/indexed-collections/big-uint-64-array',
            ],
          },
          {
            title: '键值集合',
            children: [
              '/built-in-objects/keyed-collections/map',
              '/built-in-objects/keyed-collections/set',
              '/built-in-objects/keyed-collections/weak-map',
              '/built-in-objects/keyed-collections/weak-set',
            ],
          },
          {
            title: '结构化数据',
            children: [
              '/built-in-objects/structured-data/array-buffer',
              '/built-in-objects/structured-data/shared-array-buffer',
              '/built-in-objects/structured-data/atomics',
              '/built-in-objects/structured-data/data-view',
              '/built-in-objects/structured-data/json',
            ],
          },
          {
            title: '控制抽象',
            children: [
              '/built-in-objects/control-abstraction/promise',
              '/built-in-objects/control-abstraction/generator',
              '/built-in-objects/control-abstraction/generator-function',
              '/built-in-objects/control-abstraction/async-function',
            ],
          },
          {
            title: '反射',
            children: [
              '/built-in-objects/reflection/reflect',
              '/built-in-objects/reflection/proxy',
            ],
          },
          {
            title: '国际化',
            children: [
              '/built-in-objects/i18n/intl',
              '/built-in-objects/i18n/intl-collator',
              '/built-in-objects/i18n/intl-date-time-format',
              '/built-in-objects/i18n/intl-list-format',
              '/built-in-objects/i18n/intl-number-format',
              '/built-in-objects/i18n/intl-plural-rules',
              '/built-in-objects/i18n/intl-relative-time-format',
              '/built-in-objects/i18n/intl-locale',
            ],
          },
          {
            title: 'WebAssembly',
            children: [
              '/built-in-objects/web-assembly/web-assembly',
              '/built-in-objects/web-assembly/web-assembly-module',
              '/built-in-objects/web-assembly/web-assembly-instance',
              '/built-in-objects/web-assembly/web-assembly-memory',
              '/built-in-objects/web-assembly/web-assembly-table',
              '/built-in-objects/web-assembly/web-assembly-compile-error',
              '/built-in-objects/web-assembly/web-assembly-link-error',
              '/built-in-objects/web-assembly/web-assembly-runtime-error',
            ],
          },
        ],
      }, {
        title: '语句',
        children: [
          {
            title: '控制流',
            children: [
              '/statements/control-flow/block',
              '/statements/control-flow/break',
              '/statements/control-flow/continue',
              '/statements/control-flow/empty',
              '/statements/control-flow/if-else',
              '/statements/control-flow/switch',
              '/statements/control-flow/throw',
              '/statements/control-flow/try-catch',
            ],
          },
          {
            title: '语句声明',
            children: [
              '/statements/declarations/var',
              '/statements/declarations/let',
              '/statements/declarations/const',
            ],
          },
          {
            title: '函数与类',
            children: [
              '/statements/functions-classes/function',
              '/statements/functions-classes/function*',
              '/statements/functions-classes/async-function',
              '/statements/functions-classes/return',
              '/statements/functions-classes/class',
            ],
          },
          {
            title: '循环迭代',
            children: [
              '/statements/iterations/do-while',
              '/statements/iterations/for',
              '/statements/iterations/for-each-in',
              '/statements/iterations/for-in',
              '/statements/iterations/for-of',
              '/statements/iterations/for-await-of',
              '/statements/iterations/while',
            ],
          },
          {
            title: '其他',
            children: [
              '/statements/other/debugger',
              '/statements/other/export',
              '/statements/other/import',
              '/statements/other/import.meta',
              '/statements/other/label',
              '/statements/other/with',
            ],
          },
        ],
      }, {
        title: '表达式和操作符',
        children: [
          {
            title: '基本表达式',
            children: [
              '/expressions-operators/primary-expressions/this',
              '/expressions-operators/primary-expressions/function',
              '/expressions-operators/primary-expressions/function*',
              '/expressions-operators/primary-expressions/class',
              '/expressions-operators/primary-expressions/yield',
              '/expressions-operators/primary-expressions/yield*',
              '/expressions-operators/primary-expressions/async-function',
              '/expressions-operators/primary-expressions/await',
              '/expressions-operators/primary-expressions/array-init',
              '/expressions-operators/primary-expressions/object-init',
              ['/built-in-objects/text-processing/reg-exp', '/ab+c/i'],
              '/expressions-operators/primary-expressions/grouping',
            ],
          },
          {
            title: '左结合表达式',
            children: [
              '/expressions-operators/left-hand-side-expressions/property-accessors',
              '/expressions-operators/left-hand-side-expressions/new',
              '/expressions-operators/left-hand-side-expressions/new-target',
              '/expressions-operators/left-hand-side-expressions/spread-syntax',
              '/expressions-operators/left-hand-side-expressions/super',
            ],
          },
          {
            title: '自增自减',
            children: [
              ['/expressions-operators/operators/arithmatic-operators', 'A++'],
              ['/expressions-operators/operators/arithmatic-operators', 'A--'],
              ['/expressions-operators/operators/arithmatic-operators', '++A'],
              ['/expressions-operators/operators/arithmatic-operators', '--A'],
            ],
          },
          {
            title: '一元操作符',
            children: [
              '/expressions-operators/operators/delete',
              '/expressions-operators/operators/void',
              '/expressions-operators/operators/typeof',
              ['/expressions-operators/operators/bitwise-operators', '+'],
              ['/expressions-operators/operators/bitwise-operators', '-'],
              ['/expressions-operators/operators/logical-operators', '~'],
              ['/expressions-operators/operators/logical-operators', '!'],
            ],
          },
          {
            title: '算数运算符',
            children: [
              ['/expressions-operators/operators/arithmatic-operators', '+'],
              ['/expressions-operators/operators/arithmatic-operators', '-'],
              ['/expressions-operators/operators/arithmatic-operators', '*'],
              ['/expressions-operators/operators/arithmatic-operators', '/'],
              ['/expressions-operators/operators/arithmatic-operators', '%'],
              ['/expressions-operators/operators/arithmatic-operators', '**'],
            ],
          },
          {
            title: '关系运算符',
            children: [

              '/expressions-operators/operators/in',
              '/expressions-operators/operators/instanceof',
              ['/expressions-operators/operators/comparison-operators', '>'],
              ['/expressions-operators/operators/comparison-operators', '<'],
              ['/expressions-operators/operators/comparison-operators', '>='],
              ['/expressions-operators/operators/comparison-operators', '<='],

            ],
          },
          {
            title: '相等运算符',
            children: [
              ['/expressions-operators/operators/comparison-operators', '=='],
              ['/expressions-operators/operators/comparison-operators', '!='],
              ['/expressions-operators/operators/comparison-operators', '==='],
              ['/expressions-operators/operators/comparison-operators', '!=='],
            ],
          },
          {
            title: '位移运算符',
            children: [
              ['/expressions-operators/operators/bitwise-operators', '<<'],
              ['/expressions-operators/operators/bitwise-operators', '>>'],
              ['/expressions-operators/operators/bitwise-operators', '>>>'],

            ],
          },
          {
            title: '二进制位运算符',
            children: [
              ['/expressions-operators/operators/bitwise-operators', '&'],
              ['/expressions-operators/operators/bitwise-operators', '|'],
              ['/expressions-operators/operators/bitwise-operators', '^'],

            ],
          },
          {
            title: '二进制逻辑运算符',
            children: [
              ['/expressions-operators/operators/logical-operators', '&&'],
              ['/expressions-operators/operators/logical-operators', '||'],
            ],
          },
          {
            title: '三元表达式',
            children: [
              ['/expressions-operators/operators/conditional-operators', '(condition ? ifTrue : ifFalse)'],
            ],
          },
          {
            title: '赋值运算符',
            children: [
              ['/expressions-operators/operators/assignment-operators', '='],
              ['/expressions-operators/operators/assignment-operators', '*='],
              ['/expressions-operators/operators/assignment-operators', '/='],
              ['/expressions-operators/operators/assignment-operators', '%='],
              ['/expressions-operators/operators/assignment-operators', '+='],
              ['/expressions-operators/operators/assignment-operators', '-='],
              ['/expressions-operators/operators/assignment-operators', '<<='],
              ['/expressions-operators/operators/assignment-operators', '>>='],
              ['/expressions-operators/operators/assignment-operators', '>>>='],
              ['/expressions-operators/operators/assignment-operators', '&='],
              ['/expressions-operators/operators/assignment-operators', '^='],
              ['/expressions-operators/operators/assignment-operators', '|='],
              ['/expressions-operators/operators/destructuring-operators', '[a, b] = [1, 2]'],
              ['/expressions-operators/operators/destructuring-operators', '{a, b} = {a:1, b:2}'],

            ],
          },
        ],
      }, {
        title: '函数',
        children: [
          '/functions/arrow-functions',
          '/functions/default-parameters',
          '/functions/rest-parameters',
          '/functions/arguments',
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
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{863:function(s,t,a){"use strict";a.r(t);var e=a(42),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[s._v("#")]),s._v(" 模块")]),s._v(" "),a("h2",{attrs:{id:"全局模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局模块"}},[s._v("#")]),s._v(" 全局模块")]),s._v(" "),a("p",[s._v("在默认情况下，当你开始在一个新的 TypeScript 文件中写下代码时，它处于全局命名空间中。如在 foo.ts 里的以下代码。")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("如果你在相同的项目里创建了一个新的文件 "),a("code",[s._v("bar.ts")]),s._v("，TypeScript 类型系统将会允许你使用变量 "),a("code",[s._v("foo")]),s._v("，就好像它在全局可用一样：")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// allowed")]),s._v("\n")])])]),a("p",[s._v("毋庸置疑，使用全局变量空间是危险的，因为它会与文件内的代码命名冲突。我们推荐使用下文中将要提到的文件模块。")]),s._v(" "),a("h2",{attrs:{id:"文件模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件模块"}},[s._v("#")]),s._v(" 文件模块")]),s._v(" "),a("p",[s._v("文件模块也被称为外部模块。如果在你的 TypeScript 文件的根级别位置含有 "),a("code",[s._v("import")]),s._v(" 或者 "),a("code",[s._v("export")]),s._v("，那么它会在这个文件中创建一个本地的作用域。因此，我们需要把上文 "),a("code",[s._v("foo.ts")]),s._v(" 改成如下方式（注意 "),a("code",[s._v("export")]),s._v(" 用法）：")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("在全局命名空间里，我们不再有 "),a("code",[s._v("foo")]),s._v("，这可以通过创建一个新文件 "),a("code",[s._v("bar.ts")]),s._v(" 来证明：")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ERROR: \"cannot find name 'foo'\"")]),s._v("\n")])])]),a("p",[s._v("如果你想在 "),a("code",[s._v("bar.ts")]),s._v(" 里使用来自 "),a("code",[s._v("foo.ts")]),s._v(" 的内容，你必须显式地导入它，更新后的 "),a("code",[s._v("bar.ts")]),s._v(" 如下所示。")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// allow")]),s._v("\n")])])]),a("p",[s._v("在 "),a("code",[s._v("bar.ts")]),s._v(" 文件里使用 "),a("code",[s._v("import")]),s._v(" 时，它不仅允许你使用从其他文件导入的内容，还会将此文件 "),a("code",[s._v("bar.ts")]),s._v(" 标记为一个模块，文件内定义的声明也不会“污染”全局命名空间")]),s._v(" "),a("h2",{attrs:{id:"文件模块详情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件模块详情"}},[s._v("#")]),s._v(" 文件模块详情")]),s._v(" "),a("p",[s._v("文件模块拥有强大的功能和较强的可用性。下面我们来讨论它的功能及一些用法。")]),s._v(" "),a("h3",{attrs:{id:"澄清-commonjs-amd-es-modules-others"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#澄清-commonjs-amd-es-modules-others"}},[s._v("#")]),s._v(" 澄清：commonjs, amd, es modules, others")]),s._v(" "),a("p",[s._v("首先，我们需要澄清这些模块系统的不一致性。我将会提供给你我当前的建议，以及消除一些你的顾虑。")]),s._v(" "),a("p",[s._v("你可以根据不同的 "),a("code",[s._v("module")]),s._v(" 选项来把 TypeScript 编译成不同的 JavaScript 模块类型，这有一些你可以忽略的东西：")]),s._v(" "),a("ul",[a("li",[s._v("AMD：不要使用它，它仅能在浏览器工作；")]),s._v(" "),a("li",[s._v("SystemJS：这是一个好的实验，已经被 ES 模块替代；")]),s._v(" "),a("li",[s._v("ES 模块：它并没有准备好。")])]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("module: commonjs")]),s._v(" 选项来替代这些模式，将会是一个好的主意。")]),s._v(" "),a("p",[s._v("怎么书写 TypeScript 模块呢？，这也是一件让人困惑的事。在今天我们应该这么做：")]),s._v(" "),a("ul",[a("li",[s._v("放弃使用 "),a("code",[s._v("import/require")]),s._v(" 语法即 "),a("code",[s._v("import foo = require('foo')")]),s._v(" 写法")]),s._v(" "),a("li",[s._v("推荐使用 ES 模块语法")])]),s._v(" "),a("p",[s._v("这很酷，接下来，让我们看看 ES 模块语法。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("module: commonjs")]),s._v(" 选项以及使用 ES 模块语法导入、导出、编写模块。")])]),s._v(" "),a("h3",{attrs:{id:"es-模块语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es-模块语法"}},[s._v("#")]),s._v(" ES 模块语法")]),s._v(" "),a("ul",[a("li",[s._v("使用 "),a("code",[s._v("export")]),s._v(" 关键字导出一个变量或类型")])]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// foo.ts")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" someVar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("someType")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[a("code",[s._v("export")]),s._v(" 的写法除了上面这种，还有另外一种：")])]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// foo.ts")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" someVar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("someType")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" someVar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" someType "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("你也可以用重命名变量的方式导出：")])]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// foo.ts")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" someVar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" someVar "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" aDifferentName "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("使用 "),a("code",[s._v("import")]),s._v(" 关键字导入一个变量或者是一个类型：")])]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// bar.ts")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" someVar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" someType "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("通过重命名的方式导入变量或者类型：")])]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// bar.ts")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" someVar "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" aDifferentName "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面：")])]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// bar.ts")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 你可以使用 `foo.someVar` 和 `foo.someType` 以及其他任何从 `foo` 导出的变量或者类型")]),s._v("\n")])])]),a("ul",[a("li",[s._v("只导入模块：")])]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'core-js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 一个普通的 polyfill 库")]),s._v("\n")])])]),a("ul",[a("li",[s._v("从其他模块导入后整体导出：")])]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("从其他模块导入后，部分导出：")])]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" someVar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("通过重命名，部分导出从另一个模块导入的项目：")])]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" someVar "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" aDifferentName "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h4",{attrs:{id:"默认导入-导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认导入-导出"}},[s._v("#")]),s._v(" 默认导入／导出")]),s._v(" "),a("p",[s._v("我并不喜欢用默认导出，虽然有默认导出的语法：")]),s._v(" "),a("ul",[a("li",[s._v("使用 "),a("code",[s._v("export default")]),s._v(" "),a("ul",[a("li",[s._v("在一个变量之前（不需要使用 "),a("code",[s._v("let/const/var")]),s._v("）；")]),s._v(" "),a("li",[s._v("在一个函数之前；")]),s._v(" "),a("li",[s._v("在一个类之前。")])])])]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// some var")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("someVar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// some function")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("someFunction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// some class")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("someClass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("导入使用 "),a("code",[s._v("import someName from 'someModule'")]),s._v(" 语法（你可以根据需要为导入命名）：")])]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" someLocalNameForThisFile "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"模块路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块路径"}},[s._v("#")]),s._v(" 模块路径")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("如果你需要使用 "),a("code",[s._v("moduleResolution: node")]),s._v(" 选项，你应该将此选项放入你的配置文件中。如果你使用了 "),a("code",[s._v("module: commonjs")]),s._v(" 选项， "),a("code",[s._v("moduleResolution: node")]),s._v(" 将会默认开启。")])]),s._v(" "),a("p",[s._v("这里存在两种截然不同的模块：")]),s._v(" "),a("ul",[a("li",[s._v("相对模块路径（路径以 "),a("code",[s._v(".")]),s._v(" 开头，例如："),a("code",[s._v("./someFile")]),s._v(" 或者 "),a("code",[s._v("../../someFolder/someFile")]),s._v(" 等）；")]),s._v(" "),a("li",[s._v("其他动态查找模块（如："),a("code",[s._v("core-js")]),s._v("，"),a("code",[s._v("typestyle")]),s._v("，"),a("code",[s._v("react")]),s._v(" 或者甚至是 "),a("code",[s._v("react/core")]),s._v(" 等）。")])]),s._v(" "),a("p",[s._v("它们的主要区别在于系统如何解析模块。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("我将会使用一个概念性术语，"),a("code",[s._v("place")]),s._v(" -- 将在提及查找模式后解释它。")])]),s._v(" "),a("h4",{attrs:{id:"相对模块路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相对模块路径"}},[s._v("#")]),s._v(" 相对模块路径")]),s._v(" "),a("p",[s._v("这很简单，仅仅是按照相对路径来就可以了：")]),s._v(" "),a("ul",[a("li",[s._v("如果文件 "),a("code",[s._v("bar.ts")]),s._v(" 中含有 "),a("code",[s._v("import * as foo from './foo'")]),s._v("，那么 "),a("code",[s._v("foo")]),s._v(" 文件必须与 "),a("code",[s._v("bar.ts")]),s._v(" 文件存在于相同的文件夹下")]),s._v(" "),a("li",[s._v("如果文件 "),a("code",[s._v("bar.ts")]),s._v(" 中含有 "),a("code",[s._v("import * as foo from '../foo'")]),s._v("，那么 "),a("code",[s._v("foo")]),s._v(" 文件所存在的地方必须是 "),a("code",[s._v("bar.ts")]),s._v(" 的上一级目录；")]),s._v(" "),a("li",[s._v("如果文件 "),a("code",[s._v("bar.ts")]),s._v(" 中含有 "),a("code",[s._v("import * as foo from '../someFolder/foo'")]),s._v("，那么 "),a("code",[s._v("foo")]),s._v(" 文件所在的文件夹 "),a("code",[s._v("someFolder")]),s._v(" 必须与 "),a("code",[s._v("bar.ts")]),s._v(" 文件所在文件夹在相同的目录下。")])]),s._v(" "),a("p",[s._v("你还可以思考一下其他相对路径导入的场景。😃")]),s._v(" "),a("h4",{attrs:{id:"动态查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态查找"}},[s._v("#")]),s._v(" 动态查找")]),s._v(" "),a("p",[s._v("当导入路径不是相对路径时，模块解析将会模仿 "),a("a",{attrs:{href:"https://nodejs.org/api/modules.html#modules_all_together",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node 模块解析策略"),a("OutboundLink")],1),s._v("，下面我将给出一个简单例子：")]),s._v(" "),a("ul",[a("li",[s._v("当你使用 "),a("code",[s._v("import * as foo from 'foo'")]),s._v("，将会按如下顺序查找模块：\n"),a("ul",[a("li",[a("code",[s._v("./node_modules/foo")])]),s._v(" "),a("li",[a("code",[s._v("../node_modules/foo")])]),s._v(" "),a("li",[a("code",[s._v("../../node_modules/foo")])]),s._v(" "),a("li",[s._v("直到系统的根目录")])])]),s._v(" "),a("li",[s._v("当你使用 "),a("code",[s._v("import * as foo from 'something/foo'")]),s._v("，将会按照如下顺序查找内容\n"),a("ul",[a("li",[a("code",[s._v("./node_modules/something/foo")])]),s._v(" "),a("li",[a("code",[s._v("../node_modules/something/foo")])]),s._v(" "),a("li",[a("code",[s._v("../../node_modules/something/foo")])]),s._v(" "),a("li",[s._v("直到系统的根目录")])])])]),s._v(" "),a("h3",{attrs:{id:"什么是-place"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-place"}},[s._v("#")]),s._v(" 什么是 "),a("code",[s._v("place")])]),s._v(" "),a("p",[s._v("当我提及被检查的 "),a("code",[s._v("place")]),s._v(" 时，我想表达的是在这个 "),a("code",[s._v("place")]),s._v(" 上，TypeScript 将会检查以下内容（例如一个 "),a("code",[s._v("foo")]),s._v(" 的 "),a("code",[s._v("place")]),s._v("）：")]),s._v(" "),a("ul",[a("li",[s._v("如果这个 "),a("code",[s._v("place")]),s._v(" 表示一个文件，如："),a("code",[s._v("foo.ts")]),s._v("，欢呼！")]),s._v(" "),a("li",[s._v("否则，如果这个 "),a("code",[s._v("place")]),s._v(" 是一个文件夹，并且存在一个文件 "),a("code",[s._v("foo/index.ts")]),s._v("，欢呼！")]),s._v(" "),a("li",[s._v("否则，如果这个 "),a("code",[s._v("place")]),s._v(" 是一个文件夹，并且存在一个 "),a("code",[s._v("foo/package.json")]),s._v(" 文件，在该文件中指定 "),a("code",[s._v("types")]),s._v(" 的文件存在，那么就欢呼！")]),s._v(" "),a("li",[s._v("否则，如果这个 "),a("code",[s._v("place")]),s._v(" 是一个文件夹，并且存在一个 "),a("code",[s._v("package.json")]),s._v(" 文件，在该文件中指定 "),a("code",[s._v("main")]),s._v(" 的文件存在，那么就欢呼！")])]),s._v(" "),a("p",[s._v("从文件类型上来说，我实际上是指 "),a("code",[s._v(".ts")]),s._v("， "),a("code",[s._v(".d.ts")]),s._v(" 或者 "),a("code",[s._v(".js")])]),s._v(" "),a("p",[s._v("就是这样，现在你已经是一个模块查找专家（这并不是一个小小的成功）。")]),s._v(" "),a("h3",{attrs:{id:"重写类型的动态查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重写类型的动态查找"}},[s._v("#")]),s._v(" 重写类型的动态查找")]),s._v(" "),a("p",[s._v("在你的项目里，你可以通过 "),a("code",[s._v("declare module 'somePath'")]),s._v(" 声明一个全局模块的方式，来解决查找模块路径的问题。")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// global.d.ts")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("module")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// some variable declarations")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" bar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("接着 ：")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// anyOtherTsFileInYourProject.ts")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// TypeScript 将假设（在没有做其他查找的情况下）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// foo 是 { bar: number }")]),s._v("\n")])])]),a("h3",{attrs:{id:"import-require-仅仅是导入类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-require-仅仅是导入类型"}},[s._v("#")]),s._v(" "),a("code",[s._v("import/require")]),s._v(" 仅仅是导入类型")]),s._v(" "),a("p",[s._v("以下导入语法：")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("它实际上只做了两件事：")]),s._v(" "),a("ul",[a("li",[s._v("导入 foo 模块的所有类型信息；")]),s._v(" "),a("li",[s._v("确定 foo 模块运行时的依赖关系。")])]),s._v(" "),a("p",[s._v("你可以选择仅加载类型信息，而没有运行时的依赖关系。在继续之前，你可能需要重新阅读本书 "),a("RouterLink",{attrs:{to:"/project/declarationspaces.html"}},[s._v("声明空间部分")]),s._v(" 部分。")],1),s._v(" "),a("p",[s._v("如果你没有把导入的名称当做变量声明空间来用，在编译成 JavaScript 时，导入的模块将会被完全移除。这最好用例子来解释，下面我们将会给出一些示例。")]),s._v(" "),a("h4",{attrs:{id:"例子-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子-1"}},[s._v("#")]),s._v(" 例子 1")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("将会编译成 JavaScript：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code")])]),a("p",[s._v("这是正确的，一个没有被使用的空文件。")]),s._v(" "),a("h4",{attrs:{id:"例子-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子-2"}},[s._v("#")]),s._v(" 例子 2")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" bar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("将会被编译成：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("这是因为 foo （或者其他任何属性如："),a("code",[s._v("foo.bas")]),s._v("）没有被当做一个变量使用。")]),s._v(" "),a("h4",{attrs:{id:"例子-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子-3"}},[s._v("#")]),s._v(" 例子 3")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("将会被编译成（假设是 commonjs）：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("这是因为 "),a("code",[s._v("foo")]),s._v(" 被当做变量使用了。")]),s._v(" "),a("h4",{attrs:{id:"使用例子-懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用例子-懒加载"}},[s._v("#")]),s._v(" 使用例子：懒加载")]),s._v(" "),a("p",[s._v("类型推断需要提前完成，这意味着，如果你想在 "),a("code",[s._v("bar")]),s._v(" 文件里，使用从其他文件 "),a("code",[s._v("foo")]),s._v(" 导出的类型，你将不得不这么做：")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" bar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SomeType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("然而，在某些情景下，你只想在需要时加载模块 "),a("code",[s._v("foo")]),s._v("，此时你需要仅在类型注解中使用导入的模块名称，而"),a("strong",[s._v("不")]),s._v("是在变量中使用。在编译成 JavaScript 时，这些将会被移除。接着，你可以手动导入你需要的模块。")]),s._v(" "),a("p",[s._v("作为一个例子，考虑以下基于 "),a("code",[s._v("commonjs")]),s._v(" 的代码，我们仅在一个函数内导入 "),a("code",[s._v("foo")]),s._v(" 模块：")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadFoo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这是懒加载 foo，原始的加载仅仅用来做类型注解")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" _foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 现在，你可以使用 `_foo` 替代 `foo` 来作为一个变量使用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("一个同样简单的 "),a("code",[s._v("amd")]),s._v(" 模块（使用 requirejs）：")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadFoo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这是懒加载 foo，原始的加载仅仅用来做类型注解")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 现在，你可以使用 `_foo` 替代 `foo` 来作为一个变量使用")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("这些通常在以下情景使用：")]),s._v(" "),a("ul",[a("li",[s._v("在 web app 里， 当你在特定路由上加载 JavaScript 时；")]),s._v(" "),a("li",[s._v("在 node 应用里，当你只想加载特定模块，用来加快启动速度时。")])]),s._v(" "),a("h4",{attrs:{id:"使用例子-打破循环依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用例子-打破循环依赖"}},[s._v("#")]),s._v(" 使用例子：打破循环依赖")]),s._v(" "),a("p",[s._v("类似于懒加载的使用用例，某些模块加载器（commonjs/node 和 amd/requirejs）不能很好的处理循环依赖。在这种情况下，一方面我们使用延迟加载代码，并在另一方面预先加载模块是很实用的。")]),s._v(" "),a("h4",{attrs:{id:"使用例子-确保导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用例子-确保导入"}},[s._v("#")]),s._v(" 使用例子：确保导入")]),s._v(" "),a("p",[s._v("当你加载一个模块，只是想引入其附加的作用（如：模块可能会注册一些像 "),a("a",{attrs:{href:"https://codemirror.net/doc/manual.html#addons",target:"_blank",rel:"noopener noreferrer"}},[s._v("CodeMirror addons"),a("OutboundLink")],1),s._v("）时，然而，如果你仅仅是 "),a("code",[s._v("import/require")]),s._v(" （导入）一些并没有与你的模块或者模块加载器有任何依赖的 JavaScript 代码，（如：webpack），经过 TypeScript 编译后，这些将会被完全忽视。在这种情况下，你可以使用一个 "),a("code",[s._v("ensureImport")]),s._v(" 变量，来确保编译的 JavaScript 依赖与模块。如：")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" bas "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./bas'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" ensureImport"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" bas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"global-d-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-d-ts"}},[s._v("#")]),s._v(" global.d.ts")]),s._v(" "),a("p",[s._v("在上文中，当我们讨论文件模块时，比较了全局变量与文件模块，并且我们推荐使用基于文件的模块，而不是选择污染全局命名空间。")]),s._v(" "),a("p",[s._v("然而，如果你的团队里有 TypeScript 初学者，你可以提供他们一个 "),a("code",[s._v("global.d.ts")]),s._v(" 文件，用来将一些接口或者类型放入全局命名空间里，这些定义的接口和类型能在你的所有 TypeScript 代码里使用。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("对于任何需要编译成 "),a("code",[s._v("JavaScript")]),s._v(" 的代码，我们强烈建议你放入文件模块里。")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("global.d.ts")]),s._v(" 是一种扩充 "),a("code",[s._v("lib.d.ts")]),s._v(" 很好的方式，如果你需要的话。")]),s._v(" "),a("li",[s._v("当你从 "),a("code",[s._v("JS")]),s._v(" 迁移到 "),a("code",[s._v("TS")]),s._v(" 时，定义 "),a("code",[s._v('declare module "some-library-you-dont-care-to-get-defs-for"')]),s._v(" 能让你快速开始。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
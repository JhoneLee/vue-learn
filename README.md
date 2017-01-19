# 说明

------
##1.npm包说明

| 名称        | 说明   |
| --------   | -----  |
|   babel-core   | 在js代码中使用babel api |
| babel-polyfill        |      |
| babel-preset-stage-0        |    es7转换的层次，分为0-4    |
| html-webpack-plugin   |   用来简化创建服务于 webpack bundle 的 HTML 文件  |
| babel-runtime     |   因babel只转换语法而不转换API，需要此包弥补   |
| babel-plugin-transform-runtime  | 转换插件，需要在babelrc中配置   |
| webpack-dev-middleware    | 处理webpack编译后的输出到服务器，配合express使用   |
| webpack-hot-middleware    | 实现无刷新更新 |

###1.html-webpack-plugin 配置
> * title: 用来生成页面的 title 元素
> * filename: 输出的 HTML 文件名，默认是 index.html, 也可以直接配置带有子目录。
> * template: 模板文件路径，支持加载器，比如 html!./index.html
> * inject: true | 'head' | 'body' | false  ,注入所有的资源到特定的 template 或者 templateContent 中，如果设置为 true 或者 body，所有的 javascript 资源将被放置到 body 元素的底部，'head' 将放置到 head 元素中。
> * favicon: 添加特定的 favicon 路径到输出的 HTML 文件中。
> * minify: {} | false , 传递 html-minifier 选项给 minify 输出
> * hash: true | false, 如果为 true, 将添加一个唯一的 webpack 编译 hash 到所有包含的脚本和 CSS 文件，对于解除 cache 很有用。
> * cache: true | false，如果为 true, 这是默认值，仅仅在文件修改之后才会发布文件。
> * showErrors: true | false, 如果为 true, 这是默认值，错误信息会写入到 HTML 页面中
> * chunks: 允许只添加某些块 (比如，仅仅 unit test 块)
> * chunksSortMode: 允许控制块在添加到页面之前的排序方式，支持的值：'none' | 'default' | {function}-default:'auto'

------
##2. .babelrc文件说明
```@js
{
    "presets":["es2015","stage-0"], //转换方式
    "plugins":[] //插件
}
```
------


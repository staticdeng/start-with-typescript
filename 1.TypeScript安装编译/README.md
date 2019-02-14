# TypeScript介绍、安装和编译


## TypeScript 介绍  

1.TypeScript 是由微软开发的一款开源的编程语言，像后端 java、C#这样的面向对象语言可以让 js 开发大型企业项目。  

2.TypeScript 是 Javascript的超级，遵循最新的 ES6、Es5 规范(相当于包含了es6、es5的语法)。TypeScript扩展了JavaScript的语法。  

3.最新的 Vue 、React 也可以集成 TypeScript。

供参考文档：

* [官网](https://www.tslang.cn/docs/home.html)

* [Github TypeScript使用手册](https://github.com/zhongsp/TypeScript)

## TypeScript安装编译

* 安装nodejs环境，用npm全局安装typescript编译器

```
npm install -g typescript
```

* typescript手动编译

typescript文件后缀名为.ts，最后将编译成js文件。ts是js的扩展，想要ts代码在浏览器/Node环境下运行，需要把ts代码编译成js代码。

npm安装typescript后，命令行输入tsc + 文件名就可以把ts编译成js。

在index.ts中：

```ts
console.log('hello typescript')
```
在命令行上，运行typescript编译器：
```
tsc index.ts
```
输出结果为一个index.js文件，它包含了和输入文件中相同的javascript代码。因为typescript是javascript的超集，完全兼容javascript。

## TypeScript自动编译

上面的手动编译ts很麻烦，配置开发编辑工具Visual Studio Code(Vscode)，就可以自动编译ts。

1. 命令行输入tsc --init，会生成配置文件tsconfig.json，使用默认配置即可。

* tsconfig.json详细配置在[官网](https://www.tslang.cn/docs/handbook/tsconfig-json.html)

<img src="../images/tsc01.png" height="400" width="420">

2. 在Vscode编辑器中点击菜单栏-任务-运行任务（遇到错误使用快捷键ctrl + shift + b），点击 tsc:监视-tsconfig.json，在index.ts里面写入js代码并保存，会自动编译成index.js。

上图中修改配置"outDir": "./js"，则index.ts编译后为./js/index.js，不修改则默认为当前路径。

<img src="../images/tsc02.png" >

例子中的[源代码](./index.ts)
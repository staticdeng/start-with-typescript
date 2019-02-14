# Typescript 介绍 、Typescript 安装、Typescript 开发工具


## Typescript 介绍  

1.TypeScript 是由微软开发的一款开源的编程语言，像后端 java、C#这样的面向对象语言可以让 js 开发大型企业项目。  

2.TypeScript 是 Javascript的超级，遵循最新的 ES6、Es5 规范(相当于包含了es6、es5的语法)。TypeScript扩展了JavaScript的语法。  

3.最新的 Vue 、React 也可以集成 TypeScript。

## Typescript 安装 编译

> 安装nodejs环境，用npm全局安装typescript

	npm install -g typescript

> Typescript文件后缀名为.ts，最后将编译成js文件

> Typescript手动编译 => tsc + 文件名  

	// 将index.ts编译成index.js
	tsc index.ts

## Typescript开发工具Vscode自动编译.ts 文件

1.tsc --init	生成配置文件tsconfig.json	

<img src="./images/tsc01.png" height="400" width="420">

2.点击菜单栏任务-运行任务（遇到错误使用快捷键ctrl + shift + b），点击 tsc:监视-tsconfig.json 然后就可以自动生成代码
了  

<img src="./images/tsc02.png" >
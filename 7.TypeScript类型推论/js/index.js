"use strict";
// 变量初始化类型推论
{
    var a = '类型推论';
    // a = true; // Type 'true' is not assignable to type 'string'
}
// 上下文推断
{
    // ts类型检查器根据当前绑定的事件类onkeydown自动推导e的类型为KeyboardEvent，vscode编译器里鼠标放上去就有e推导出来的类型（e:KeyboardEvent）
    document.onkeydown = function (e) {
        // console.log(e.button);  //<- Error Property 'button' does not exist on type 'KeyboardEvent'
    };
}

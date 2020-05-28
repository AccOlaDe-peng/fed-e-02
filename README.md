简答题答案:

1.  10
说明： for循环输出一个打印i的函数数组a,其中的循环体中的i被var声明的，被提升为全局的变量，for循环执行结束后i=10，最后打印结果也是10；

2. 执行报错， Cannot access 'tmp' before initialization     let是块级变量声明，不能在声明之前使用变量

3. 
var arr = [12, 34, 32, 89, 4];
const a = arr => Math.min(...arg);

4. var可以进行变量提升，可以在变量声明前使用，是作用于全局作用域； let和const 是作用于块级作用域；const 声明一个常量时使用，且声明是必须初始化， let 声明的变量在作用域内可修改，且不必须初始化，（const 声明对象是，只是声明对象的地址，对象的属性还是可以修改的）

5. 20
箭头函数的this，定义是就被指定，且绑定定义时所在函数作用域的this.

6. Symbol 是一种无法被重建的基本类型,
用于扩展对象，属性名冲突问题，Symbol 为对象添加用不重复的键；Symbol 模拟实现私有成员；Symbol 全局注册表； 内置 Symbol 常量

7. 浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存，新对象修改都会影响之前对象； 但深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象。
简单的= 属于浅拷贝； object.assign() Object.create() 属于深拷贝

8. javaScript 是单线程语言，实现异步编程：一个负责程序本身运行的"主线程"；另一个负责主线程与其他进程（主要是各种I/O操作）的通信，被称为"Event Loop线程"（消息队列）；每当遇到I/O的时候，主线程就让Event Loop线程去通知相应的I/O程序，然后接着往后运行。等到I/O程序完成操作，Event Loop线程再把结果返回主线程。主线程就调用事先设定的回调函数，完成整个任务。 宏任务就是需要的重新进入Event Loop中排队等待的程序，微任务就是在主线程中直接执行不需要进入 Event Loop中排队等待的程序，同一次事件循环中  微任务永远在宏任务之前执行。

9. 
const timeout = (ss) => {
	return new Promise((resolve, reject)=>{
			setTimeout(()=>{
				resolve(ss)
			},10);
	})
}
timeout(`hello`).then(res=>{
	return timeout(`${res} lagou`)
}).then(res=>{
	return timeout(`${res} i love u`)
}).then(res=>{
	console.log(res)
})

10. JavaScript 是一种脚本编写语言，无需编译，只要嵌入 HTML 代码中，就能由浏览器逐行加载解释执行; 使用的变量为弱类型; 具有动态性; 只依赖于浏览器. 而TypeScript 一种面向对象的编程语言，是 JavaScript 的超集，包含了 JavaScript 的所有元素,使用编译器可将 TypeScript 代码转换为 JavaScript。 

11. 
优点：
·TypeScript 增加了代码的可读性和可维护性：
类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了
可以在编译阶段就发现大部分错误，这总比在运行时候出错好
增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等
·TypeScript 非常包容：
TypeScript 是 JavaScript 的超集，.js 文件可以直接重命名为 .ts 即可
即使不显式的定义类型，也能够自动做出类型推论
可以定义从简单到复杂的几乎一切类型
即使 TypeScript 编译报错，也可以生成 JavaScript 文件
兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 TypeScript 读取
·TypeScript 拥有活跃的社区
大部分第三方库都有提供给 TypeScript 的类型定义文件
Google 开发的 Angular2 就是使用 TypeScript 编写的
TypeScript 拥抱了 ES6 规范，也支持部分 ESNext 草案的规范
缺点：
有一定的学习成本，需要理解接口、泛型、类、枚举类型 等前端工程师可能不是很熟悉的概念
短期可能会增加一些开发成本，毕竟要多写一些类型的定义，不过对于一个需要长期维护的项目，TypeScript 能够减少其维护成本
集成到构建流程需要一些工作量
可能和一些库结合的不是很完美
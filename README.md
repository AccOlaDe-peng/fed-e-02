简答题答案:

1.  描述引用计数的工作原理和优缺点。
引用计数器，引用关系改变时修改引用数字，引用数字为0时立即回收
优点：发现垃圾时立即回收；最大限度减少程序暂停
缺点：无法回收循环引用的对象； 时间开销大

2. 描述标记整理算法的工作流程。
标记整理可以看做是标记清除的增强操作；
标记阶段的操作和标记清除一致；
清除阶段会先执行整理，移动对象位置；

3. 描述V8中新生代存储区垃圾回收的流程。
V8内存一分为二，小空间用于存储新生代对象（32M|16M）用于回收存活时间比较短的对象；回收过程采用复制算法+标记整理；新生代内存区分为二个等大小空间；使用空间为From，空间时间为To;活动对象的存储于From空间；标记整理后将活动对象拷贝To;From与To交换空间完成释放。

4. 描述增量标记算法在何时使用，及工作原理。
在V8清除老生代对象时为提高清除效率优化时使用；清除时，程序执行然后遍历对象进行标记，之后交替执行程序和增量标操作，标记完成后，进行清除操作，完成垃圾回收；

代码题一：
const fp = require('lodash/fp')

//horsepower: 马力 ， dollar_value 价格， in_stock 库存
const cars = [
    {name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: 'Spyker c12 zagato', horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: 'Jaguar XKR-S', horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: 'Aston Martin One-77', horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: 'Pagani Huayra', horsepower: 700, dollar_value: 1300000, in_stock: false}
]

1.
let isLastInStock = fp.flowRight(fp.prop('in_stock'),fp.last)
console.log(isLastInStock(cars))

2.
let getFirstCarName = fp.flowRight(fp.prop('name'), fp.first)
console.log(getFirstCarName(cars))

3.
let _average = function(xs){
    return fp.reduce(fp.add, 0, xs) / xs.length 
}

// let averageDollarValue = function(cars){
//     let dollar_value = fp.map(function(car){
//         return car.dollar_value
//     }, cars)
//     return _average(dollar_value)
// }

let averageDollarValue = fp.flowRight(_average, fp.map(car=>car.dollar_value))
console.log(averageDollarValue(cars))

4. 
let _underscore = fp.replace(/\W+/g, '_')

let sanitizeNames = fp.map(fp.flowRight(_underscore, car=>car.name))
console.log(sanitizeNames(cars))

代码题二
1. 
const fp = require('lodash/fp') //此处后续省略

const { Maybe, Container } = require('./support')  //此处后续省略

let maybe = Maybe.of([5, 6, 1])

let ex1 = maybe
    .map(fp.map(fp.add(1)))

2. 
let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])

let ex2 = xs
    .map(fp.first)

3. 
let safeProp = fp.curry(function(x, o){
    return Maybe.of(o[x])
})
let user = {id: 2, name: 'Albert'}
let ex3 = safeProp('name', user)
    .map(fp.first)
console.log(ex3)

4. 
let ex4 = n => Maybe.of(n)
    .map(parseInt)
    ._value

console.log(ex1(null))
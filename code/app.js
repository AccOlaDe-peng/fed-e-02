const fp = require('lodash/fp')

const { Maybe, Container } = require('./support')

// let maybe = Maybe.of([5, 6, 1])

// let ex1 = maybe
//     .map(fp.map(fp.add(1)))

// console.log(ex1)

// let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])

// let ex2 = xs
//     .map(fp.first)

// console.log(ex2)

// let safeProp = fp.curry(function(x, o){
//     return Maybe.of(o[x])
// })
// let user = {id: 2, name: 'Albert'}
// let ex3 = safeProp('name', user)
//     .map(fp.first)
// console.log(ex3)

let ex1 = n => Maybe.of(n)
    .map(parseInt)
    ._value

console.log(ex1(null))

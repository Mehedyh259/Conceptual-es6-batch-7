const numbers = [1, 2, 3, 4, 5];

// let sum = 0;

// for(let n of numbers){
//     sum+=n
// }

// console.log(sum)

const sum = numbers.reduce((previous,current) => {
    return previous + current
} ,0)
const multi = numbers.reduce((previous,current) => {
    return previous * current
} ,1)

console.log(sum)
console.log(multi)

// previous + current = total

// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15






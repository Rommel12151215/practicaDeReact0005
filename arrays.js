const t = [1, -1, 3]

const t2 = t.concat(5) // crea un nuevo array

console.log(t)  // se imprime [1, -1, 3]
console.log(t2) // se imprime [1, -1, 3, 5]





const t3 = [1, 2, 3] 

const m1 = t3.map(value => value * 2) 
console.log(m1) // se imprime [2, 4, 6]



const t4 = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t4

console.log(first, second)  // se imprime 1, 2
console.log(rest)          // se imprime [3, 4 ,5]
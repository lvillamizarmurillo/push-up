function minNum(samDaily,kellyDaily,difference){
    let increment = 1
    let samSolved = samDaily+difference
    let kellySolved = kellyDaily
    while (kellySolved<=samSolved){
        samSolved = samDaily+difference
        kellySolved = kellySolved+kellyDaily
        increment = increment+1
    }
    return increment
}
let samDaily = parseInt(prompt('SamDaily: : '))
let kellyDaily = parseInt(prompt('KellyDaily: '))
let difference = parseInt(prompt('Diference: '))
const result = minNum(samDaily,kellyDaily,difference)
console.log(`STUDIN       Function\n------       --------\n${samDaily}    ->      samDaily = ${samDaily}\n${kellyDaily}    ->      samDaily = ${kellyDaily}\n${difference}    ->      samDaily = ${difference}\n\n\nOutput: ${result}`);
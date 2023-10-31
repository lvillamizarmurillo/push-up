function sumDiffAdjacentElements(arrayIntegers){
    let resultToString = []
    let result = arrayIntegers[1]
    let resultTotal = 0
    for(let i=0;i<arrayIntegers.length;i++){
        result = result-arrayIntegers[i]
        resultToString.push(result)
        result = arrayIntegers[(i+2)]
    }
    resultToString.pop(1)
    for(let j = 0; j<resultToString.length;j++){
        resultTotal = resultTotal+resultToString[j]
    }
    return resultTotal
}

function findLongestSubsequence(arrayIntegers){
    let resultTotal = sumDiffAdjacentElements(arrayIntegers.sort())
    console.log(`Subsequence: ${arrayIntegers}\nSorted Subsequence: ${arrayIntegers.sort()}\nSum of diff of Adjacent elements: ${resultTotal}\nLength: ${arrayIntegers.length}`);
    return arrayIntegers.length
}
let arrayIntegers = []
let n = parseInt(prompt('Numbers of elements in array: '))
for(let i=0;i<n;i++){
    let element = parseInt(prompt('Number of array in the position '+(i+1)))
    arrayIntegers.push(element)
    arrayIntegers
}

let output = findLongestSubsequence(arrayIntegers);
console.log(`--------------\nOutput\n${output}`);
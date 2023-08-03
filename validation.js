// function add(a,b){
//     if(typeof a !== "number" || typeof b !== 'number'){
//         return "please give me two numbers"
//     }
//     return a+b;
// }

// console.log(add('3',5))

// function findSum(arr){

//     if(!Array.isArray(arr)){
//         return "please provide me an Array"
//     }

//     let sum = 0;
//     for(let i of arr){
//         sum+=i
//     }
//     return sum;
// }

// const x = [1,2,3,4,5];
// console.log(findSum("dfalfjdalfjalf"))


function findVowel(s){

    if(typeof s !== "string"){
        return "please provide me a string"
    }

    let vowel = 0;
    let consonent = 0;
    let space = 0;
    let vowelArray = []

    for(let i=0; i<s.length; i++){
        // a e i o u 
        let char = s[i].toLowerCase();

        if(char === 'a' || char === 'e' || char === 'i' || char === "o" || char === "u"){
            vowel++;
            vowelArray.push(char)
        }else if(char !== " "){
            consonent++
        }else{
            space++
        }
    }

    const obj ={
        vowelCount: vowel,
        consonentCount:consonent,
        spaceCount:space,
        vowelArray: vowelArray
    }

    return obj;

}


const sentence = "the Name Of Our country is bangladesh"
console.log(findVowel(sentence))

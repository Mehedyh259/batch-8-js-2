// function sumOfArray(arr){

//     let sum = 0;

//     for(let i=0; i<arr.length; i++){
//         sum = sum + arr[i]
//     }
//     return sum
// }

// const nums = [1,2,3,4,5];
// const total = sumOfArray(nums)
// console.log(total)


// function sumOfOdds(arr){
//     let sum = 0;

//     // for(let item of arr){
//     //     if(item%2 === 1){
//     //         sum = sum + item
//     //     }
//     // }

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2 === 1){
//             sum = sum + arr[i];
//             // sum +=arr[i]
//         }
//     }


//     return sum;

// }

// const numbers = [1,2,3,4,5,6,7,8,9];

// const total = sumOfOdds(numbers)
// console.log(total)

// const arr = [1,2,3]

// for(var number of arr){
//     console.log(number)
// }


// amar nam mehedy, amar bari rajshahi, amar boyos 56

// function information(info){
//     const sentence = "amar nam "+info.name+", amar bari "+info.address+", amar boyos "+info.age;
//     return sentence
// }


// const myInfo= {
//     name: "mehedy",
//     age: 56,
//     address: "Rajshahi"
// }
// console.log(information(myInfo))

// factorial

// 5! = 5*4*3*2*1 = 120
// 1! = 1
// 0! = 1

// const number = 5;
// let result = 1;

// for(let i = number; i>=1; i-- ){
//     result = result * i;
// }

// console.log(result)


// function factorial(number) {
//     if (number === 0 || number === 1) {
//         return 1;
//     }

//     let result = 1;

//     for (let i = number; i >= 1; i--) {
//         result = result * i;
//     }
//     return result;
// }

// console.log(factorial(5))
// console.log(factorial(0))


// find the largest number from an array


function findLargest(x){ //[5,12,7,9,20,4,2,3];

    let largest = x[0]; //5, 12, 20

    for(let i = 1; i<x.length; i++){

        const currentItem = x[i]

        if(currentItem > largest ){
            largest = currentItem
        }
    }

    // for(let i of x){
    //     const currentItem =i

    //     if(currentItem > largest ){
    //         largest = currentItem
    //     }
    // }

    return largest;

}


// const arr = [5,12,7,9,20,4,2,3];
// console.log(findLargest(arr))

// function biggestFriend(friends){

//     let biggest = friends[0]; // arif

//     for(let i = 1; i<friends.length; i++){
//         if(friends[i].length > biggest.length){
//             biggest = friends[i]
//         }
//     }

// return biggest

// }

// const friends = ["arif","rokib","saki","sunny","mosaddek","babul"]

// console.log(biggestFriend(friends))



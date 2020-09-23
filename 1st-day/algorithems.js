// let numbers = [31, 9, 18, 2, 106, 382, 0, 71, 8239, 791, -2321, 2500, 12, 13]

// let smallestNumber=0 //our 'number stored in memory'

// for(let num of numbers){ //going over each number

//   if(num < smallestNumber){

//     smallestNumber = num //forget the number stored in memory and store num instead
//   }
// }

// console.log("Smallest number is " + smallestNumber)


////ex1 
// const printStars = function (num) {
//     for (let i = 1; i < num + 1; i++) {
//         console.log("*".repeat(i))
//     }
// }
// printStars(5)


////ex2
// const printBackwardsStars = function (num) {
//     for (let i = num; i > 0; i--) {
//         console.log("*".repeat(i));
//     }
// }

// printBackwardsStars(6)


// //ex3
// const printStarSeries = function (num, count) {
//     debugger
//     while(count>0){
//         printStars(num)
//         printBackwardsStars((num-1))
//         count--;
//     }

// }

// printStarSeries(5, 3)

// //ex4
// const reverse = function (str) {

//     let reversed = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i]
//     }
//     return reversed
// }

//   reverse("dog") //should return "god"
//   reverse("race car") //should return "rac ecar"


////ex5
// const isPalindrom = function(word){
//     const reversWord = reverse(word).toLowerCase
//     if(word.toLowerCase === reversWord){
//         return true
//     }
//     return false
// }

// console.log(isPalindrom("Taco Cat"));
// console.log(isPalindrom("olo"));

// // //ex6
// const encrypt = function(word){
//     const alphabet= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//     let encryptWord = ''
//     for(let i=0;i<word.length;i++){
//         for(let j=0;j<alphabet.length;j++){
//             if(word[i]===alphabet[j]){
//                 encryptWord+=alphabet[j+1]
//             }
//         }
//     }
//     return encryptWord;
// }

// console.log(encrypt("cat"));

// // //ex7
// const decrypt = function(word){
//     const alphabet= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//     let encryptWord = ''
//     for(let i=0;i<word.length;i++){
//         for(let j=0;j<alphabet.length;j++){
//             if(word[i]===alphabet[j]){
//                 encryptWord+=alphabet[j-1]
//             }
//         }
//     }
//     return encryptWord;
// }

// console.log(decrypt("dbu"));

// //ex8
// const colors = ["red", "indigo", "white", "teal", "yellow"];
// const foods = ["bread", "cheese", "cucumber"];

// const jumble = function (arr1, arr2) {
//     let jumbledArr = []
//     if(arr1.length >arr2.length){
//         count = arr1.length
//     }else{
//         count = arr2.length
//     }
//     while(count>0){
//         let item1 = arr1.splice(Math.floor(Math.random()*arr1.length), 1);
//         let item2 = arr2.splice(Math.floor(Math.random()*arr2.length), 1);

//         if(item1 != item2 && item1.length>0 && item2.length>0){
//             jumbledArr.push(item1.pop())
//             jumbledArr.push(item2.pop())
//         }
//         else if(item1.length>0 && item2.length===0){
//             jumbledArr.push(item1.pop())
//         }
//         else if(item2.length>0 && item1.length===0){
//             jumbledArr.push(item2.pop())
//         }
//         count--;
//     }

//     return jumbledArr
// }

// console.log(jumble(colors, foods)); // could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]

// //ex9
// const rawDist = {
//     A: 60,
//     B: 10,
//     C: 10,
//     D: 20
// }
// const getLetter = function(){
//     const range = Math.floor(Math.random() * 100)
//     if(range <= 60){
//         return rawDist.A
//     }
//     else if(range>60 && range<70){
//         return rawDist.B
//     }
//     else if(range>70 && range<80){
//         return rawDist.C
//     }
//     else{
//         return rawDist.D
//     }
// }

// console.log(getLetter());



// //ext 1

// const printInLoop = function (arr) {
//    const myloop = setInterval(function(){
//         for (let i = 0; i < arr.length; i++) {
//             console.log(arr[i]);
//         }
//     },1000)
//     $('#stop').on('click', () => {
//         clearInterval(myloop)
//     })
// }

// printInLoop(["down", "the", "rabbit", "hole"])

// //ext 2
let pizzaLocations = [
    { x: 6, y: 12 },
    { x: 3, y: 1 },
    { x: 9, y: 0 },
    { x: 4, y: 10 }
]


let homeLocation = { x: 4, y: 2 }

const findClosest = function (points, point) {
    const selectedLocation = { x: 0, y: 0 }
    let subX = 0
    let suby = 0
    for(let p in points){
        sub 
        if()
    }


}

// findClosest(pizzaLocations, homeLocation) // should return {x: 3, y: 1}
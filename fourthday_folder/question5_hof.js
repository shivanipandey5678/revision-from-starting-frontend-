numbersArray = [2,3,7,8,10.13,15,18,34,25];
let doublesArray=numbersArray.map(function(number){
   return number*2
})
 console.log(doublesArray)


let evenNumbersArray=numbersArray.filter(function(e){
  return  e%2===0
})
console.log(evenNumbersArray)


let numbersArray=numbersArray.reduce(function(acc,cur) {
   return acc+cur
},0)
console.log(numbersArray);

//Problem 3: Use the same function to print Non-Primes from 2 to a given limit

function primechecking(num){
  let count=0;
   for(let i=2;i<=num;i++){
     count=0;
     for(let j=1;j<=num;j++){
       if(i%j===0){
         count++;
       }
     }if(count!==2){
     console.log(i);
   }
   }

}
primechecking(12);

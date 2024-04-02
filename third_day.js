function primechecking(num){
  let count=0;
   for(let i=0;i<=num;i++){
     count=0;
     for(let j=1;j<=i;j++){
       if(i%j===0){
         count++;
       }
     }
   }if(count===2){
     console.log("prime number")
   }else{
     console.log("not a prime number")
   }

}
primechecking(11);

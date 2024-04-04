let arr=[1,2,3,4,5,6,7];
function checking_element(n){
   for(let i=0;i<arr.length;i++){
     if(arr[i]===n){
       return true;
     }
   }
}
let ans=checking_element(11);
if(ans===true){
  console.log("included")
  
}else{
   console.log("not-included")
}

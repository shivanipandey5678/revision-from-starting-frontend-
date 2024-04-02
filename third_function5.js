//Problem 5: Write a function to replace spaces in a given string with - .

 let newstr="";
function replacespacebydash(str){

 for(let i=0;i<str.length;i++){
    if(str[i]==" "){
      newstr+="-";
    }else{
      newstr+=str[i];
    }
      
 }
  console.log(newstr);
    

}
 
replacespacebydash("i'm really happy");


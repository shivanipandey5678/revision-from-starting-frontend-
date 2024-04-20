let data=[];
let info=[];

fetch("https://jsonplaceholder.typicode.com/todos")
// fetching the data
.then((res)=>{
    return (res.json());
    // converted into useable form
})
.then((result)=>{
    // pushing in data array it will append at 0 index
  data.push(result);
for(let i=0;i<=data[0].length-1;i++){
   info.push((data[0][i]));
//    running forloop in data array at index 0 inside then bcoz it is aync function and pushing every object into info array
   
}
let container=document.getElementById("container");
console.log(info)
// checking correct appending
info.forEach(element => {
    // running loop over info every element and create p tag 
    // and input tag and appending it into another div inner_container
    // and after appending every inner_container to main container.i 
    // catched it by using .getElementById 
    let inner_container=document.createElement("div");
    inner_container.className="inner_container";
    let title=document.createElement("p");
    title.innerText=element.title;
    title.id="title";
    let input=document.createElement("input");
    input.type = 'checkbox';
 
    if(element.completed==true){
     
        input.checked=true;
      
    }
   
   
    inner_container.append(title,input)
    container.append(inner_container);
});

})
.catch((error) => {
        console.error('Error:', error); 
});











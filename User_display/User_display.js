let main_container=document.getElementById("container");



fetch("https://reqres.in/api/users")
// fetching data
.then((response)=>{
    if(!response.ok){
        alert("fetching fail");
        // error handling 
    }
    else{
       return response.json()
    }
})
.then((result)=>{
    let data=(result.data);
    console.log(data)
    // checking the api respond
    data.forEach(element => {
        let container_inner=document.createElement("div");
        // creating card div for each user dta object
        container_inner.id="container_inner";
        // giving id ,class to different elemenets so that i can apply css for it
        let photo=document.createElement("img");
        // creating Image,h3,p tag for name,photo,email
        photo.id="photo";
        photo.src=element.avatar;
        
        let user_name=document.createElement("h3");
        user_name.id="user_name";
        user_name.innerText=element.first_name;
        let email=document.createElement("p");
        
        email.innerText=element.email;
        // appending it
        container_inner.append(photo,user_name,email);
        main_container.append(container_inner);
    });
   
})


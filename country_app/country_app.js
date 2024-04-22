let info=[];
let container=document.getElementById("container");
// let buttons=document.querySelectorAll("button");

// buttons.forEach(function(e){
//    if(e.innerHTML=="Sort_ascending"){
//       alert("asc")
//       fetchDataAndLogASc();
   
//    }else if(e.innerHTML=="Sort_Descending"){
//       alert("des")
//       fetchDataAndLogDes();
 
//    }
// })
let Asc_btn=document.querySelector("#asc");
Asc_btn.addEventListener("click",function(){
   alert("sorting on the basis of population(ascending)")
   fetchDataAndLogASc();
})
let Des_btn=document.querySelector("#des");
Des_btn.addEventListener("click",function(){
   alert("sorting on the basis of population(Descending)")
   fetchDataAndLogDes();
})


fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries')
.then((response)=>{
   if(!response.ok){
    alert("fetching issue occur")
   }else{
    return response.json()
   }
})
.then((result)=>{
   (result.data).forEach(element => {
     info.push(element);
     let container_inner=document.createElement("div");
     container_inner.id="container_inner";
     let name_of_country=document.createElement("h3");
     name_of_country.id="name_of_country";
     name_of_country.innerText=`Country : ${element.country}`;
     let rank_of_country=document.createElement("p");
     rank_of_country.innerText=`Rank : ${element.Rank}`;
     let population_of_country=document.createElement("p");
     population_of_country.innerText=`Population : ${element.population}`;
     container_inner.append(name_of_country,rank_of_country,population_of_country);
     container.append(container_inner)



});

})
async function SortDescending() {
   try {
       let fetch_response = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=desc");
       let result = await fetch_response.json();
       let res=await result;
       return res.data; 
   } catch (error) {
       console.error('Error fetching or sorting data:', error);
       return null; 
   }
}

async function fetchDataAndLogDes() {
   container.innerHTML="";
   let data1 = await SortDescending();
   console.log(data1);
   (data1).forEach(element => {
      let heading=document.createElement("h2");
      heading.innerText="sorted in desending of population"
      let container_inner=document.createElement("div");
      container_inner.id="container_inner";
      let name_of_country=document.createElement("h3");
      name_of_country.id="name_of_country";
      name_of_country.innerText=`Country : ${element.country}`;
      let rank_of_country=document.createElement("p");
      rank_of_country.innerText=`Rank : ${element.Rank}`;
      let population_of_country=document.createElement("p");
      population_of_country.innerText=`Population : ${element.population}`;
      container_inner.append(name_of_country,rank_of_country,population_of_country);
      container.append(container_inner)
 
 

 });
   
}

fetchDataAndLogDes();



async function SortAscending() {
   try {
       let fetch_response = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=asc");
       let result = await fetch_response.json();
       let res=await result;
       return res.data; 
   } catch (error) {
       console.error('Error fetching or sorting data:', error);
       return null; 
   }
}

async function fetchDataAndLogASc() {
   container.innerHTML="";
   let data1 = await SortAscending();
   console.log(data1);
   (data1).forEach(element => {
      let heading=document.createElement("h2");
      heading.innerText="sorted in desending of population"
      let container_inner=document.createElement("div");
      container_inner.id="container_inner";
      let name_of_country=document.createElement("h3");
      name_of_country.id="name_of_country";
      name_of_country.innerText=`Country : ${element.country}`;
      let rank_of_country=document.createElement("p");
      rank_of_country.innerText=`Rank : ${element.Rank}`;
      let population_of_country=document.createElement("p");
      population_of_country.innerText=`Population : ${element.population}`;
      container_inner.append(name_of_country,rank_of_country,population_of_country);
      container.append(container_inner)
 
 

 });
   
}

// fetchDataAndLogASc();





  
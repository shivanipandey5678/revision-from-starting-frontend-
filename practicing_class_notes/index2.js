let Products = [

    {
      title : "Mobile",
      description : "16 GB RAM | 64 MP Camera",
      img : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/d/1/-original-imagz6tzjgggzygu.jpeg?q=70",
      price : 48999
    },
    {
        title : "Mobile",
        description : "16 GB RAM | 64 MP Camera",
        img : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/d/1/-original-imagz6tzjgggzygu.jpeg?q=70",
        price : 47999
      },
    {
      title : "Refrigerator",
      description : "4 Star | Instant ICE",
      img : "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/y/d/k/-original-imagwnkacu6rgagg.jpeg?q=70",
      price : 80000
    },
    {
      title : "Laptop",
      description : "32 GB RAM | RTX 3060",
      img : "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/o/t/-original-imaguyhz7cyftguh.jpeg?q=70",
      price : 90599
    },
    {
      title : "Television",
      description : "32 inch LED Display",
      img : "https://rukminim2.flixcart.com/image/312/312/xif0q/television/r/8/t/-original-imagzmeygvkvmzah.jpeg?q=70",
      price : 48999
    },
    {
      title : "Shoes",
      description : "Running support | Memory Foam",
      img : "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/w/j/7/-original-imagyrahgtfzwxbg.jpeg?q=70",
      price : 3999
    },
    {
      title : "Watch",
      description : "Stainless steel build",
      img : "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/s/a/8/-original-imagpzjfpydjvh6k.jpeg?q=70",
      price : 8999
    },
    {
      title : "Air Conditioner",
      description : "5 star , instant cooling",
      img : "https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/0/x/u/-original-imagxuycz3jynfzn.jpeg?q=70",
      price : 62999
    },
    ]

    
let main_container=document.getElementById("container");
let search_box=document.getElementById("search_box");
let search_bt=document.getElementById("search_btn");
let sort_select=document.getElementById('sort_select');
let Asc=document.getElementById('Asc');
let Des=document.getElementById('Des');


     
function display(arr){
  arr.forEach(function(e){
    let inner_cointer = document.createElement("div");
    inner_cointer.className = "inner_cointer";
    inner_cointer.id="inner_cointer;"
    let title = document.createElement("h3");
    title.innerText = e.title;
    let description = document.createElement("p");
    description.innerText = e.description;
    let img = document.createElement("img");
    img.src = e.img;
    let price = document.createElement("p");
    price.innerText = `Price: ${e.price}`;
   
    let add_to_card = document.createElement("button");
    add_to_card.id = "add_to_card";
    add_to_card.innerText = "Add To Card";
    add_to_card.style.background = "red";
    add_to_card.style.color = "white";
    inner_cointer.append(img, title, description, price, add_to_card);
    main_container.append(inner_cointer);
  })
  

}

function searchData(){
   let value=search_box.value;
   let nar=Products.filter((e)=>{
    return (value.toLowerCase())===(e.title.toLowerCase());
   });
 console.log(nar)
 if(nar.length===0){
  main_container.innerHTML="";
  container.innerText="product not found......";
 }
 else if(nar.length>0){
  main_container.innerHTML="";
  display(nar)
 }



}



search_bt.addEventListener('click',searchData)
// function sort_asc(){
//   let narr=Products.sort(a,b){
//     return (a.price-b.price)
//   }
// }





display(Products)
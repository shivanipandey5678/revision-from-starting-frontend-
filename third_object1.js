// Problem-1 Rectangle Object
// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle


 let rectangleobj={
   length:8,
   breadth:2,
   perimeter:function(){
     let result=2*(this.length + this. breadth)
      return result;
   },
  
   area:function(){
      let areaofrec=this.length*this.breadth;
      return areaofrec;
    }
  
 }
let ans=rectangleobj. perimeter();
let ans2=rectangleobj.area();
console.log(ans2)
console.log(ans)

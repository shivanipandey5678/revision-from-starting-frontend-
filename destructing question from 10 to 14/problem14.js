


let greetings={
    English:"hello",
    Spanish:"¡Hola",
    French:"Bonjour"

}
// console.log(greetings)
function generateGreeting(name,language="English"){
   let obj={...greetings};
   if("Spanish"==language){
    let greeting=obj.Spanish;
    console.log(`${greeting},${name}!`)
   }else if("French"==language){
    let greeting=obj.French;
    console.log(`${greeting},${name}!`)
   }else if("English"==language){
    let greeting=obj.English;
    console.log(`${greeting},${name}!`)
   }
   
//    console.log(language)
}
generateGreeting("shivani");
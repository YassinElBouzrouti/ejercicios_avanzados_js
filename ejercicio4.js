//4.1
function findArrayIndex(array, text) {
    return array.indexOf(text)
    
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Anakin"))

//4.2
function removeItem(array, text){
    let i=findArrayIndex(array,text)
    if(i!==-1){
        array.splice(i,1)
        console.log(array)
        
    }else {
        console.log("El elemento no se ha encontrado")
        
    }
    
}


removeItem(mainCharacters, "Anakin")

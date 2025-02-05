const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

  function swap(array,i,j){
    let position1=array[i]
    array[i]=array[j]
    array[j]=position1
    console.log(array);
    
  }

  swap(fantasticFour,2,3)
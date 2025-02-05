function rollDice(n){
    let min = 1
    let max = n
    let randomNumber = Math.random() * (max - min) + min
    console.log(Math.round(randomNumber)); 
}
rollDice(8)
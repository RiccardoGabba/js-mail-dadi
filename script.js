const button = document.getElementById('button');

button.addEventListener('click', function () {
    const emailCheck = document.getElementById('e-mail').value;
    //valore che si inserisce
    const emailList = [
        "riccardo.gabba02@gmail.com"
    ]
    let success = document.getElementById('success');
    if (emailList.includes(emailCheck)) {
        success.innerHTML = 'Email corretta';
    } else {
        success.innerHTML = 'Email sbagliata';
    }
})

const button2 = document.getElementById('button2');
button2.addEventListener('click', function() { 
function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let playerOne = getRndInteger(1, 6);
let playerTwo = getRndInteger(1, 6);


let soluzione = document.getElementById('risultato');
if (playerOne === playerTwo) {
    risultato.innerHTML = 'Draw!'

}else if (playerOne < playerTwo) {
    risultato.innerHTML = 'Player 2 Wins!'

}else if (playerOne > playerTwo){
    document.getElementById('risultato');
    risultato.innerHTML = 'Player 1 Wins!'
}
console.log( playerOne, playerTwo)



})
let randomNumber1 = Math.floor((Math.random() * (6 - 1)) + 1);
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
winner = document.getElementById('winner')
img1 = 'images/dice'+randomNumber1+'.png'
img2 = 'images/dice'+randomNumber2+'.png'
document.getElementById('img1').src = img1;
document.getElementById('img2').src = img2;
if (randomNumber1>randomNumber2){
    winner.innerHTML = 'Player 1 Win'
}
if (randomNumber2>randomNumber1){
    winner.innerHTML = 'Player 2 Win'
}
if (randomNumber2==randomNumber1){
    winner.innerHTML = 'Egalite'
}
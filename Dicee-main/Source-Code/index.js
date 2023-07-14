

document.querySelector("button").addEventListener("click",refresh);

function refresh(){
    var randomNumber1 = Math.floor(Math.random()*6) + 1;
    var randomNumber2 = Math.floor(Math.random()*6) + 1;
    document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
    
if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML = "Player 1 Wins!<span>&#128079</span>";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!<span>&#128079</span>";
}
else{
    document.querySelector("h1").innerHTML = "Its A Draw! <span>&#128108</span>"; 
}
}
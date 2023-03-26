var num1 = Math.round(Math.random()*15);
var num2 = Math.round(Math.random()*20);
var num3 = num1 + Math.round(Math.random()*5);
var maxnum = Math.max(num1,num2,num3)
var num4 = Math.round(Math.random()*5);
var num5 = Math.round(Math.random()*5);
   




document.getElementById('num1').innerHTML = num1;
document.getElementById('num2').innerHTML = num2;
document.getElementById('num3').innerHTML = num3;
document.getElementById('max').innerHTML = maxnum;

if(num4 > num5){
    document.getElementById("score").innerHTML = "You Won " + num4 + "-" + num5;
}
else if(num5 > num4){
    document.getElementById("score").innerHTML = "You Lost " + num4 + "-" + num5
}
else {
    document.getElementById("score").innerHTML = "Its a Tie  " + num4 + "-" + num5
}




let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

		
		for (let i = alphabet.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[alphabet[i], alphabet[j]] = [alphabet[j], alphabet[i]];
		}

		
		let randomIndex = Math.floor(Math.random() * alphabet.length);
		let randomLetter = alphabet[randomIndex];

        let random = Math.floor(Math.random() * alphabet.length);
		let ran = alphabet[random];

	
		let resultElement = document.getElementById("result");
		resultElement.innerHTML = "The MVP is " + randomLetter.toUpperCase() +"."+ran
        
        
    .toUpperCase()+".";
    


let minutes = Math.floor(Math.random() * 90) + 1; 
let hours = (minutes / 60).toFixed(2); 
document.getElementById("time").innerHTML = "The time it took for the first goal was " + minutes +" minutes "+" or "+hours+" hours"




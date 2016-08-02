function domPrompt(msg) {
	var myDivItem = document.createElement("div");
	myDivItem.innerHTML = msg;
	myDivItem.onclick = function(evt) {

	};
	document.body.appendChild(myDivItem);
}

function domAlert(msg) {
	var myDivItem = document.createElement("div");
	myDivItem.innerHTML = msg;
	myDivItem.setAttribute('class', 'alert_class');
	document.body.appendChild(myDivItem);
}

domPrompt("domPrompt domPrompt domPrompt domPrompt");

var promptInput = document.getElementById("promptInput");
promptInput.onkeydown = function(evt) {
	if(evt.key == 'Enter') {
		alert(promptInput.value);
	}
}

var myrps = Math.floor(Math.random() * 3);
var yourps = prompt("Give me your Rock (0), Paper (1) or Scissors (2)");
var result;
console.log(myrps);
console.log(yourps);

if(yourps != 0 && yourps != 1 && yourps != 2) {
	result = "Wrong Input";
	alert(result);
}
else if(myrps == yourps) {
	result = "Tie";
	alert(result);
}
else if(myrps == 0) {
	if(yourps == 1) {
		result = "You Win!";
		alert(result);
	}
	else {
		result = "I Win!";
		alert(result);
	}
}
else if(myrps == 1) {
	if(yourps == 2){
		result = "You Win!";
		alert(result);
	}
	else {
		result = "I Win!";
		alert(result);
	}
}
else {
	if(yourps == 0)
	{
		result = "You Win!";
		alert(result);
	}
	else {
		result = "I Win!";
		alert(result);
	}
}

document.getElementById("Result").innerHTML = result;
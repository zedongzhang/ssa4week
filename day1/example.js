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
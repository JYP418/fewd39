// Vanilla JS

var a = prompt("Input a Number");
var b = prompt("Input a Second Number");

var x = function max(a,b) {	
	if(a > b) {
		alert(a + " is the larger number");
		return a;
	} else {
		alert( b + " is the larger number");
		return b;
	}
};

x(a,b);


// Shortcut JS

function max(num1, num2) {
	return Math.max(num1, num2);
}
max(4, 5);
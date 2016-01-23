var a = prompt("Enter a Number");
var b = prompt("Enter a Second Number");

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
var a = prompt("Enter a Number");
var b = prompt("Enter a Second Number");
var c = prompt("Enter a Third Number");

var x = function maxOfThree(a,b,c) {	
	if(a>b && a>c) {
			alert(a + " " + "is the larger number");
			return a;
	} else if (b>c && b>a) {
			alert( b + " " + "is the larger number");
			return b;
	} else {
		alert(c + " " + "is the larger number");
		return c;
	}
};

x(a,b,c);
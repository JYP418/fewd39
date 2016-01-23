var a = prompt("Input a Number");
var b = prompt("Input a Second Number");
var c = prompt("Input a Third Number");

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
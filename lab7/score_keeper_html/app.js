console.log("this is connected!");

var score = 0;
document.querySelector("#increase-5").addEventListener("click", function() {
	score += 5;
	changeScore();
});

document.querySelector("#decrease-5").addEventListener("click", function() {
	score -= 5;
	changeScore();
});

// // or you can write it on several lines:

// document
// 	.querySelector("#decrease-5")
// 	.addEventListener("click", function() {
// 		score -= 5;
// 		changeScore();
// 	});

document
	.querySelector("#submit-custom-score")
	.addEventListener("click", function () {
		var newScore = document.querySelector("#custom-score").value;
		score = parseInt(newScore);
		console.log(score);

		// clear existing value
		document.querySelector("#custom-score").value = "";

		changeScore();
	});

function changeScore() {
		// we don't want the score to be negative so...
	if (score < 0) {
			// mean the system will not recognize a negative number
		return false;
	} else {
			// this is selecting score id and changing the html which is set at 0 Points to "score + Points" which is the new score
		document.querySelector("#score").textContent = score + " Points";
	}
	};
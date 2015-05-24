var theNumber = 0
var numGuesses = 5
var $div = $("div")

$(document).ready(function() {
	var $input = $("input")
	theNumber = Math.floor((Math.random() * 100) + 1);
	console.log("Type 'theNumber' to cheat")
	makeTable();
	$("#submit").click(function() {
		makeGuess($input.val());
	});
	$("#guessField").keypress(function(e) {
		if (e.keyCode == 13) {
			makeGuess($input.val());
		}
	});
	$("#restart").click(function() {
		location.reload();
	});
});

function makeTable() {
	$("#binarySearchTable").append("<table id='tableID' border='1' align='center'>");
	$("#tableID").append("<tr id='tableRow'>");
	for (i = 1; i <= 100; i++) {
		$("#tableRow").append("<td>" + i + "</td>");
	};
	$("#tableID").append("</tr>");
	$("#binarySearchTable").append("</table>");
};

function makeGuess(guess) {
	if (numGuesses > 0) {
		if (guess == theNumber) {
			$("h3").text("");
			$("h2").text("You Got It!")
			$("#binarySearchTable").fadeOut("fast")
			$("body").css("color", "purple");
			$("body").css("background-color", "green");
		} else if (theNumber - guess <= 5 && theNumber - guess > 0) {
			tooLow(guess);
			hot();
		} else if (guess - theNumber <= 5 && guess - theNumber > 0) {
			tooHigh(guess);
			hot();
		} else if (theNumber - guess <= 10 && theNumber - guess > 0) {
			tooLow(guess);
			warm();
		} else if (guess - theNumber <= 10 && guess - theNumber > 0) {
			tooHigh(guess);
			warm();
		} else if (guess > theNumber) {
			tooHigh(guess);
			cold();
		} else {
			tooLow(guess);
			cold();
		};
		numGuesses--
		$("#numGuesses").text(numGuesses + " Guesses Remaining");
	};
};

function tooHigh(guess) {
	$("#feedbackDirection").text("Try Lower");
	for (i = guess; i <= 100; i++) {
		$("td:nth-child(" + i + ")").fadeOut()
	};	
}

function tooLow(guess) {
	$("#feedbackDirection").text("Try Higher");
	for (i = guess; i > 0; i--) {
		$("td:nth-child(" + i + ")").fadeOut()
	};
}

function cold() {
	$("#feedbackTemp").text("Cold");
	$("body").css("background-color", "blue");
}

function hot() {
	$("#feedbackTemp").text("Hot");
	$("body").css("color", "black")
	$("body").css("background-color", "red");
}

function warm() {
	$("#feedbackTemp").text("Warm");
	$("body").css("background-color", "orange");
};
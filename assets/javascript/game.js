$(document).ready()
var crystalOne = Math.floor(Math.random() *12 + 1)
var crystalTwo = Math.floor(Math.random() *12 + 1)
var crystalThree = Math.floor(Math.random() *12 + 1)
var crystalFour = Math.floor(Math.random() *12 + 1)
var computerGuess = Math.floor(Math.random() *101 + 19)
var score = 0
var wins = 0
var losses = 0
var reset = function(){
	score = 0; 
	crystalOne = Math.floor(Math.random() *12 + 1);
	crystalTwo = Math.floor(Math.random() *12 + 1);
	crystalThree = Math.floor(Math.random() *12 + 1);
	crystalFour = Math.floor(Math.random() *12 + 1);
	computerGuess = Math.floor(Math.random() *101 + 19);
	console.log(crystalOne)
	console.log(crystalTwo)
	console.log(crystalThree)
	console.log(crystalFour)
	console.log(computerGuess)
	$('#score').html('Score: ' + score);
	};
console.log(crystalOne)
console.log(crystalTwo)
console.log(crystalThree)
console.log(crystalFour)
console.log(computerGuess)
console.log(score)

$('#gemMaster').html('Gem Master Number: ' + computerGuess);
score = 0;

//variable gets brought down for click events, gets shot to html if peramiters are a win if/else is a loss.

$('#crystalOne').on('click',function() {
	score = score + crystalOne;
	$('#score').html('Score: ' + score);
	console.log(score)
	if(score === computerGuess) {
		wins++;
		$('#wins').html('Wins: ' + wins);
		reset();
		$('#score').html('Score: ' + score);
		$('#gemMaster').html('Gem Master Number: ' + computerGuess);
	}
	else if(score > computerGuess) {
		losses++;
		$('#losses').html('Losses: ' + losses);
		reset();
		$('#score').html('Score: ' + score);
		$('#gemMaster').html('Gem Master Number: ' + computerGuess);
	}});
$('#crystalTwo').on('click',function() {
	score = score + crystalTwo;
	$('#score').html('Score: ' + score);
	if(score === computerGuess) {
		wins++;
		$('#wins').html('Wins: ' + wins);
		reset();
		$('#score').html('Score: ' + score);
		$('#gemMaster').html('Gem Master Number: ' + computerGuess);
	}
	else if(score > computerGuess) {
		losses++;
		$('#losses').html('Losses:' + losses);
		reset();
		$('#score').html('Score: ' + score);
		$('#gemMaster').html('Gem Master Number: ' + computerGuess);
	}
});
$('#crystalThree').on('click',function() {
	score = score + crystalThree;
	$('#score').html('Score: ' + score);
	console.log(score)
	if(score === computerGuess) {
		wins++;
		$('#wins').html('Wins:' + wins);
		reset();
		$('#score').html('Score: ' + score);
		$('#gemMaster').html('Gem Master Number: ' + computerGuess);
	}
	else if(score > computerGuess) {
		losses++;
		$('#losses').html('Losses:' + losses);
		reset();
		$('#score').html('Score: ' + score);
		$('#gemMaster').html('Gem Master Number: ' + computerGuess);
	}});
$('#crystalFour').on('click',function() {
	score = score + crystalFour;
	$('#score').html('Score: ' + score);
	console.log(score)
	if(score === computerGuess) {
		wins++;
		$('#wins').html('Wins: ' + wins);
		reset();
		$('#score').html('Score: ' + score);
		$('#gemMaster').html('Gem Master Number: ' + computerGuess);
	}
	else if(score > computerGuess) {
		losses++;
		$('#losses').html('Losses: ' + losses);
		reset();
		$('#score').html('Score: ' + score);
		$('#gemMaster').html('Gem Master Number: ' + computerGuess);
	}});







	




















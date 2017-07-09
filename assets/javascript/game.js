$(document).ready()
var crystalOne = Math.floor(Math.random() *12 + 1)
var crystalTwo = Math.floor(Math.random() *12 + 1)
var crystalThree = Math.floor(Math.random() *12 + 1)
var crystalFour = Math.floor(Math.random() *12 + 1)
var computerGuess = Math.floor(Math.random() *101 + 19)
var score = 0
var reset = function(){
	score = 0;
	crystalOne = Math.floor(Math.random() *12 + 1);
	crystalTwo = Math.floor(Math.random() *12 + 1);
	crystalThree = Math.floor(Math.random() *12 + 1);
	crystalFour = Math.floor(Math.random() *12 + 1)
	computerGuess = Math.floor(Math.random() *101 + 19);
	console.log(crystalOne)
	console.log(crystalTwo)
	console.log(crystalThree)
	console.log(crystalFour)
	console.log(computerGuess)
	};
console.log(crystalOne)
console.log(crystalTwo)
console.log(crystalThree)
console.log(crystalFour)
console.log(computerGuess)
console.log(score)

$('#crystalOne').on('click',function() {
	score = score + crystalOne;
	console.log(score)
	if(score === computerGuess) {
		console.log('YOU WIN!');
	}
	else if(score > computerGuess) {
		console.log('YOU LOSE!');
		reset()
	}});
$('#crystalTwo').on('click',function() {
	score = score + crystalTwo;
	console.log(score)
	if(score === computerGuess) {
		console.log('YOU WIN!');
	}
	else if(score > computerGuess) {
		console.log('YOU LOSE!');
		reset()
	}});
$('#crystalThree').on('click',function() {
	score = score + crystalThree;
	console.log(score)
	if(score === computerGuess) {
		console.log('YOU WIN!');
	}
	else if(score > computerGuess) {
		console.log('YOU LOSE!');
		reset()
	}});
$('#crystalFour').on('click',function() {
	score = score + crystalFour;
	console.log(score)
	if(score === computerGuess) {
		console.log('YOU WIN!');
	}
	else if(score > computerGuess) {
		console.log('YOU LOSE!');
		reset()
	}});






	




















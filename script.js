//Function constructor
/*

var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}
//Adding a method to prototype property of Person
Person.prototype.calculateAge = function() {
	console.log(2017 - this.yearOfBirth);
};
//Adding a property 
Person.prototype.lastName = 'Smith';

var john = new Person('John', 1997, 'teacher');

john.calculateAge();

var cena = new Person('Cena', 1999, 'Wrestler');

cena.calculateAge();

//Object.create

var personProto = {
	calculateAge: function() {
		console.log(2017 - this.yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1997;
john.job = 'teacher';

var mark = Object.create(personProto, 
{
	name: { value: 'Mark' },
	yearOfBirth: { value: 1999 },
	job: { value: 'Carpenter' }
});


var obj1 = {
	name: 'John',
	age: 20
};
var obj2 = obj1;
obj1.age = 19;
console.log(obj1.age);
console.log(obj2.age);

var age = 20;
var obj = {
	name: 'Shashank',
	city: 'Bengaluru'
};

function change(a, b) {
	a = 26;
	b.city = 'paris';
}
change(age, obj);
console.log(age);
console.log(obj.city);



//Passing functions as arguments to other functions
var years = [1999, 1997, 1969, 1984, 2010];

function arrCalc(arr, fn) {
	var res = [];
	for(var i = 0; i < arr.length; i++) {
		res.push(fn(arr[i]));
	}
	return res;
};

function isFullAge(age) {
	return age >= 18;
}

function maxHeartRate(age) {
	if(age >= 18 && age <= 81) {
		return Math.round(206.9 - (0.67 * age));
	} else {
		return -1;
	}
}


function calculateAge(yearOfBirth) {
	return (2017 - yearOfBirth);
};

var ages = arrCalc(years, calculateAge);
console.log(ages);
var fullAges = arrCalc(ages, isFullAge);
console.log(fullAges);
var maximumExerciseHeartRates = arrCalc(ages, maxHeartRate);
console.log(maximumExerciseHeartRates);


//Function returning functions

function interviewQuestion(job) {
	if(job === 'Hitman') {
		return function(name) {
			console.log('How many people have you killed, ' + name + '?');
		}
	} else if(job === 'Terrorist') {
		return function(name) {
			console.log('What\'s your favourite gun, ' + name + '?');
		}
	} else {
		return function(name) {
			console.log('So ' + name + ', What do you do?');
		}
	}
}
var hitmanQuestion = interviewQuestion('Hitman');
hitmanQuestion('Shashank');

var terroristQuestion = interviewQuestion('Terrorist');
terroristQuestion('Shashank');

hitmanQuestion('Haruki');

*/
/*
function retirement(retirementAge) {
	var a = ' years left until retirement.';
	return function(yearOfBirth) {
		var age = 2017 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementIndia = retirement(62);
var retirementUS = retirement(66);

retirementIndia(1997);
retirementUS(1997);
//retirement(65)(1997);

function interviewQuestions(job) {
	return function(name) {
		if(job === 'Hitman') {
			console.log('How many people have you killed, ' + name + '?');
		} else if(job === 'Politician') {
			console.log('How many elections have you won, ' + name + '?');
		} else {
			console.log('What are your skills, ' + name + '?');
		}
	}
}

var jobHitman = interviewQuestions('Hitman');
jobHitman('Haruki');
interviewQuestions('Politician')('Rahul Gandhi');


var john  = {
	name: 'John',
	age: 20,
	job: 'Hitman',
	presentation: function (style, timeOfDay) {
		if (style === 'formal') {
			console.log('Good ' + timeOfDay + ' ladies and gentlemen. I\'m ' + this.name + ', I\'m ' + this.age + ' and I\'m a ' + this.job + '.');
		} else if (style === 'friendly') {
			console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m ' + this.age + ' and I\'m a ' + this.job + '. Have a nice ' + timeOfDay + '.');
		}
	}
}

var emily = {
	name: 'Emily',
	age: 22,
	job: 'Designer'
}

john.presentation('friendly', 'evening');

john.presentation.call(emily, 'friendly', 'afternoon');

john.presentation.apply(emily, ['formal', 'evening']);

var johnFormal = john.presentation.bind(john, 'formal');
johnFormal('evening');

var emilyFriendly = john.presentation.bind(emily, 'friendly');
emilyFriendly('orgy');



var years = [1999, 1997, 1969, 1984, 2010];

function arrCalc(arr, fn) {
	var res = [];
	for(var i = 0; i < arr.length; i++) {
		res.push(fn(arr[i]));
	}
	return res;
};

function calculateAge(yearOfBirth) {
	return (2017 - yearOfBirth);
};


function isFullAge(limit, age) {
	return age >= limit;
}

var ages = arrCalc(years, calculateAge);
var fullJapan = arrCalc(ages, isFullAge.bind(this, 20));
console.log(fullJapan);
console.log(ages);

*/

//********************************************************
//Coding challenge 4

var score = 0;
var Question = function(question, options, correctAnswer) {
	this.question = question;
	this.options = options;
	this.correctAnswer = correctAnswer;
}

var ques1 = new Question('Is tomato a vegetable?', ['No', 'Yes'], 0);
var ques2 = new Question('Kya yeh gormint bik chuki hai?', ['bilkul', 'Pata nahi'], 0);
var ques3 = new Question('What is the boiling point of water in centigrade?', [10, 0, 100], 2);

var quesArray = [ques1, ques2, ques3];

function generateQuestion() {
	var num = Math.floor(Math.random() * 3);
	console.log(quesArray[num].question);
	for(var i = 0; i < (quesArray[num].options).length; i++) {
		console.log(i + ' : ' +quesArray[num].options[i]);
	}
	var ans = prompt('Enter response below; Type \'exit\' to quit the game. ', 'Enter response here ');
	if(ans != null && ans !== 'exit') {
		acceptAnswer(ans, num);
		console.log('\n' + '********************************************' + '\n');
		generateQuestion();
	} else {
		alert('You have chosen to quit the game, refresh to play again :)');
	}
}

function acceptAnswer(ans, num) {
	if(ans == quesArray[num].correctAnswer) {
		console.log('Correct answer!');
		score += 1;
		displayScore();
	} else {
		console.log('Incorrect answer :(');
		displayScore();
	}
}

function displayScore() {
	console.log('Score : ' + score);
}

generateQuestion();





//********************************************************












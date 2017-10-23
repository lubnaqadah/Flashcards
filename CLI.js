var Deck = require('./deck.js');
var inquirer = require('inquirer');
var counter = -1;
var result = 0;


var sports= new Deck('Sports');
sports.addCard('Who was the team to win the most world cup titles in history?', 'brazil');
sports.addCard('Who was the team to win the most champions league titles in history?', 'real madrid');

var history = new Deck('History');
history.addCard('World War I began in which year?', '1914');
history.addCard('In what year did a Wall Street crash start the "Great Depression"?', '1929');


//listing the decks to the user 
function start(){
	inquirer.prompt([
		{
			name: "list",
			type: "list",
			choices:["sports", "history"],
			message: "please choose a deck name?"
		}
	]).then(function(answer){


		switch(answer.list) {
			case "sports":
				sport();
				break;
			case "history":
				historyFun()
				break;
						  };

	});}

//function to handle the first deck and it's choices
function sport(){
	counter++

	if (counter < sports.cards.length){
		inquirer.prompt([
			{
				name: "list",
				type: "list",
				choices:["Answer the question", "Flip the card","Exit"],
				message:'The Question is: ' + sports.cards[counter].keyword + ' Would you like to...'
			}
		]).then(function(res){
			if (res.list == "Answer the question"){
				inquirer.prompt([
					{
						name: "answer",
						type: "input",
						message:'Please type in your answer'
					}
				]).then(function(res){

					var a = res.answer.toString().toLowerCase();

					if(a === sports.cards[counter].answer){	

						console.log('-------')
						console.log("That's right!!");
						result++
						console.log('The result: ' + result);
						console.log('-------');
						setTimeout(sport, 1000);

					}else{
						inquirer.prompt([
							{
								name: "list",
								type: "list",
								choices:["Next Card", "Exit"],
								message:'The answer was ' + sports.cards[counter].answer + ' Would you like to...'

							}
						]).then(function(res){
							if (res.answer == 'Exit'){
								console.log('-------')
								console.log("Goodbye")
								console.log('-------')
							}else{
								sport();
							}
						})
					}
				})
			}else if(res.list == "Flip the card"){

				console.log('-------')
				console.log(sports.cards[counter].answer);
				console.log('-------')
				inquirer.prompt([
					{
						name: "list",
						type: "list",
						choices:["Next Card", "Exit"],
						message:'Would you like to...'
					}
				]).then(function(res){
					if (res.list == 'Exit'){
						console.log("Goodbye")
					}else{
						sport();
					}
				})

			}else{
				console.log("Goodbye")
			};


		});

	}else{
		console.log("You answered all the cards of this deck please choose another deck");
		counter = 0
		start()
	}
};



//function to handle the second deck and it's choices

function historyFun(){
	counter++

	if (counter < history.cards.length){
		inquirer.prompt([
			{
				name: "list",
				type: "list",
				choices:["Answer the question", "Flip the card","Exit"],
				message:'The Question is: ' + history.cards[counter].keyword + ' Would you like to...'
			}
		]).then(function(res){
			if (res.list == "Answer the question"){
				inquirer.prompt([
					{
						name: "answer",
						type: "input",
						message:'Please type in your answer'
					}
				]).then(function(res){

					var a = res.answer.toString().toLowerCase();

					if(a === history.cards[counter].answer){	

						console.log('-------')
						console.log("That's right!!");
						result++
						console.log('The result: ' + result);
						console.log('-------');
						setTimeout(historyFun, 1000);

					}else{
						inquirer.prompt([
							{
								name: "list",
								type: "list",
								choices:["Next Card", "Exit"],
								message:'The answer was ' + history.cards[counter].answer + ' Would you like to...'

							}
						]).then(function(res){
							if (res.answer == 'Exit'){
								console.log('-------')
								console.log("Goodbye")
								console.log('-------')
							}else{
								historyFun();
							}
						})
					}
				})
			}else if(res.list == "Flip the card"){

				console.log('-------')
				console.log(history.cards[counter].answer);
				console.log('-------')
				inquirer.prompt([
					{
						name: "list",
						type: "list",
						choices:["Next Card", "Exit"],
						message:'Would you like to...'
					}
				]).then(function(res){
					if (res.list == 'Exit'){
						console.log("Goodbye")
					}else{
						historyFun();
					}
				})

			}else{
				console.log("Goodbye")
			};


		});

	}else{
		console.log("You answered all the cards of this deck please choose another deck");
		counter = 0
		start()
	}
};


start();
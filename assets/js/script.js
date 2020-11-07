var questionArray = [
{


    question: "How many championship Michael Jordan have?",
    choices: [

    "1",
    "8",
    "4",
    "6"
    ],
    answer: "4"
},
{


    question: "What team Kobe Bryant was drafted to first?",
    choices: [

    "Los Angles Lakers",
    "Charlotte Hornets",
    "Orlando Magic",
    "Philedphia 76ers"
    ],
    answer: "Charlotte Hornets"
},
{


    question: "What year did Dwayne Wade win his first championship?", 
    choices: [

    "2002",
    "2008",
    "2010",
    "2006"
    ],
    answer: "2006"
},
{


    question: "When did the NBA started?",
    choices: [

    "June 6th, 1946",
    "August 15th, 1955",
    "May 9th, 1960",
    "October 5th, 1991",
    ],
    answer: "June 6th, 1946"
}
]


//var timmer
var timer= -1;




var count= 75;

document.getElementById('count)').innerHTML=count;
count--;


// keep track of score
var score = 0;

for (var i = 0; i < questionsArray.length; i++){
    var userAnswer = confirm(questionsArray[i].question);

    // TODO: Check the user's answer against the correct answer
    if (userAnswer === answerArray[i]){
        // TODO: Alert the user if they are correct or wrong. Increment the score accordingly
                score++;
                alert("Correct!");
            } else {
                alert("Wrong!");
            }
        }
    

        //alert the user with the final score
alert("Finished! Your score was " + score + " out of " + questionsArray.length);
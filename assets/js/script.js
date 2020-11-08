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


var score = 0;
var currentQuestion = -1
var timeLeft = 0
var timer;






var timeLeft = 75;
document.getElementById("timeLeft").innerHTML = timeLeft;
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
    document.getElementById('incorrect').addEventListener('click', function(){
        sec -=3;
        document.getElementById("timeLeft").innerHTML = timeLeft;
    });

for (var i = 0; i < questionArray.length; i++){
    var userAnswer = confirm(questionArray[i].question);

    //Check the user's answer against the correct answer
    if (userAnswer === answerArray[i]){
    ///  Increment the score accordingly
                score++;
                alert("Correct!");
            } else {
                alert("Wrong!");
            }
        }
    

        //alert the user with the final score
        alert('You got ' + score + '/' + questionArray.length);

document.getElementById("timeLeft").innerHTML = timeLeft;
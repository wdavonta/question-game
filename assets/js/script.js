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
var highscore = 0;






//click "Let's Go" buttom timer will start
timeLeft = 60;
document.getElementById("timeLeft").innerHTML = timeLeft;

timer = setInterval(function() {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;
     //game will end if timer is below zero
    if (timeLeft <= 0) {
        clearInterval(timer);
        endGame(); 
    }
}, 1000);

next();







//answered incorrectly time go down
function incorrect() {
    timeLeft -= 5; 
    next();
}

//answerd correctly time goes up 
function correct() {
    score += 10;
    next();
}



  

    function next() {
        currentQuestion++;
    
        if (currentQuestion > questionArray.length - 1) {
            endGame();
            return;
        }
    
        var testContent = "<h1>" + questionArray[currentQuestion].question + "</h1>"
    
        for (var buttonLoop = 0; buttonLoop < questionArray[currentQuestion].choices.length; buttonLoop++) {
            var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
            buttonCode = buttonCode.replace("[CHOICE]", questionArray[currentQuestion].choices[buttonLoop]);
            if (questionArray[currentQuestion].choices[buttonLoop] == questionArray[currentQuestion].answer) {
                buttonCode = buttonCode.replace("[ANS]", "correct()");
            } else {
                buttonCode = buttonCode.replace("[ANS]", "incorrect()");
            }
            testContent += buttonCode
        }

document.getElementById("testBody").innerHTML = testContent;

}
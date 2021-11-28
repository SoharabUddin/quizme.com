const option = document.querySelectorAll("label");
const questionText = document.getElementById("question-text");
const ans = document.querySelectorAll("input");
const targetDiv = document.getElementById("quesAns");
const subButton = document.getElementById("submit");
const scoreDiv = document.getElementById("score");
const gottenScore =document.getElementById("gottenScore");
const tryAgain = document.getElementById("reset");


let CurrentQuestion =0;
let Score = 0;
let questionNumber = 0;
let questions = [
    {
        question:"1. Which type of JavaScript language is ___", 
        answers:[
            {option:"Object-Oriented",answer: false},
            {option:"Object-Based",answer:true},
            {option: "Assembly-language",answer:false},
            {option: "High-level",answer:false},
        ]
    },
    {
        question:"2. Which one of the following also known as Conditional Expression:", 
        answers:[
            {option:"Alternative to if-else",answer: false},
            {option:"Switch statement",answer:false},
            {option: "If-then-else statement ",answer:false},
            {option: "immediate if",answer:true},
        ]
    },
    {
        question:"3.  In JavaScript, what is a block of statement?", 
        answers:[
            {option:"Conditional block",answer: false},
            {option:"block that combines a number of statements into a single compound statement",answer:true},
            {option: "both conditional block and a single statement",answer:false},
            {option: "block that contains a single statement",answer:false},
        ]
    },
    {
        question:"4.When interpreter encounters an empty statements, what it will do:", 
        answers:[
            {option:"Shows a warning",answer: false},
            {option:"Prompts to complete the statement",answer:false},
            {option: "Throws an error",answer:false},
            {option: "Ignores the statements ",answer:true},
        ]
    },
    {
        question:"5. The 'function' and 'var' are known as:", 
        answers:[
            {option:"Keywords",answer: false},
            {option:"Data types",answer:false},
            {option: "Declaration statements",answer:true},
            {option: "Prototypes",answer:false},
        ]
    },
    {
        question:"6. Which of the following variables takes precedence over the others if the names are the same?", 
        answers:[
            {option:"Global variable",answer: false},
            {option:"The local element",answer:true},
            {option: "The two of the above",answer:false},
            {option: "None of the above",answer:false},
        ]
    },
    {
        question:"7. Which one of the following is the correct way for calling the JavaScript code?", 
        answers:[
            {option:"Preprocessor",answer: false},
            {option:"Triggering Event",answer:false},
            {option: "RMI",answer:false},
            {option: "Function/Method",answer:true},
        ]
    },
    {
        question:"8. Which of the following type of a variable is volatile?", 
        answers:[
            {option:"Mutable variable",answer: true},
            {option:"Dynamic variable",answer:false},
            {option: "Volatile variable",answer:false},
            {option: "Immutable variable",answer:false},
        ]
    },
    {
        question:"9. Which of the following option is used as hexadecimal literal beginning?", 
        answers:[
            {option:"00",answer: false},
            {option:"0x",answer:false},
            {option: "0X",answer:false},
            {option: "Both 0x and 0X",answer:true},
        ]
    },
    {
        question:"10. In the JavaScript, which one of the following is not considered as an error:", 
        answers:[
            {option:"Syntax error",answer: false},
            {option:"Missing of semicolons",answer:false},
            {option: "Division by zero",answer:true},
            {option: "Missing of Bracket",answer:false},
        ]
    }
]



function begQuiz()
{
   
    questionText.innerHTML = questions[questionNumber].question;
    for(var i = 0; i<option.length;i++)
    {
        option[i].innerHTML = questions[questionNumber].answers[i].option;
    }

}
begQuiz();

function submitFn()
{
    if(questionNumber<9)
    {
        let value;
        for(var i=0;i<4;i++)
        {
            if(ans[i].checked)
            {
                value = questions[questionNumber].answers[i].answer;
                break;
            } 
        }
        if(value)
        {
            Score++;
        }
        questionNumber++;
    }
    else
    { 
        location.href = "2nd.html";
    }
   
    begQuiz();
}

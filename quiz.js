state = [
    {
        "question": "Select a String function that finds the match between a regular expression and a string, and to replace the matched substring with a new substring?",
        "option1": "replace()",
        "option2": "match()",
        "option3": "concat()",
        "option4": "search()",
        "answer": 2
      
    },
    {
        "question": "What is the HTML tag under which one can write the JavaScript code?",
        "option1": "<javascript>",
        "option2": "<scripted>",
        "option3": "<script>",
        "option4": "<js>",
        "answer": 3
      
    },
    {
        "question": "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?",
        "option1": "strip()",
        "option2": "trim()",
        "option3": "stripped()",
        "option4": "trimmed()",
        "answer": 2
     
    },
    {
        "question": " In JavaScript, we do not have datatypes like integer and float. What is the function that can be used to check if the number is an integer or not?",
        "option1": "Integer(value)",
        "option2": "ifInteger(value)",
        "option3": "isInteger(value)",
        "option4": "ifinteger(value)",
        "answer": 3
   
    },
    {
        "question": "Which function of an Array object calls a function for each element in the array?",
        "option1": "forEach()",
        "option2": "every()",
        "option3": "forEvery()",
        "option4": "each()",
        "answer": 1
   
    },
    {
        "question": "Which was the first browser to support JavaScript?",
        "option1": "Mozilla Firefox",
        "option2": "Netscape",
        "option3": "Google Chrome",
        "option4": "IE",
        "answer": 2
     
    },
    {
        "question": "Which of the following is an advantage of using JavaScript?",
        "option1": "Increased interactivity.",
        "option2": "Less server interaction.",
        "option3": "Immediate feedback from the users.",
        "option4": "All of the above.",
        "answer": 4
      
    },
    {
        "question": "What is the function of Array object that adds and/or removes elements from an array?",
        "option1": "sort()",
        "option2": "splice()",
        "option3": "toSource()",
        "option4": "unshift",
        "answer": 2
     
    },
    {
        "question": "Which of the following methods removes the last element from an array and returns that element?",
        "option1": "last()",
        "option2": "shift()",
        "option3": "unshift()",
        "option4": "pop()",
        "answer": 4
     
    },
    {
        "question": "Which of the following functions of Number object would return a string version of the number that may change according to the browser’s locale settings?",
        "option1": "toFixed()",
        "option2": "toString()",
        "option3": "toExponential()",
        "option4": "toLocaleString()",
        "answer": 2
      
    }

]

var currentQuestion = 0;
var score = 0;
const totalQuestion = state.length
var wrapper = document.querySelector('.wrapper')
var questionDiv = document.querySelector('.question')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')
var nextButton = document.querySelector('.next')
var result = document.querySelector('.result')
var btnRefresh = document.createElement('button')
var scoreIndicator = document.createElement('span')
var skipBtn = document.querySelector('.skip')
result.style.display = "none"
const loadQuestion = (qIndex) => {
    var ques = state[qIndex]
    questionDiv.textContent = ('Q') + '. ' + ques.question
    opt1.textContent = ques.option1
    opt2.textContent = ques.option2
    opt3.textContent = ques.option3
    opt4.textContent = ques.option4
}

const loadNextQuestion = () => {
    //selected option
    questionDiv.classList.remove('question')
    questionDiv.classList.add('question')
    var selectedOption = document.querySelector('input[type=radio]:checked')
    if (!selectedOption) {
        alert('Please select any answer')
        return
    }
    var answer = selectedOption.value
    if (answer.length && state[currentQuestion].answer == answer) {
        score += 10;
    }
    selectedOption.checked = false
    currentQuestion++
    if (currentQuestion == (totalQuestion - 1)) {
        nextButton.textContent = "Finish"
    }
    if (currentQuestion == totalQuestion) {
        wrapper.style.display = 'none'
        result.style.display = ''
        result.textContent = 'Your score ' + score
    }
    
    loadQuestion(currentQuestion)
}

var skip = () => {
    currentQuestion++
    loadQuestion(currentQuestion)
    console.log(currentQuestion)
    if (currentQuestion === state.length - 1) {
        wrapper.style.display = 'none'
        result.style.display = ''
        result.textContent = 'Your score ' + score
    }
}

function getRandomQuestion(min, max) {
    var number = Math.random() * (max - min) + min;
    return Math.ceil(number)
}

function refreshPage() {
    window.location.reload()
}
nextButton.addEventListener('click',loadNextQuestion)
skipBtn.addEventListener('click',skip)
loadQuestion(currentQuestion)



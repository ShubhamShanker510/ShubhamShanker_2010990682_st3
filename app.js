window.onload = function(){
//                                                    QUIZ APP
var score_global = "";
var totalque_global = "";
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Which type of JavaScript language is ___    ",
    "options": [
    {
    "a": "&lt;object-oriented&gt;",
    "b": "&lt;object-based&gt;",
    "c": "&lt;assembly-language&gt;",
    "d": "&lt;high-level&gt;"
    }
    ],
    "answer": "&lt;object-based&gt;",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "In javascript,what is a block statement?",
    "options": [
    {
    "a": "&lt;block that combines a number of statement into a single compound statement&gt;",
    "b": "&lt;conditional block&gt;",
    "c": "&lt;none of these&gt;"
    }
    ],
    "answer": "&lt;block that combines a number of statement into a single compound statement&gt;",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
    "options": [
    {
    "a": "&ltscript href=&quot;xxx.js&quot;>",
    "b": "&lt;script name=&quot;xxx.js&quot;&gt;",
    "c": "&lt;script src=&quot;xxx.js&quot;&gt;"
    }
    ],
    "answer": "&lt;script src=&quot;xxx.js&quot;&gt;",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "XML is better than JSON",
    "options": [
    {
    "a": "True",
    "b": "False"
    }
    ],
    "answer": "True",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "How do you write &quot;Hello World&quot; in an alert box?",
    "options": [
    {
    "a": "alertBox(&quot;Hello World&quot;);",
    "b": "msg(&quot;Hello World&quot;);",
    "c": "alert(&quot;Hello World&quot;);",
    "d": "msgBox(&quot;Hello World&quot;);",
    }
    ],
    "answer": "alert(&quot;Hello World&quot;);",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "How do you create a function in JavaScript?",
    "options": [
    {
    "a": "function myFunction()",
    "b": "function:myFunction()",
    "c": "function = myFunction()",
    }
    ],
    "answer": "function myFunction()",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "How do you call a function named &quot;myFunction&quot;?",
    "options": [
    {
    "a": "call function myFunction()",
    "b": "call myFunction()",
    "c": "myFunction()",
    }
    ],
    "answer": "myFunction()",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "How to write an IF statement in JavaScript?",
    "options": [
    {
    "a": "if i = 5 then",
    "b": "if i == 5 then",
    "c": "if (i == 5)",
    "d": " if i = 5",
    }
    ],
    "answer": "if (i == 5)",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Which of the following is a disadvantage of using JavaScript?",
    "options": [
    {
    "a": "Client-side JavaScript does not allow the reading or writing of files.",
    "b": "JavaScript can not be used for Networking applications because there is no such support available.",
    "c": "JavaScript doesn't have any multithreading or multiprocess capabilities.",
    "d": "All of the above."
    }
    ],
    "answer": "All of the above.",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
      "question": "the 'fxn' and 'var' are known as:",
    "options": [
    {
    "a": "keywords",
    "b": "data types",
    "c": "declaration statements",
    "d": "none of these",
    }
    ],
    "answer": "declaration statements",
    "score": 0,
    "status": ""
    }
    ]
    }
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    totalque_global = totalque;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    score_global = this.score;
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });


    

document.getElementById('timer').innerHTML =
0 + ":" + 15;
startTimer();


function startTimer() {
var presentTime = document.getElementById('timer').innerHTML;
var timeArray = presentTime.split(/[:]+/);
var m = timeArray[0];
var s = checkSecond((timeArray[1] - 1));
if(s==59){m=m-1}
if(m<0){
  alert("Time Over!!");
  var result1 = 0;
    for (var j=0; j<totalque_global; j++){
      result1 = result1 + quiz.JS[j].score;
    }
  $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + result1 + '/' + totalque_global + "</h1>");
    for (var j = 0; j < totalque_global; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    var x = localStorage.getItem("User_Name");
    document.getElementById("demo").innerHTML = "UserName: " + x;
    var y = localStorage.getItem("Father_Name");
    document.getElementById("demo1").innerHTML = "Father Name: " + y;
    var z = localStorage.getItem("Mobile_Number");
    document.getElementById("demo2").innerHTML = "Mobile Number: " + z;
    var xy = localStorage.getItem("Email");
    document.getElementById("demo3").innerHTML = "Email Id: " + xy;
    // alert(result1);
  return
}

document.getElementById('timer').innerHTML =
  m + ":" + s;
console.log(m)
setTimeout(startTimer, 1000);

}

function checkSecond(sec) {
if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
if (sec < 0) {sec = "59"};
return sec;
}
}
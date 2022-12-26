var choice1 = document.getElementById('choice-1');
var choice2 = document.getElementById('choice-2');
var choice3 = document.getElementById('choice-3');
var choice4 = document.getElementById('choice-4');

var answerTry = document.getElementsByName('answer');
var answerLabel = document.getElementsByClassName('form-check-label');
var answerCorrect = document.getElementById('correct-answer');
var btnVerefication = document.getElementsByClassName('btn');

var success = document.getElementsByClassName('alert-success');
var wrong = document.getElementsByClassName('alert-danger');
btnVerefication[0].onclick = function() {
    for (var i = 0; i < answerTry.length; i++){
    if (answerTry[i].checked){
        answerTry[i].setAttribute('value', Number(answerLabel[i].innerHTML));
        if (answerTry[i].value === answerCorrect.value){
            wrong[0].style.display = "none";
            success[0].style.display = "contents";
        }else{
        success[0].style.display = "none";    
        wrong[0].style.display = "contents";
        }
    }
}
}

var score = 0; //set score to 0
var total = 7; //total number of questions
var point = 1; //points per correct answer
var highest = total * point;

//initialiser
function init(){
    //set correct answers
    sessionStorage.setItem('a1','d');
    sessionStorage.setItem('a2','a');
    sessionStorage.setItem('a3','b');
    sessionStorage.setItem('a4','c');
    sessionStorage.setItem('a5','c');
    sessionStorage.setItem('a6','d');
    sessionStorage.setItem('a7','c');
}

$(document).ready(function(){
    //hide all questions
    $('.questionForm').hide();
    $('#message').hide();

    //show first questin
    $('#q1').show();

    $('.questionForm #submit').click(function(){
        //get data attributes
        current = $(this).parents('form:first').data('question');
        next = $(this).parents('form:first').data('question')+1;
        //hide all questions
        $('.questionForm').hide();
        //show next question
        $('#q'+next+'').fadeIn(300);
        process(''+current+'');
        return false
    });
});

//process the answers
function process(n){
    //get input value
    var submitted = $('input[name=q'+n+']:checked').val();
    if(submitted == sessionStorage.getItem('a'+n+'')){
        score = score + point;
    }

    if(n == total){
        $('#results').html('<h3>Your final score is: '+score+' out of 7</h3>');
        $('#message').show();        
    }
    return false;
}

//add event listener
window.addEventListener('load',init,false);

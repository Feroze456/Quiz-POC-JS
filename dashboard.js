var myQuestions = true;
(function () {

    var myQuestions = [
        {
            question: "What is 30*2?",
            answers: {
                a: '65',
                b: '50',
                c: '60',
                d: '85'
            },
            correctAnswer: 'c'
        },
        {
            question: "What is 400/10?",
            answers: {
                a: '30',
                b: '40',
                c: '50',
                d: '85'
            },
            correctAnswer: 'b'
        },
        {
            question: "What is 70+21?",
            answers: {
                a: '91',
                b: '81',
                c: '95',
                d: '85'
            },
            correctAnswer: 'a'
        },
        {
            question: "Who invented JavaScript?",
            answers: {
                a: "Douglas Crockford",
                b: "Sheryl Sandberg",
                c: "Brendan Eich",
                d: 'smith'
            },
            correctAnswer: "c"
        },
        {
            question: "Which one of these is a JavaScript package manager?",
            answers: {
                a: "Node.js",
                b: "TypeScript",
                c: "npm",
                d: 'cmd'
            },
            correctAnswer: "c"
        },
        {
            question: "What is 650/5?",
            answers: {
                a: '150',
                b: '260',
                c: '130',
                d: '85'
            },
            correctAnswer: 'c'
        },
        {
            question: "Find the average of square of first 5 consecutive natural numbers?",
            answers: {
                a: '11',
                b: '15',
                c: '25',
                d: '85'
            },
            correctAnswer: 'a'
        },
        {
            question: " What is the average of first five multiples of 12?",
            answers: {
                a: '55',
                b: '25',
                c: '36',
                d: '85'

            },
            correctAnswer: 'c'
        },
        {
            question: " who is prime minister of india?",
            answers: {
                a: 'Narendra Modi',
                b: 'Manmohan Singh',
                c: 'Rajiv Gandhi',
                d: 'KCR'

            },
            correctAnswer: 'a'
        },
        {
            question: "who is A.P CM?",
            answers: {
                a: 'Chndrababu Naidu',
                b: 'YSR',
                c: 'KCR',
                d: 'Modi'

            },
            correctAnswer: 'b'
        }
        
    ];
    var answers = 0
    var interval = null
    //quiz timer function
    function timer() {
        var counts = 60 *10;

        interval = setInterval(function () {
            var count = counts - 1
            var c_min = Math.floor(count / 60);
            var c_sec = Math.floor(count % 60);

            document.getElementById('count').innerHTML = `<span style="color:white"> Time left:</span> <br /> ${c_min}m : ${c_sec}s `;
            counts--

            if (count <= 0) {
                clearInterval(interval);

                document.getElementById('count').innerHTML = 'Time up';
                // or...
                alert("You're out of time!");
                showResults();
            }
        }, 1000);


    }
    let count = 1;
    function numberPlus() {

        ++count;
        return document.getElementById("number").innerHTML = `Question  ${count}`;


    };

    function numberMinus() {

        --count;
        return document.getElementById("number").innerHTML = `Question  ${count}`;

    };

    var checkshowResults = false;
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];



        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
     <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
   </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide">
   <div class="question"> ${currentQuestion.question} </div>
   <div class="answers"> ${answers.join("")} </div>
 
   </div>`
            );

        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    
    function showResults() {
        checkshowResults = true;
        // clearing timer
        clearInterval(interval);
        document.getElementById('count').innerHTML = 'Submitted';
        submitButton.style.display = "none";




        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            //currentQuestion.correctAnswer.style.background ="lightgreen";
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            //let correct = currentQuestion.answers[currentQuestion.correctAnswer];
            //answerContainer.style.color = "lightgreen";




            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;
                //currentQuestion.correctAnswer
                // color the answers green
                answerContainer.style.color = "lightgreen";

            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainer.style.color = "red";

            }

            //document.getElementById("correction").innerHTML = currentQuestion.correctAnswer;

        })

        // show number of correct answers out of total
        // if (numCorrect > (myQuestions.lenght) / 2) {
        //     resultsContainer.innerHTML = `you Scored ${numCorrect} out of ${myQuestions.length}.   KEEP IT UP`;
        // }
        // else {

        //     resultsContainer.innerHTML = `you Scored ${numCorrect} out of ${myQuestions.length}.  PUT MORE EFFORT`;
        // }
        resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
        {
            numCorrect <= 4 ? document.getElementById("tryAgin").innerHTML = '<h3 class="text-danger"> better luck next time</h3> <img src="dislike.png" width="100px"  height="100px">'
            : document.getElementById("tryAgin").innerHTML = '<h3 class="text-info">Great Job</h3><img src="like.png" width="100px" height="100px" >'
        }


    }


    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        }
        else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";

        }
        if (checkshowResults) {
            submitButton.style.display = "none";

        }


    }


    function showNextSlide() {
         
        //If no radio value is selected, send alert message
       
        if(answers=='null'){
            alert('please ')
        }else{
            showSlide(currentSlide + 1);
        }
        //numberPlus();
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }


    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    // display quiz right away
    buildQuiz();
    timer();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);




    // on submit, show results
    submitButton.addEventListener("click", showResults);

    previousButton.addEventListener("click", showPreviousSlide);
    previousButton.addEventListener("click", numberMinus);
    nextButton.addEventListener("click", showNextSlide);
    nextButton.addEventListener("click", numberPlus);
})();






 var user_name = localStorage.getItem('userName');
 document.getElementById("username").innerHTML='welcome - '+user_name;



 
 var score = 0;
 var total = 5;
 var points = 1;
 var highest = total * points;
 
 //inintilaizers
 function init() {
   //set correct answers
   sessionStorage.setItem('a1', 'a');
   sessionStorage.setItem('a2', 'a');
   sessionStorage.setItem('a3', 'a');
   sessionStorage.setItem('a4', 'b');
   sessionStorage.setItem('a5', 'c');
 }
 
 $(document).ready(function() {
   //hide all questions
   $(".questionForm").hide();
 
   //show first question
   $("#q1").show();
 
   //submitting the answers
   $('.questionForm #submit').click(function() {
     //get data atribute
     current = $(this).parents('form:first').data('question');
     next = $(this).parents('form:first').data('question') + 1;
     //hide all questions
     $(".questionForm").hide();
     //show next question
     $('#q' + next + '').fadeIn(300);
     process('' + current + '');
     return false;
   });
 
 }); //end document ready
 
 //Process the answers
 function process(n) {
 
   //get input value
   var submitted = $('input[name=q' + n + ']:checked').val();
   if (submitted == sessionStorage.getItem('a' + n + '')) {
     score = score + points;
   }
 
   if (n == total) {
     $('#results').html('<h3>Your finale score is: ' + score + ' out of ' + highest + '</h3>Take Quiz Again');
     if (score == highest) {
       $('#results').append('<p>You are a master of knowledge</p>');
     }
   }
   return false;
 } //end process
 
 //add event listener
 window.addEventListener('load', init, false);

// var myQuestions = [
//     {
//         question: "What is 30*2?",
//         answers: {
//             a: '65',
//             b: '50',
//             c: '60'
//         },
//         correctAnswer: 'c'
//     },
//     {
//         question: "What is 400/10?",
//         answers: {
//             a: '30',
//             b: '40',
//             c: '50'
//         },
//         correctAnswer: 'b'
//     },
//     {
//         question: "What is 70+21?",
//         answers: {
//             a: '91',
//             b: '81',
//             c: '95'
//         },
//         correctAnswer: 'a'
//     },
//     {
//         question: "Who invented JavaScript?",
//         answers: {
//             a: "Douglas Crockford",
//             b: "Sheryl Sandberg",
//             c: "Brendan Eich"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "Which one of these is a JavaScript package manager?",
//         answers: {
//             a: "Node.js",
//             b: "TypeScript",
//             c: "npm"
//         },
//         correctAnswer: "c"
//     },
// ];

// var quizContainer = document.getElementById('quiz');
// var resultsContainer = document.getElementById('results');
// var submitButton = document.getElementById('submit');

// generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

// function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

//     function showQuestions(questions, quizContainer) {
//         // we'll need a place to store the output and the answer choices
//         var output = [];
//         var answers;

//         // for each question...
//         for (var i = 0; i < questions.length; i++) {

//             // first reset the list of answers
//             answers = [];

//             // for each available answer...
//             for (letter in questions[i].answers) {

//                 // ...add an html radio button
//                 answers.push(
                  
//                     '<label style="padding:10px;margin-left:5px;">'
                    
//                     + '<input type="radio" name="question' + i + '" value="' + letter + '">'
//                     + letter + ': '
//                     + questions[i].answers[letter]
//                     + '</label>'
//                 );
//             }

//             // add this question and its answers to the output
//             output.push(  
//                 '<div class="question">'+ '<b>'+(i+1)+')' +'</b>&nbsp;&nbsp'+ questions[i].question + '</div>'
//                 + '<div class="answers">' + answers.join('') + '</div>'
//             );
//         }

//         // finally combine our output list into one string of html and put it on the page
//         quizContainer.innerHTML = output.join('');
//     }


//     function showResults(questions, quizContainer, resultsContainer) {

//         // gather answer containers from our quiz
//         var answerContainers = quizContainer.querySelectorAll('.answers');

//         // keep track of user's answers
//         var userAnswer = '';
//         var numCorrect = 0;

//         // for each question...
//         for (var i = 0; i < questions.length; i++) {

//             // find selected answer
//             userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

//             // if answer is correct
//             if (userAnswer === questions[i].correctAnswer) {


//                 // add to the number of correct answers
//                 numCorrect++;

//                 // color the answers green
//                 answerContainers[i].style.color = 'lightgreen';
//             }

//             // if answer is wrong or blank
//             else {
//                 // color the answers red
//                 answerContainers[i].style.color = 'red';
//             }
//         }


//         // show number of correct answers out of total
//         resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
//         // if (numCorrect <= 2) {
//         //     alert("try agin");
//         //     document.getElementById("tryAgin").innerHTML=numCorrect+'Try Agin'
//         // }
//         {numCorrect <=2 ?  document.getElementById("tryAgin").innerHTML='<h3 class="text-danger">Not Qulified</h3> <img src="dislike.png" width="100px"  height="100px">' 
//         :  document.getElementById("tryAgin").innerHTML='<h3 class="text-info">Successfully</h3><img src="like.png" width="100px" height="100px" >'}
//     }

//     // show questions right away
//     showQuestions(questions, quizContainer);

//     // on submit, show results
//     submitButton.onclick = function () {

//         showResults(questions, quizContainer, resultsContainer);
//     }

// }


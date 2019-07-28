(function () {
    function Question(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }

    var ans = 'Y';
    var opt = 'N';
    var score = 0;
    var count = 1;

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answer.length; i++)
            console.log(i + ': ' + this.answer[i]);
    }

    var q1 = new Question('Capital of India', ['New Delhi', 'New York', 'Beijing'], 0);
    var q2 = new Question('Who is teachingNumber of Planets', ['Nine', 'Seven', 'Eight'], 2);
    var q3 = new Question('Universal logic gate?', ['OR', 'XOR', 'NOR', 'NOT'], 2);
    var q4 = new Question('Egyptian pyramids were actually much different from what we see now?', ['True', 'False'], 0);
    var q5 = new Question('Blue whales calls have been detected as far away as 1000 miles (1700 km.)?', ['True', 'False'], 1);
    var q6 = new Question('Saturn would float on water?', ['True', 'False'], 0);
    var q7 = new Question('Washing your feet with vodka will help you cure foot odour?', ['True', 'False'], 0);
    var q8 = new Question('Snakes have six ways of moving?', ['True', 'False'], 1);
    var q9 = new Question('An elephant’s pregnancy lasts for 24 months?', ['True', 'False'], 1);
    var q10 = new Question('Originally there were no rabbits in Australia?', ['True', 'False'], 0);

    var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

    function askQuestions() {

        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        ans = (prompt('Please select the correct answer'));

        if (parseInt(ans) === questions[n].correct) {
            score++;
            console.log('Correct choice, Score: ' + score);
        }
        else
            console.log('Wrong choice, Score: ' + score);

        repeat();
    }

    askQuestions();


    function repeat() {

        opt = prompt("Wish to continue (Y/N)");

        if (opt === 'Y') {
            count++;
            askQuestions();
        }

        else if (opt === 'N')
            return;
        else
            repeat();
    }


    console.log(`Your final score is ${score}/${count}`);
})();
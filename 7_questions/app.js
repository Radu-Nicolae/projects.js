const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
    const button = question.querySelector(".question-btn");

    button.addEventListener("click", function(){
        questions.forEach(function(item){
            if (item !== question){
                item.classList.remove("show-text");
            }
        })

        question.classList.toggle("show-text");
    })


});

//useful
//.question; .quesiton-btn
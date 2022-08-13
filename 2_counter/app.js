const value = document.querySelector("#value");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");

let count = 0;

decreaseBtn.addEventListener("click", function (){
    count--;
    value.textContent = count;
    colorIt(count);
});

increaseBtn.addEventListener("click", function(){
    count++;
    value.textContent = count;
    colorIt(count);

})

resetBtn.addEventListener("click", function (){
    value.textContent = 0;
    count = 0;
    colorIt(count);
})




function clear(){
    return 0;
}

function colorIt(count){
    if (count === 0){
        value.style.color = "black";
    } else if (count < 0){
        value.style.color = "red";
    } else {
        value.style.color = "green";
    }
}
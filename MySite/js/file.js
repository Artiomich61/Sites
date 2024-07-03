function onClickButton(el){
    score++;
    console.log("Click!");
    console.log(score);
    el.innerHTML = "Your score: " + score;
}

function onPageLoad(el){
    el.innerHTML = "Your score: " + score;
}

var score = 0;
console.log("Page has been opened");
console.log("Clicker score is: " + score);

console.log();
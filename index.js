const choices = ["Rock","Paper","Scissor"];
//.classList.add to change css on event
let userscore_span = document.getElementById("user-score"); //isme changes lane hai
let computerscore_span = document.getElementById("computer-score");//so put these in variables
let resulttext = document.querySelector(".result-text"); //used to select any of 

let userscore = 0;
let computerscore = 0;
let userchoice = "";
let computerchoice = ""; //to take user input as string


main();//IMPORTANT: to call function in js or onclick in html onclick="main()"
//avoid using onclick in html as usse random values generate hongi error

function main(){
    const rock_div = document.getElementById("rock");
    const paper_div = document.getElementById("paper");
    const scissor_div = document.getElementById("scissor");

    rock_div.addEventListener("click",()=>game("Rock") );
    //on clicking game,we run game func and give rock as input
    paper_div.addEventListener("click",()=> game("Paper"));
    scissor_div.addEventListener("click",()=> game("Scissor") );
}

function game(userchoice){ //userchocice is the input value

    const randomindex = Math.floor(Math.random()*choices.length); 
    //gives a random value bw [0,1)
    //MUltiply with choice length to increase range [0,3)
    //floor to convert the value to integer
    //use floor or ceil to get integer value
    computerchoice = choices[randomindex];

    switch(userchoice + computerchoice){ 
        //instead of taking 2 inputs we combined into one for ease
        case "RockScissor":
        case "PaperRock":
        case "ScissorPaper"://merge all 3 cases together for same output
            win();//jo kaam karna hai
            break;

        case "RockPaper":
        case "PaperScissor":
        case "ScissorRock"://merge all 3 cases together for same output
            lose(); //jo kaam karna hai
            break;

        case "RockRock":
        case "PaperPaper":
        case "ScissorScissor"://merge all 3 cases together for same output
            draw(); //jo kaam karna hai
            break;
    }
}
//alt+shift+down arrow to copy stuff below
function win(){
    userscore++;
    userscore_span.innerHTML = userscore;
    resulttext.innerHTML = "You Win!";

}
function lose(){
    computerscore++;
    computerscore_span.innerHTML = computerscore;
    resulttext.innerHTML = "You Lose!";


}
function draw(){
    resulttext.innerHTML = "It's a draw";
}
// or we can also display using $ and ` backticks 
// `${userchoice} beats ${computerchoice}` 
//backticks can include both "" and ''

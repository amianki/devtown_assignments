const options =["rock", "paper","Scissor"];
const generateRandomResponse = ()=>((Math.random()*10).toFixed(0)%3)

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const Scissor = document.querySelector("#Scissor");
const userScoreBox = document.querySelector("#userScore")
const computerScoreBox = document.querySelector("#compScore");
const showResult = document.querySelector(".result")

let userScore = 0, compScore = 0;

rock.addEventListener('click', ()=>game(0))
paper.addEventListener('click', ()=>game(1))
Scissor.addEventListener('click', ()=>game(2))


const game = (option)=>{
    const computerResponse = generateRandomResponse()
    console.log("user:"+ option+"comp:"+computerResponse)
    switch (option) {
        case 0:
            switch(computerResponse){
                case 0:
                    console.log("Draw") 
                    showResult.innerHTML = "It is a Tie."
                    break;
                case 1:
                    console.log("Computer Wins")
                    compScore++;
                    computerScoreBox.innerHTML = compScore;
                    showResult.innerHTML = `${options[computerResponse]} beats ${options[option]} , computer Wins!! `
                    rock.classList.add("loose");
                    setTimeout(()=>{
                        rock.classList.remove("loose");
                    },1000)
                    break;
                case 2:
                    console.log("You Win")
                    userScore++;
                    userScoreBox.innerHTML = userScore;
                    showResult.innerHTML = `${options[option]}  beats ${options[computerResponse]} , You Win!! `
                    rock.classList.add("win");
                    setTimeout(()=>{
                        rock.classList.remove("win");
                    },1000)
                    break;
                default:
                    break;
            }
            break;
        case 1:
            switch(computerResponse){
                case 0:
                    console.log("You Win") 
                    userScore++;
                    userScoreBox.innerHTML = userScore;
                    showResult.innerHTML = `${options[option]}  beats ${options[computerResponse]} , You Wins!! `
                    paper.classList.add("win");
                    setTimeout(()=>{
                        paper.classList.remove("win");
                    },1000)
                    break;
                case 1:
                    console.log("Draw")
                    showResult.innerHTML = "It is a Tie."
                    
                    break;
                case 2:
                    console.log("Computer Wins")
                    compScore++;
                    computerScoreBox.innerHTML = compScore;
                    showResult.innerHTML = `${options[computerResponse]}  beats ${options[option]} , computer Wins!! `
                    paper.classList.add("loose");
                    setTimeout(()=>{
                        paper.classList.remove("loose");
                    },1000)
                    break;
                default:
                    break;
            }
            break;
        case 2:
            switch(computerResponse){
                case 0:
                    console.log("Computer Wins") 
                    compScore++;
                    computerScoreBox.innerHTML = compScore;
                    showResult.innerHTML = `${options[computerResponse]} beats ${options[option]} , computer Wins!! `
                    Scissor.classList.add("loose");
                    setTimeout(()=>{
                        Scissor.classList.remove("loose");
                    },1000)
                    break;
                case 1:
                    console.log("You Win")
                    userScore++;
                    userScoreBox.innerHTML = userScore;
                    showResult.innerHTML = `${options[option]}  beats ${options[computerResponse]} , You Win!! `
                    Scissor.classList.add("win");
                    setTimeout(()=>{
                        Scissor.classList.remove("win");
                    },1000)
                    break;
                case 2:
                    console.log("Draw")
                    showResult.innerHTML = "It is a Tie."
                    break;
                default:
                    break;
            }
    }
    
}


 


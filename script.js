let score = document.querySelector(".score")
let result = document.querySelector(".result")


let paper = document.querySelector(".paper")
let rock = document.querySelector(".rock")
let scissors= document.querySelector(".scissors")

let choices = ["PAPER","ROCK","SCISSORS"]


let gameActive = true
let usrScore = 0
let comscore = 0

let comchoice = () => {
    let decision = choices[Math.floor(Math.random()*choices.length)]
    console.log(decision)
    return decision
}

let pointAllocatoin = (userChoice, computerChoice) => {
    if(userChoice==="ROCK"&& computerChoice === "SCISSORS" ){
        usrScore += 1
        result.textContent = "You Win"
    }
    
    else if(userChoice==="PAPER"&& computerChoice === "ROCK" ){
        usrScore += 1
        result.textContent = "You Win"
    }
    else if(userChoice==="SCISSORS"&& computerChoice === "PAPER" ){
        usrScore += 1
        result.textContent = "You Win"
    }
    else if(userChoice===computerChoice){
        result.textContent = "Draw"  
    }
    else{
        comscore += 1
        result.textContent = "You Lose"
    }

    score.textContent = `You ${usrScore}:${comscore} Com` 


}



paper.addEventListener("click",(event)=>{
    pointAllocatoin(event.target.innerText,comchoice())
    if (usrScore >= 3 && comscore < 3){
        result.textContent = "You won the Game!"
        usrScore = 0
        comscore = 0
    }else if(comscore >= 3 && usrScore < 3){
        result.textContent = "You Lost :("
        usrScore = 0
        comscore = 0
    }
})

rock.addEventListener("click",(event)=>{
    pointAllocatoin(event.target.innerText,comchoice())
    if (usrScore >= 3 && comscore < 3){
        result.textContent = "You won the Game!"
        usrScore = 0
        comscore = 0
    }else if(comscore >= 3 && usrScore < 3){
        result.textContent = "You Lost :("
        usrScore = 0
        comscore = 0
    }
})

scissors.addEventListener("click",(event)=>{
    pointAllocatoin(event.target.innerText,comchoice())
    if (usrScore >= 3 && comscore < 3){
        result.textContent = "You won the Game!"
        usrScore = 0
        comscore = 0
    }else if(comscore >= 3 && usrScore < 3){
        result.textContent = "You Lost :("
        usrScore = 0
        comscore = 0
    }
})

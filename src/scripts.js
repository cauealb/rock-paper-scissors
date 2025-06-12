// Selecionando itens
const openBtn = document.getElementById("open");
const menu = document.getElementById("menu")
const body = document.getElementById("body")
const main = document.getElementById("main")
const liYou = document.querySelectorAll("#optionsYou li")
const iconsYou = document.querySelectorAll(".icons")
const liMachine = document.querySelectorAll("#optionsMachine li")
const messageChoosingYou = document.getElementById("messageYou")
const messageChoosingMachine = document.getElementById("messageMachine")
const containerMachine = document.querySelector(".container_machine")
const newContainerMachine = document.getElementById("optionsMachine")
const content = document.getElementsByClassName("content")
const scoreMachineHTML = document.querySelector("#score > p:first-child")
const scoreYouHTML = document.querySelector("#score > p:last-child")
const resetBtn = document.getElementById("reset")
const againBtn = document.getElementById("again")
const resultDesktop = document.getElementById("result-desktop")

// Escolhas
let chooseYou
let chooseMachine

// Variáveis que controlam o score
let scoreYou = 0
let scoreMachine = 0

// Variável que pega o resultado do jogo
let finalResult

// Eventos
openBtn.onclick = () => {
    menu.classList.toggle("none");
    body.classList.remove("inital");
    main.classList.toggle("initial_game")
}

liYou.forEach(item => {
    item.addEventListener("click", (e) => {
        handleClickOption(e, 'li')
    })
})

iconsYou.forEach(item => {
    item.addEventListener("click", (e) => {
        handleClickOption(e.target.parentElement, 'img')
    })
})

function handleClickOption(e, path) {
    if(path === 'img') {
        chooseYou = Number(e.dataset.option)
    } else {
        chooseYou = Number(e.target.dataset.option)
    }
    styleSelectOptions(liYou, chooseYou);
    chooseMachine = chooseOptionAI();
    styleSelectOptions(liMachine, chooseMachine)

    containerMachine.classList.add("none")
    newContainerMachine.classList.remove("none")
    messageChoosingYou.textContent = chooseMessage('You', chooseYou)
    messageChoosingMachine.textContent = chooseMessage('Machine', chooseMachine)

    finalResult = result(chooseMachine, chooseYou)
    scoreYouHTML.textContent = scoreYou
    scoreMachineHTML.textContent = scoreMachine

    showResult();
}

resetBtn.addEventListener("click", () => {
    scoreYou = 0
    scoreMachine = 0
    scoreYouHTML.textContent = scoreYou
    scoreMachineHTML.textContent = scoreMachine

    handleResetOptions();
})

againBtn.addEventListener("click", () => {
    handleResetOptions();
})

// Funções que pega o valor que foi selecionado
function styleSelectOptions(options, choose) {
    options[choose].classList.add("option-select")
    for(let i = 0; i < options.length; i++) {
        if(!options[i].classList.contains("option-select")) {
            options[i].classList.add("option-not-select")
        }
    }
}

// Função que reseta as menssagens
function handleResetOptions() {
    containerMachine.classList.remove("none")
    newContainerMachine.classList.add("none")
    messageChoosingYou.textContent = `Choose your option`
    resultDesktop.style = "opacity: 0"

    for(let i = 0; i < liYou.length; i++) {
        liYou[i].classList.remove("option-not-select")
        liMachine[i].classList.remove("option-not-select")
        if(liYou[i].classList.contains("option-select") || liMachine[i].classList.contains("option-select")) {
            liYou[i].classList.remove("option-select")
            liMachine[i].classList.remove("option-select")
        }
    }
}

// Função que retorna a opção da IA
function chooseOptionAI() {
    return Math.floor(Math.random() * 3)
}

function showResult() {
    resultDesktop.className = ""
    if(finalResult === "You Win!") {
        resultDesktop.classList.add("blue")
    } else if(finalResult === "AI Win!") {
        resultDesktop.classList.add("red")
    } else {
        resultDesktop.classList.add("draw")
    }

    resultDesktop.textContent = finalResult
    resultDesktop.style = "opacity: 1"
}

// Função que retorna o resultado
// 0 - Rock
// 1 - Paper
// 2 - Sciossors
function result(optionAI, optionYou) {
    if(optionAI === 0 && optionYou === 1) {
        scoreYou++
        return "You Win!"
    } else if(optionAI === 1 && optionYou === 0) {
        scoreMachine++
        return "AI Win!"
    } else if (optionAI === 1 && optionYou === 2) {
        scoreYou++
        return "You Win!"
    } else if (optionAI === 2 && optionYou === 1) {
        scoreMachine++
        return "AI Win!"
    } else if(optionAI === 0 && optionYou === 2) {
        scoreMachine++
        return "AI Win!"
    } else if (optionAI === 2 && optionYou === 0) {
        scoreYou++
        return "You Win!"
    } else {
        return "Draw!"
    }
}

function chooseMessage(str, num) {
    if(num === 0) {
        return `${str} choose Rock`
    } else if(num === 1) {
        return `${str} choose Paper`
    } else {
        return `${str} choose Scissors`
    }
}
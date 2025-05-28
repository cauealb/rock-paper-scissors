// Selecionando itens
const openBtn = document.getElementById("open");
const menu = document.getElementById("menu")
const body = document.getElementById("body")
const main = document.getElementById("main")
const liYou = document.querySelectorAll("#optionsYou li")
const iconsYou = document.querySelectorAll(".icons")
const liIA = document.querySelectorAll("#optionsAI li")
const messageChoosingYou = document.getElementById("messageYou")
const messageChoosingAI = document.getElementById("messageAI")
const containerAI = document.querySelector(".container_IA")
const newContainerAI = document.getElementById("optionsAI")
const content = document.getElementsByClassName("content")
const scoreAIHTML = document.querySelector("#score > p:first-child")
const scoreYouHTML = document.querySelector("#score > p:last-child")
const resetBtn = document.getElementById("reset")
const againBtn = document.getElementById("again")
const resultDesktop = document.getElementById("result-desktop")
const resultMobile = document.getElementById("result-mobile")

// Escolhas
let chooseYou
let chooseAI

// Variáveis que controlam o score
let scoreYou = 0
let scoreAI = 0

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
        clickOption(e, 'li')
    })
})

iconsYou.forEach(item => {
    item.addEventListener("click", (e) => {
        clickOption(e.target.parentElement, 'img')
    })
})

function clickOption(e, path) {
    if(path === 'img') {
        chooseYou = Number(e.dataset.option)
    } else {
        chooseYou = Number(e.target.dataset.option)
    }
    selectOptions(liYou, chooseYou);
    chooseAI = chooseOptionAI();
    selectOptions(liIA, chooseAI)

    messageChoosingYou.textContent = chooseMessage('You', chooseYou)
    messageChoosingAI.textContent = chooseMessage('IA', chooseAI)
    containerAI.classList.add("none")
    newContainerAI.classList.remove("none")

    finalResult = result(chooseAI, chooseYou)
    scoreYouHTML.textContent = scoreYou
    scoreAIHTML.textContent = scoreAI

    showResult();
}

resetBtn.addEventListener("click", () => {
    scoreYou = 0
    scoreAI = 0
    scoreYouHTML.textContent = scoreYou
    scoreAIHTML.textContent = scoreAI

    resetMessage();
})

againBtn.addEventListener("click", () => {
    resetMessage();
})

// Funções que pega o valor que foi selecionado
function selectOptions(options, choose) {
    options[choose].classList.add("option-select")
    for(let i = 0; i < options.length; i++) {
        if(!options[i].classList.contains("option-select")) {
            options[i].classList.add("option-not-select")
            console.log(options[i])
        } else {
            messageChoosingAI.textContent = `AI choose ${options[i].textContent}`
        }
    }
}

// Função que reseta as menssagens
function resetMessage() {
    containerAI.classList.remove("none")
    newContainerAI.classList.add("none")
    messageChoosingYou.textContent = `Choose your option`
    messageChoosingAI.textContent = `Choose your option`
    resultDesktop.style = "opacity: 0"

    for(let i = 0; i < liYou.length; i++) {
        liYou[i].classList.remove("option-not-select")
        liIA[i].classList.remove("option-not-select")
        if(liYou[i].classList.contains("option-select") || liIA[i].classList.contains("option-select")) {
            liYou[i].classList.remove("option-select")
            liIA[i].classList.remove("option-select")
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
        scoreAI++
        return "AI Win!"
    } else if (optionAI === 1 && optionYou === 2) {
        scoreYou++
        return "You Win!"
    } else if (optionAI === 2 && optionYou === 1) {
        scoreAI++
        return "AI Win!"
    } else if(optionAI === 0 && optionYou === 2) {
        scoreAI++
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
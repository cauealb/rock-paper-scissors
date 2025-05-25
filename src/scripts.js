// Selecionando itens
const openBtn = document.getElementById("open");
const menu = document.getElementById("menu")
const body = document.getElementById("body")
const main = document.getElementById("main")
const liYou = document.querySelectorAll("#optionsYou li")
const liIA = document.querySelectorAll("#optionsAI li")
const messageChoosingYou = document.getElementById("messageYou")
const messageChoosingAI = document.getElementById("messageAI")
const containerAI = document.querySelector(".container_IA")
const newContainerAI = document.getElementById("optionsAI")
const content = document.getElementsByClassName("content")
const scoreYouHTML = document.querySelector("#score > p:first-child")
const scoreAIHTML = document.querySelector("#score > p:last-child")
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

// Eventos
openBtn.onclick = () => {
    menu.classList.toggle("none");
    body.classList.remove("inital");
    main.classList.toggle("initial_game")
}

liYou.forEach(item => {
    item.addEventListener("click", (e) => {
        messageChoosingYou.textContent = `You choose ${item.textContent}`
        containerAI.classList.add("none")
        newContainerAI.classList.remove("none")

        // Selecionando opções
        chooseYou = Number(e.target.dataset.option)
        selectOptions(liYou, chooseYou);
        chooseAI = chooseOptionAI();
        selectOptions(liIA, chooseAI)

        let finalResult = result(chooseAI, chooseYou)
        scoreYouHTML.textContent = scoreYou
        scoreAIHTML.textContent = scoreAI
        resultDesktop.textContent = finalResult
        resultDesktop.style = "opacity: 1"
    })
})

resetBtn.addEventListener("click", () => {
    scoreYou = 0
    scoreAI = 0
    scoreYouHTML.textContent = scoreYou
    scoreAIHTML.textContent = scoreAI

    containerAI.classList.remove("none")
    newContainerAI.classList.add("none")
    resetMessage();
})

againBtn.addEventListener("click", () => {
    resetMessage();
})

// Funções que pega o valor que foi selecionado
function selectOptions(options, choose) {
    // Estilizando opções
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

// Função que retorna o resultado
// 0 - Rock
// 1 - Paper
// 2 - Sciossors
function result(optionAI, optionYou) {
    if(optionAI === 0 && optionYou === 1) {
        scoreAI++
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
        scoreAI++
        return "You Win!"
    } else {
        return "Draw!"
    }
}
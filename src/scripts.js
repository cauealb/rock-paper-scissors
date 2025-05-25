// Selecionando itens
const openBtn = document.getElementById("open");
const menu = document.getElementById("menu")
const body = document.getElementById("body")
const main = document.getElementById("main")
const liYou = document.querySelectorAll("#optionsYou li")
const liIA = document.querySelectorAll("#optionsAI li")
const messageChoosingYou = document.getElementById("messageYou")
const containerAI = document.querySelector(".container_IA")
const newContainerAI = document.getElementById("optionsAI")
const content = document.getElementsByClassName("content")
const scoreYouHTML = document.querySelector("#score > p:first-child")
const scoreAIHTML = document.querySelector("#score > p:last-child")
const resetBtn = document.getElementById("reset")
const againBtn = document.getElementById("again")

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
        // console.log(liYou)
        containerAI.classList.add("none")
        item.click = true

        newContainerAI.classList.remove("none")
        selectOptions(liYou);

        chooseAI = chooseOptionAI();

        selectOptions(liIA, chooseAI)

        const finalResult = result(chooseAI, chooseYou)

        scoreYouHTML.textContent = scoreYou
        scoreAIHTML.textContent = scoreAI
    })
})

resetBtn.addEventListener("click", () => {
    scoreYou = 0
    scoreAI = 0
    scoreYouHTML.textContent = scoreYou
    scoreAIHTML.textContent = scoreAI

    containerAI.classList.remove("none")
    newContainerAI.classList.add("none")
})

againBtn.addEventListener("click", () => {
    containerAI.classList.remove("none")
    newContainerAI.classList.add("none")
})

// Funções que pega o valor que foi selecionado
function selectOptions(options, IAChoose = -1) {
    if(IAChoose === -1) {
        for(let i = 0; i < options.length; i++) {
            if(options[i].click) {
                // console.log(options[i] .textContent)
            }
        }
    } else { /* Escopo IA */
        console.log(IAChoose)
        console.log(options[IAChoose].textContent)
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
        scoreYou++
        return "You Win!"
    } else if(optionAI === 1 && optionYou === 0) {
        scoreAI++
        return "AI Win!"
    } else if (optionAI === 1 && optionYou === 2) {
        scoreYou++
        return "You Win!"
    } else {
        scoreAI++
        return "AI Win!"
    }
}
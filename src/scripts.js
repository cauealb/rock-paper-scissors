// Selecionando itens
const openBtn = document.getElementById("open");
const menu = document.getElementById("menu")
const body = document.getElementById("body")
const main = document.getElementById("main")
const liYou = document.querySelectorAll(".options li")
const messageChoosingYou = document.getElementById("messageYou")
const containerAI = document.querySelector(".container_IA")
const newContainerAI = document.getElementById("optionsAI")
const content = document.getElementsByClassName("content")

// Escolhas
let chooseYou
let chooseAI

// Eventos
openBtn.onclick = () => {
    menu.classList.toggle("none");
    body.classList.remove("inital");
    main.classList.toggle("initial_game")
}

liYou.forEach(item => {
    item.addEventListener("click", () => {
        messageChoosingYou.textContent = `You choose ${item.textContent}`
        containerAI.classList.add("none")
        item.click = true

        newContainerAI.classList.remove("none")
        selectOptions();
        chooseOptionAI();


    })
})

// Funções que pega o valor que foi selecionado
function selectOptions() {
    for(let i = 0; i < liYou.length; i++) {
        if(liYou[i].click) {
            console.log(liYou[i])
        }
    }
}

// Função que retorna a opção da IA
function chooseOptionAI() {
    chooseAI = Math.random(0, 2)

    return chooseAI;
}

// Função que retorna o resultado
// 0 - Rock
// 1 - Paper
// 2 - Sciossors
function result(optionAI, optionYou) {
    if(optionAI === 0 && optionYou === 1) {
        return "You Win!"
    } else if(optionAI === 1 && optionYou === 0) {
        return "AI Win!"
    } else if (optionAI === 1 && optionYou === 2) {
        return "You Win!"
    } else {
        return "AI Win!"
    }
}
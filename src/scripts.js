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
        selectOptions()
    })
})

// Funções
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
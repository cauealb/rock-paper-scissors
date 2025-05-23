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
        console.log(item.click)
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
const rows = document.querySelectorAll(".td")
const save = document.querySelector("#saveBtn")
const lista = document.querySelector(".listaSpesa")


for (let i = 0; i < (rows.length); i++) {
    //this section generates all the cards
    let cartina = document.createElement("textarea");
    cartina.classList.add("card")
    cartina.classList.add(`prop${i}`)
    rows[i].appendChild(cartina)

    //this section is for taking data from local storage JSON
    var temp = document.querySelector(`.prop${i}`)
    temp.value = JSON.parse(localStorage.getItem(`textareaMenu${i}`) || "[]")

    //this section is for saving all datas when the user inputs
    rows[i].addEventListener("input", function () {
        for (let i = 0; i < (rows.length); i++) {
            var menu = document.querySelector(`.prop${i}`).value
            localStorage.setItem(`textareaMenu${i}`, JSON.stringify(menu))
        }
    })
}

//takes from localStorage (extra notes)
lista.value = JSON.parse(localStorage.getItem(`textareaLista`) || "[]")

//adds to localStorage(extra notes)
lista.addEventListener("input", function () {
    localStorage.setItem(`textareaLista`, JSON.stringify(lista.value))
})


//Dark mode implementation
const header = document.querySelector(".LMHeader")
const background = document.querySelector(".LMBackground")
const switchBtn = document.querySelector(".swBtn")
const listaSpesa = document.querySelector(".listaSpesa")
const texts = document.querySelectorAll(".LMText")
const cards = document.querySelectorAll(".card")



switchBtn.addEventListener("change", function (e) {
    header.classList.toggle("DMHeader");
    background.classList.toggle("DMBackground")
    listaSpesa.classList.toggle("DMLista")
    for (let text of texts) {
        text.classList.toggle("DMText")
    }
    for (let card of cards) {
        card.classList.toggle("DMCard")
    }

})








































// for (let i = 0; i < (rows.length); i++) {
//     //this section generates all the cards
//     let cartina = document.createElement("ul");
//     cartina.classList.add("card")
//     cartina.classList.add(`prop${i}`)
//     rows[i].appendChild(cartina)
//     for (let j = 0; j < 5; j++) {
//         let listItem = document.createElement("li");
//         listItem.contentEditable = true;
//         listItem.classList.add(`prop${i}-${j}`)
//         cartina.appendChild(listItem)

//         //this section is for taking data from local storage JSON
//         var temp = document.querySelector(`.prop${i}-${j}`)
//         temp.innerText = JSON.parse(localStorage.getItem(`textareaMenu${i}-${j}`) || "[]")

//         //this section is for saving all datas when the user inputs
//         listItem.addEventListener("input", function (e) {
//             for (let i = 0; i < (rows.length); i++) {
//                 for (let j = 0; j < 5; j++) {
//                     var menu = document.querySelector(`.prop${i}-${j}`).innerText
//                     localStorage.setItem(`textareaMenu${i}-${j}`, JSON.stringify(menu))
//                 }

//             }
//         })
//     }


// }







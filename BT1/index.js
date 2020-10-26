let input = document.getElementById("input")
let btnadd = document.getElementById("add")
let list = document.getElementById("list")
let datalistodo = []

function addlist() {
    list.insertAdjacentHTML(`beforeend`, newlist(input.value))
    datalistodo.push(input.value)
    console.log(datalistodo)
    addeventremove()
    input.value = ""
    addeventcomplete()
}
function newlist(value) {
    let newtodo = `<li class="uncomplete"><input  class ="checkbox" type="checkbox">
    <span  contenteditable="true">${value}</span>
    <button class="remove">X</button></li>`
    return newtodo
}
function removelist(e) {
    let click = e.target
    click.parentElement.remove()
    datalistodo.splice(click.id, 1)
    addeventremove()
    console.log(datalistodo)

}
function addeventremove() {
    let btnremove = document.getElementsByClassName("remove")
    for (let i = 0; i < btnremove.length; i++) {
        btnremove[i].addEventListener('click', removelist)
        btnremove[i].id = i
    }
}

function addeventcomplete() {
    let checkcomplete = document.getElementsByClassName(`checkbox`)
    for (let i = 0; i < checkcomplete.length; i++) {
        checkcomplete[i].addEventListener('click', complete)
    }
}
function complete(e) {
    let click = e.target.parentElement
        console.log(click)
    if (e.target.checked == true) {
         click.className = "complete"
        console.log(1)
    }
    else {
        click.className = "uncomplete"
        console.log(2)
    }
}

btnadd.addEventListener(`click`, addlist)
input.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        addlist()
    }
})
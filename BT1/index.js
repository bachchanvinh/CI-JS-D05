let input = document.getElementById("input")
let btnadd = document.getElementById("add")
let list = document.getElementById("list")
let content=document.getElementById("blank")
let datalistodo = []

//function thêm value người dùng nhập vào trang chính
function addlist() {
    content.textContent=''
    list.insertAdjacentHTML(`beforeend`, newlist(input.value))
    datalistodo.push(input.value)
    console.log(datalistodo)
    addeventremove()
    input.value = ""
    addeventcomplete()
}
// function value người dùng nhập
function newlist(value) {
    let newtodo = `<li class="uncomplete"><input  class ="checkbox" type="checkbox">
    <span  contenteditable="true">${value}</span>
    <button class="remove">X</button></li>`
    return newtodo
}
// function xóa 
function removelist(e) {
    let click = e.target
    click.parentElement.remove()
    datalistodo.splice(click.id, 1)
    addeventremove()
    console.log(datalistodo)

}
// Tạo event xóa cho nút xóa
function addeventremove() {
    let btnremove = document.getElementsByClassName("remove")
    for (let i = 0; i < btnremove.length; i++) {
        btnremove[i].addEventListener('click', removelist)
        btnremove[i].id = i
    }
}
// Tạo event hoàn thành cho nút tick
function addeventcomplete() {
    let checkcomplete = document.getElementsByClassName(`checkbox`)
    for (let i = 0; i < checkcomplete.length; i++) {
        checkcomplete[i].addEventListener('click', complete)
    }
}
// Đổi class khi tick 
function complete(e) {
    let click = e.target.parentElement
    if (e.target.checked == true) {
         click.className = "complete"
         click.children[1].contentEditable=false
    }
    else {
        click.className = "uncomplete"
    }
}

btnadd.addEventListener(`click`, addlist)
input.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        addlist()
    }
})

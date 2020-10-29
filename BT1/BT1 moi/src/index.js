import {checkblankTodo} from './check'

let list = document.getElementById("list")
let content = document.getElementById("blank")
let datalistodo = []
let input = document.getElementById("input")
let btnadd = document.getElementById("add")


//function thêm value người dùng nhập vào trang chính
 export function addlist() {
    content.textContent = ''
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
    <span  contenteditable="true"><p>${value}</p></span>
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
    checkblankTodo()//

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
        click.children[1].contentEditable = false// Không cho sửa khi đã hoàn thành
    }
    else {
        click.className = "uncomplete"
        click.children[1].contentEditable = true
    }
}


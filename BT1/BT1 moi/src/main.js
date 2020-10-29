import {addlist} from './index'
import {checkblankinput} from './check'
let input = document.getElementById("input")
let btnadd = document.getElementById("add")
btnadd.addEventListener(`click`, ()=>{checkblankinput(addlist)})
input.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        checkblankinput(addlist)
    }
})
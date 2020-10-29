



export function checkblankinput(callback) {
    let alertblank = document.getElementById("alert")
    if (input.value.length == 0) {
        alertblank.textContent = "Do not leave the input blank"
        console.log("123")
    }
    else if (alertblank == null) {
        callback()
    }
    else {
        alertblank.textContent = ""
        callback()
    }
    checkcontententer()
    checkblankTodo()
}

export function checkblankTodo() {
    let licom = document.getElementsByClassName("complete")
    let liuncom = document.getElementsByClassName("uncomplete")
    if (licom.length == 0 && liuncom.length == 0) {
        document.getElementById("blank").textContent = `What will you do?`
        input.placeholder = "What need to be done?"
        document.getElementById("alert").textContent = ""
        console.log(1234)

    }
    else input.placeholder = "What you need to do next?"
}

function checkcontententer() {
    document.execCommand('defaultParagraphSeparator', false, 'p')
}


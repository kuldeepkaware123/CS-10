let btn = document.querySelector("#btn")
// let result = document.querySelector("#result")
let display = document.querySelector("#display")

function calculate() {
    let result = eval(document.querySelector("#display").value);
    document.querySelector("#display").value = result;
}

function takeinput(a){
    display.value += a
}

function cleardisplay(){
    display.value = ""
}

function deleteinput(){
    display.value = display.value.slice(0, -1);
}

btn.addEventListener("click", calculate)

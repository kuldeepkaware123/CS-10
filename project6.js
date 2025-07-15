function tablegenrate() {
    let inputnumber1 = document.querySelector("#num1").value;
    let inputnumber2 = document.querySelector("#num2").value;

    let temp = "";

    for(let j = inputnumber1; j <= inputnumber2; j++){

        for (let i = 1; i <= 10; i++) {
        temp += `${j*i} <br>`;
        document.querySelector("#output").innerHTML = temp;

    }
    }

}


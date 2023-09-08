var botao = document.getElementById("dentro");
var valor1 = document.getElementById("39");
var valor2 = document.getElementById("59");
var mes = document.getElementById("mes");
var mes2 = document.getElementById("mes2")

function anomes() {
    botao.classList.toggle("dentrodep");

    if (valor1.innerHTML === "R$ 39,98" ){
        valor1.innerHTML = "R$ 398,99"
    }
    
    if (valor2.innerHTML === "R$ 59,98" ){
        valor2.innerHTML = "R$ 599,99"
    }

    if (mes.innerHTML === "/Mês"){
        mes.innerHTML = "/Ano"
    }

    if (mes2.innerHTML === "/Mês"){
        mes2.innerHTML = "/Ano"
    }

    else {
        valor1.innerHTML = "R$ 39,98";
        valor2.innerHTML = "R$ 59,98";
        mes.innerHTML = "/Mês";
        mes2.innerHTML = "/Mês"
    }
}
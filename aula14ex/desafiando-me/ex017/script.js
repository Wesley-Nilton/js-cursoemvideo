function enviar(){
    let numero = document.getElementById("entrada1").value;

    if(numero.length != 0){
        numero = parseInt(numero);
        calcular(numero);
    } else{
        alert("Por favor, digite um número!");
    }
}

function calcular(numero){
    let resposta = document.getElementById("res");

    resposta.innerHTML = "";

    for(var i = 1; i <= 10; i++){
        let valorResultante = numero * i;
        resposta.innerHTML += `<option value="item${i}">${numero} x ${i} = ${valorResultante} </option>`;
    }
}
var resultado = document.getElementById("res");

function processar(){
    var inicio = document.getElementById("entrada1").value;
    var fim = document.getElementById("entrada2").value;
    var passo = document.getElementById("entrada3").value;

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        resultado.innerHTML = `Impossível contar!`;
    } else{
        calcular(inicio, fim, passo);
    }
}

function calcular(inicio, fim, passo){
    inicio = parseInt(inicio);
    fim = parseInt(fim);
    passo =parseInt(passo);

    resultado.innerHTML = `Contando:<br>${inicio}`;

    if(passo <= 0){
        alert("Passo inválido! Considerando PASSO 1!");
        passo = 1;
    }
    
    if(inicio < fim){
        while(inicio < fim){
            inicio += passo;
            if(inicio <= fim){
                resultado.innerHTML += ` &#x1F449 ${inicio}`;
            }
        }
    } else{
        while(inicio > fim){
            inicio -= passo;
            if(inicio >= fim){
                resultado.innerHTML += ` &#x1F449 ${inicio}`;
            }
        }
    }

    resultado.innerHTML += "&#x1F449 &#x1F3C1";
}
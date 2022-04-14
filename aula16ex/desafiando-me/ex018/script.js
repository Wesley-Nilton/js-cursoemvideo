let lista = [];
let res = document.getElementById("resFinal");

function verificar(){
    let numero = document.getElementById("numero").value;
    const opcao = document.getElementById("saida");

    res.innerHTML = "";

    if(numero.length == "" || numero > 100 || numero < 1 || lista.includes(parseInt(numero))){
        alert("Valor inválido ou já encontrado na lista.");
    } else{
        numero = parseInt(numero);
        lista.push(numero);
        opcao.innerHTML += `<option>Valor ${numero} adicionado</option>`;
    }
}

function finalizar(){
    if(lista.length == ""){
        alert("Adicione valores antes de finalizar!");
    } else{
        const tamanho = lista.length;
        let soma = 0;
        lista.sort((a, b) => a - b);

        for(let i = 0; i < lista.length; i++){
            soma += lista[i];
        }

        let media = soma / tamanho;

        res.innerHTML += `<p>Ao todo, temos ${tamanho} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado é ${lista[tamanho - 1]}.</p>`;
        res.innerHTML += `<p>O menor valor informado é ${lista[0]}.</p>`;
        res.innerHTML += `<p>Somandos todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
    }
}
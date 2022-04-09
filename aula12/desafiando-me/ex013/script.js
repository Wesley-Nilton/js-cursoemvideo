var diaDaSemana = new Date().getDay();
var hora = new Date().getHours();
var minutos = new Date().getMinutes();
var dia = new Date().getDate();
var mes = new Date().getMonth();
var ano = new Date().getFullYear();
var resposta = document.getElementById("res");
minutos = 0

switch(diaDaSemana){
    case 0:
        var diaCorrigido = "domingo";
        break;
    case 1:
        var diaCorrigido = "segunda-feira";
        break; 
    case 2:
        var diaCorrigido = "terça-feira";
        break;
    case 3:
        var diaCorrigido = "quarta-feira";
        break;
    case 4:
        var diaCorrigido = "quinta-feira";
        break; 
    case 5:
        var diaCorrigido = "sexta-feira";
        break;
    case 6:
        var diaCorrigido = "sábado";
        break;
}

switch(mes){
    case 0:
        var mesCorrigido = "janeiro";
        break;
    case 1:
        var mesCorrigido = "fevereiro";
        break;
    case 2:
        var mesCorrigido = "março";
        break;
    case 3:
        var mesCorrigido = "abril";
        break;
    case 4:
        var mesCorrigido = "maio";
        break;
    case 5:
        var mesCorrigido = "junho";
        break;
    case 6:
        var mesCorrigido = "julho";
        break;
    case 7:
        var mesCorrigido = "agosto";
        break;
    case 8:
        var mesCorrigido = "setembro";
        break;
    case 9:
        var mesCorrigido = "outubro";
        break;
    case 10:
        var mesCorrigido = "novembro";
        break;
    case 11:
        var mesCorrigido = "dezembro";
        break;
}

if(minutos < 10){
    minutos = "0" + minutos;
}

if(hora < 6){
    resposta.innerHTML = `<p>Boa madrugada! São exatamente ${hora}:${minutos}, ${diaCorrigido}, ${dia} de ${mesCorrigido} de ${ano}.</p>`;
    document.body.style.backgroundColor = "#2a2a3f";
} else if(hora < 12){
    resposta.innerHTML = `<p>Bom dia! São exatamente ${hora}:${minutos}, ${diaCorrigido}, ${dia} de ${mesCorrigido} de ${ano}.</p>`;
    document.body.style.backgroundColor = "#b9c47f";
} else if(hora < 18){
    resposta.innerHTML = `<p>Boa tarde! São exatamente ${hora}:${minutos}, ${diaCorrigido}, ${dia} de ${mesCorrigido} de ${ano}.</p>`;
    document.body.style.backgroundColor = "#e9a64f";
} else{
    resposta.innerHTML = `<p>Boa noite! São exatamente ${hora}:${minutos}, ${diaCorrigido}, ${dia} de ${mesCorrigido} de ${ano}.</p>`;
    document.body.style.backgroundColor = "#3b3b70";
}

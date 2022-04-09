function carregar(){
    var msg = document.getElementById("msg");
    var img = document.getElementById("img");
    var hora = new Date().getHours();
    var minutos = new Date().getMinutes();

    if(minutos < 10){
        minutos = "0" + minutos;
    }

    msg.innerHTML = `Agora são ${hora}:${minutos}`;

    if(hora >= 0 && hora < 12){
        img.setAttribute("src", "img/manha.jpg");
        document.body.style.backgroundColor = "#b9c47f";
    } else if(hora >= 12 && hora < 18){
        img.setAttribute("src", "img/tarde.jpg");
        document.body.style.backgroundColor = "#e7a077";
    } else{
        img.setAttribute("src", "img/noite.jpg");
        document.body.style.backgroundColor = "#527ec0";
    }
}
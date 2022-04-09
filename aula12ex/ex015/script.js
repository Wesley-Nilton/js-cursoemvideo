function verificar(){
    var ano = new Date().getFullYear();
    var fAno = document.getElementById("txtano").value;
    var res = document.querySelector("div#res");

    if(fAno.length == 0 || fAno > ano || fAno < 0){
        alert("Verifique os dados e tente novamente!");
    } else{
        var fSex = document.getElementsByName("radsex");
        var idade = ano - parseInt(fAno);
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");

        if(fSex[0].checked){
            genero = "Homem";
            if(idade >= 0 && idade < 11){
                img.setAttribute("src", "img/foto-bebe-m.png");
            } else if(idade < 21){
                img.setAttribute("src", "img/foto-jovem-m.png");
            } else if(idade < 50){
                img.setAttribute("src", "img/foto-adulto-m.png");
            } else{
                img.setAttribute("src", "img/foto-idoso-m.png");
            }
        } else{
            genero = "Mulher";
            if(idade >= 0 && idade < 11){
                img.setAttribute("src", "img/foto-bebe-f.png");
            } else if(idade < 21){
                img.setAttribute("src", "img/foto-jovem-f.png");
            } else if(idade < 50){
                img.setAttribute("src", "img/foto-adulto-f.png");
            } else{
                img.setAttribute("src", "img/foto-idoso-f.png");
            }
        }

        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`;
        res.appendChild(img);
    }
}
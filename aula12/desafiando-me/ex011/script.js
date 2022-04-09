var button = document.getElementById("btn");
button.addEventListener("click", clicar);

var answer = document.getElementsByClassName("res")[0];

function clicar(){
    var idade = document.querySelector("input#entry1").value;
    answer.innerHTML = `<p>Você tem <strong>${idade}</strong> ano(s)!</p>`;

    if(idade.length == 0 || idade < 0){
        alert("Verifique os dados e tente novamente!");
    } else if(parseInt(idade) < 16){
        answer.innerHTML += `<p>Você não pode votar, apenas a partir dos 16 anos!</p>`;
    } else if(parseInt(idade) < 18 || idade >= 70){
        answer.innerHTML += `<p>Você pode votar, porém lembre-se, o seu voto é opcional</p>`;
    } else{
        answer.innerHTML += `<p>Você pode e deve votar, caso não vote lembre-se de justificar a sua ausência!</p>`;
    }

}
var botaoAdicionar = document.querySelector("#adicionar-paciente"); // seleciona o botão de adicionar pacientes na variavel.

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona"); //seleciona o form do mundo html pelo id usando o # na funcão querySelector.

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);


    var tabela = document.querySelector("#tabela-pacientes"); // armazena a tabela do html nessa variavel.

    tabela.appendChild(pacienteTr); // adiciona os td's na tabela (mas com f5 ainda apaga os dados e retorna para o default do html).

});
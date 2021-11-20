var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"; // muda o conteúdo do texto para: "Aparecida Nutricionista".

var pacientes = document.querySelectorAll(".paciente"); 

for(var i = 0; i < pacientes.length ; i++) {

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = imc;
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    if(peso <=0 || peso >= 1000){
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    
    if(altura <= 0 || altura >= 3.00){
        console.log("Altura inválida");
        alturaEhValida = false;
        tdAltura.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    
    if(pesoEhValido && alturaEhValida){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

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
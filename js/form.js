var botaoAdicionar = document.querySelector("#adicionar-paciente"); // seleciona o botão de adicionar pacientes na variavel.

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona"); //seleciona o form do mundo html pelo id usando o # na funcão querySelector.

    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes"); // armazena a tabela do html nessa variavel.

    tabela.appendChild(pacienteTr); // adiciona os td's na tabela (mas com f5 ainda apaga os dados e retorna para o default do html).

    form.reset();

});

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura:form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr"); // cria a tr a td do paciente
    pacienteTr.classList.add("paciente"); // adiciona a classe paciente no pacienteTr

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, info-gordura));
    pacienteTr.appendChild(imontaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
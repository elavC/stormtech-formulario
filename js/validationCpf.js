const cpf = document.getElementById("cpf").addEventListener("focusout", validationCPF)

function validationCPF() {
    const CPF = document.getElementById("cpf").value
    var Soma;
    var Resto;
    Soma = 0;
  if (CPF == "00000000000") {
        return alert("CPF inválido, favor digitar um CPF válido!", clearCpf());
    }

  for (i=1; i<=9; i++) Soma = Soma + parseInt(CPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(CPF.substring(9, 10)) ){
        return alert("CPF inválido, favor digitar um CPF válido!", clearCpf());
    }

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(CPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(CPF.substring(10, 11) ) ) {
        return alert("CPF inválido, favor digitar um CPF válido!", clearCpf());
    }
    return true;
}

function clearCpf() {
    document.getElementById("cpf").value = "";
}
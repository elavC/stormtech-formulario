const cep = document.getElementById("cep").addEventListener("focusout", seachCep)

function clearForm() {
    document.getElementById("street").value = "";
    document.getElementById("district").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
}

async function seachCep() {
    clearForm()

    const cep = document.getElementById("cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const data = await fetch(url);
    const end = await data.json();

    const completeAddress = (end) => {
        document.getElementById("street").value = end.logradouro;
        document.getElementById("district").value = end.bairro;
        document.getElementById("city").value = end.localidade;
        document.getElementById("state").value = end.uf;
    }

    if(end.hasOwnProperty("erro")) {
        console.log(end);
        alert("Erro: Cep não encontrado, tente novamente!");
    } else {
        completeAddress(end)
    }
}
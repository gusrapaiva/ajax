const xhr = new XMLHttpRequest();

function gerarURL(){
    const baseURL = "https://viacep.com.br/ws/";
    
    let cep = document.getElementById("cep").value;

    const finalURL = `${baseURL}${cep}/json`;

    console.log(finalURL);
    return finalURL;

}

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        let resultado = JSON.parse(xhr.responseText);
        console.log(resultado);


        document.getElementById("resultado").innerHTML = `
            <b>Rua: </b'> ${resultado.logradouro} <br>
            <b>Bairro: </b'> ${resultado.bairro} <br>
            <b>Cidade: </b'> ${resultado.localidade} <br>
            <b>Estado: </b'> ${resultado.estado}
        `
        
    }
}

function buscarCep(){
    try{
        xhr.open("GET", gerarURL(), true);
        xhr.send();
    } catch(e){
        console.log("erro: ", e)
    }
}

var botao = document.querySelector("#botao-buscar");
botao.addEventListener("click", function(){

   
    var cpf = document.querySelector("#cpf");
    var cpfValor = cpf.value;
    console.log(cpfValor, "valor");

    var data = {
      cpf: cpfValor
    }

    var config = {
        method: 'delete',
        url: 'https://localhost:5001/funcionario/' + cpfValor,
        headers: {       
        },
        data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
           


    })
    .catch(function (error) {
      console.log(error);
    });

    
    
});



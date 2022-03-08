var botao = document.querySelector("#adicionar-Trabalhador");
botao.addEventListener("click", function(event){
   event.preventDefault();

    var formulario = document.querySelector("#form-adiciona");//Quando se trata de buscar o container, não se usa o querySelectorAll
        
    var trabalhador = obterTrabalhadorFormulario(formulario);
    console.log(typeof trabalhador, "Trabalhador");
   
    
    var data = JSON.stringify({
        "cpf": trabalhador.cpf,
        "name": trabalhador.name,
        "age": trabalhador.age,
        "birthDate": trabalhador.birthDate,
        "company": trabalhador.company,
        "position": trabalhador.position,
        "salary": trabalhador.salary,
        "state": trabalhador.state,
        "city": trabalhador.city,
        "district": trabalhador.district,
        "street": trabalhador.street,
        "numberOfStreet": trabalhador.numberOfStreet
        });
    
        var config = {
        method: 'post',
        url: 'http://localhost:5000/funcionario',
        headers: { 
            'Content-Type': 'application/json'
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
   
    //Método AJAX!
    // var xhr = new XMLHttpRequest();

    // xhr.open("POST", "http://localhost:5000/funcionario");

    // xhr.send(trabalhador);
    
});



function obterTrabalhadorFormulario(formulario){

    var trabalhador = {

        cpf: formulario.cpf.value,
        name: formulario.name.value,
        age: formulario.age.value,
        birthDate: formulario.birthDate.value,
        company: formulario.company.value,
        position: formulario.position.value,
        salary: formulario.salary.value,
        state: formulario.state.value,
        city: formulario.city.value,
        district: formulario.district.value,
        street: formulario.street.value,
        numberOfStreet: formulario.numberOfStreet.value

    }
   
    return trabalhador;
}





/*console.log(resposta, "Ta chegando aqui");
trabalhador = resposta;

worker = recebeTrabalhador(trabalhador);

console.log(worker, "worker");

adicionaNaDiv(worker);





function adicionaNaDiv(worker){
var div = document.querySelector(".retorno");
var ul = criaUl(worker);
div.appendChild(ul);
}

function criaUl(worker){
var ul = document.createElement("ul");

ul.appendChild(criaLi(worker.cpf));
ul.appendChild(criaLi(worker.name));
ul.appendChild(criaLi(worker.age));
ul.appendChild(criaLi(worker.birthDate));
ul.appendChild(criaLi(worker.company));
ul.appendChild(criaLi(worker.position));
ul.appendChild(criaLi(worker.salary));
ul.appendChild(criaLi(worker.state));
ul.appendChild(criaLi(worker.city));
ul.appendChild(criaLi(worker.district));
ul.appendChild(criaLi(worker.street));
ul.appendChild(criaLi(worker.numberOfStreet));

return ul;
}

function criaLi(dado){
var li = document.createElement("li");
li = dado;
}

function recebeTrabalhador(trabalhador){

var worker = {
    cpf: trabalhador.cpf.value,
    name: trabalhador.name.value,
    age: trabalhador.age.value,
    birthDate: trabalhador.birthDate.value,
    company: trabalhador.company.value,
    position: trabalhador.position.value,
    salary: trabalhador.salary.value,
    state: trabalhador.state.value,
    city: trabalhador.city.value,
    district: trabalhador.district.value,
    street: trabalhador.street.value,
    numberOfStreet: trabalhador.numberOfStreet.value //tinha esquecido do .value

}

console.log(worker, "Metodo");

return worker;
}




});
*/
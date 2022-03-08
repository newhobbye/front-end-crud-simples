var botao = document.querySelector("#botao-buscar");
botao.addEventListener("click", async function (e) {



    var cpfValor = document.querySelector("#cpf").value;

    var data = {
        cpf: cpfValor
    }

    var config = {
        method: 'get',
        url: 'https://localhost:5001/funcionario/' + cpfValor,
        headers: {
        },
        data: data
    };

    var resposta;

    await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            resposta = response.data;

        })
        .catch(function (error) {
            console.log(error);
        });


    let worker = resposta;

    adicionaDiv(worker);
});


function adicionaDiv(worker) {

    let div = document.querySelector(".retorno");
    div.appendChild(montaTr(worker));
}



function montaTr(worker) {
    let tr = document.createElement("tr");

    tr.appendChild(montaTd("CPF: " + worker.cpf, "grupo"));
    tr.appendChild(montaTd("Name: " + worker.name, "grupo2"));
    tr.appendChild(montaTd("Age: " + worker.age, "grupo"));
    tr.appendChild(montaTd("Birth Date: " + worker.birthDate, "grupo2"));
    tr.appendChild(montaTd("Company: " + worker.company, "grupo"));
    tr.appendChild(montaTd("Position: " + worker.position, "grupo2"));
    tr.appendChild(montaTd("Salary: " + worker.salary, "grupo"));
    tr.appendChild(montaTd("State: " + worker.state, "grupo2"));
    tr.appendChild(montaTd("City: " + worker.city, "grupo"));
    tr.appendChild(montaTd("District: " + worker.district, "grupo2"));
    tr.appendChild(montaTd("Street: " + worker.street, "grupo"));
    tr.appendChild(montaTd("Number of Street: " + worker.numberOfStreet, "grupo2"));

    return tr;
}

function montaTd(dado, classe) {

    let td = document.createElement("td");
    td.classList.add(classe);

    td.innerHTML = dado;

    return td;
}




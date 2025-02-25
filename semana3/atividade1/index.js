var array = [];

document.getElementById("adiciona-array").addEventListener("click", AdicionarArray);
// document.getElementById("limpar").addEventListener("click", LimparArray);

function AdicionarArray() {
    var valor = document.getElementById("inputValor").value;
    array.push(valor);
    LimparInput();
    let arrayOrdenado = OrdenarArray(array);
    ExibirArray(arrayOrdenado);
};

function LimparInput() {
    document.getElementById("inputValor").value = "";
};

function OrdenarArray(lista) {
    lista.sort();
    return lista;
};

function ExibirArray(lista) {
    var tag = document.getElementById("array");
    tag.innerHTML="";
    lista.forEach(element => {
        var li = document.createElement("li");
        li.textContent = element;
        tag.appendChild(li);
    });
}

// function LimparArray() {
//     var tag = document.getElementById("array");
//     tag.innerHTML=""; 
// }
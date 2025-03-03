document.getElementById("adiciona-array").addEventListener("click", AdicionarArray);
// document.getElementById("limpar").addEventListener("click", LimparArray);
var array = [];

function AdicionarArray() {
    var valor = document.getElementById("inputValor").value;
    if (valor != "") {
    array.push(valor);
    let arrayOrdenado = OrdenarArray(array);
    ExibirArray(arrayOrdenado);
    LimparInput();
    }
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
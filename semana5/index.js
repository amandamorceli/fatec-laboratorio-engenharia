document.addEventListener("DOMContentLoaded", () => {
    const contador = document.querySelector(".contador");

    // Div Total
    const titulo = document.createElement("h2");
    titulo.textContent = "Total";
    contador.appendChild(titulo);

    const totalContainer = document.createElement("div");
    totalContainer.classList.add("total-container");

    const totalInput = document.createElement("input");
    totalInput.type = "text";
    totalInput.id = "total";
    totalInput.value = "0";
    totalInput.readOnly = true;

    const resetButton = document.createElement("span");
    resetButton.textContent = "🔄";
    resetButton.classList.add("reset");
    resetButton.addEventListener("click", reset);

    totalContainer.appendChild(totalInput);
    totalContainer.appendChild(resetButton);
    contador.appendChild(totalContainer);

    // Função para gerar pessoa Homens/Mulheres)
    function criarPessoa(tipo, imgSrc, label) {
        const pessoa = document.createElement("div");
        pessoa.classList.add("pessoa");

        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = label;

        const botoes = document.createElement("div");
        botoes.classList.add("botoes");

        const botaoMais = document.createElement("button");
        botaoMais.textContent = "➕";
        botaoMais.addEventListener("click", () => incrementar(tipo));

        const botaoMenos = document.createElement("button");
        botaoMenos.textContent = "➖";
        botaoMenos.addEventListener("click", () => decrementar(tipo));

        botoes.appendChild(botaoMais);
        botoes.appendChild(botaoMenos);

        const texto = document.createElement("div");
        texto.textContent = label;

        const input = document.createElement("input");
        input.type = "text";
        input.id = tipo;
        input.value = "0";
        input.readOnly = true;

        pessoa.appendChild(img);
        pessoa.appendChild(botoes);
        pessoa.appendChild(texto);
        pessoa.appendChild(input);

        return pessoa;
    }

    // Pessoas
    const pessoasContainer = document.createElement("div");
    pessoasContainer.classList.add("pessoas");

    pessoasContainer.appendChild(criarPessoa("homens", "https://cdn-icons-png.flaticon.com/512/4140/4140057.png", "Homens"));
    pessoasContainer.appendChild(criarPessoa("mulheres", "https://cdn-icons-png.flaticon.com/512/6997/6997662.png", "Mulheres"));

    contador.appendChild(pessoasContainer);
});

// Lógica do contador
function atualizarTotal() {
    let homens = parseInt(document.getElementById("homens").value);
    let mulheres = parseInt(document.getElementById("mulheres").value);
    document.getElementById("total").value = homens + mulheres;
}

function incrementar(tipo) {
    let elemento = document.getElementById(tipo);
    elemento.value = parseInt(elemento.value) + 1;
    atualizarTotal();
}

function decrementar(tipo) {
    let elemento = document.getElementById(tipo);
    if (parseInt(elemento.value) > 0) {
        elemento.value = parseInt(elemento.value) - 1;
        atualizarTotal();
    }
}

function reset() {
    document.getElementById("homens").value = 0;
    document.getElementById("mulheres").value = 0;
    document.getElementById("total").value = 0;
}
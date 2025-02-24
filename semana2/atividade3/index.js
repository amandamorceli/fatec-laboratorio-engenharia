function Palindromo(palavra) {
    palavra = palavra.replace(/\s/g, "").toLowerCase();
    const reverso = palavra.split("").reverse().join("");
    return palavra === reverso;
}

function verificarPalindromo() {
    const inputPalavra = document.getElementById("inputPalindromo").value;
    alert(`${Palindromo(inputPalavra) ? "É palíndromo!" : "Não é palíndromo!"}`)
}
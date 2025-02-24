function Palindromo(palavra) {
    palavra = palavra.replace(/\s/g, "").toLowerCase();
    const reverso = palavra.split("").reverse().join("");
    return palavra === reverso;
}

function verificarPalindromo() {
    let palavra = document.getElementById("inputPalindromo").value;
    if (palindrome(palavra)) {
        alert("É palíndromo!");
    } else {
        alert("Não é palíndromo!");
    }
}
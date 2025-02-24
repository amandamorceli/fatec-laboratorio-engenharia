const date = new Date();

const options =
{
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

function dataF() {
    document.getElementById("data-atual").innerHTML = date.toLocaleDateString("pt-BR", options);
}

dataF();
const parametros = new URLSearchParams(window.location.search);

const modalidade = parametros.get("modalidade");

const titulo = document.getElementById("titulo-modalidade");
const menu = document.querySelector(".menu-lateral");



const cores = {
    "Arquitetura": "#32b84b",
    "Escultura": "#9145c5",
    "Pintura": "#e5b51d",
    "Música": "#3195e8",
    "Dança": "e94f96",
    "Literatura": "#f39a24",
    "Cinema": "#18a7b8"
};



if (modalidade) {

//tituloooooo
    titulo.textContent = modalidade;

//procura a cor
    const cor = cores[modalidade];

// encontra a cor
    if (cor) {
        menu.style.backgroundColor = cor;
    }

} else {

    titulo.textContent = "Biografias";

}



//// já as biografias
function verMais(botao) {

    const textoExtra = botao.previousElementSibling;

    if (textoExtra.style.display === "block") {

        textoExtra.style.display = "none";
        botao.textContent = "Ver mais";

    } else {

        textoExtra.style.display = "block";
        botao.textContent = "Ver menos";

    }
}
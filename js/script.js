// ==============================
// IMPORTAÇÃO DOS MÓDULOS
// ==============================

import { projetos, criarCardProjeto } from "./projetos.js";
import { mostrarCadastro } from "./cadastro.js";
import {
    mostrarToast,
    abrirModal,
    fecharModal,
    alternarMenu
} from "./interface.js";


// ==============================
// ELEMENTO PRINCIPAL
// ==============================

const app = document.getElementById("app");


// ==============================
// NAVEGAÇÃO DA SPA
// ==============================

export function navegar(pagina) {

    if (pagina === "inicio") {
        mostrarInicio();
    }

    if (pagina === "projetos") {
        mostrarProjetos();
    }

    if (pagina === "cadastro") {
        mostrarCadastro(app);
    }
}


// ==============================
// PÁGINA INICIAL
// ==============================

function mostrarInicio() {

    app.innerHTML = `
        <section class="inicio">

            <h1>Bem-vindo à ONG Esperança</h1>

            <p>
                Juntos podemos transformar vidas e ajudar
                quem mais precisa.
            </p>

            <div class="destaque">
                ${criarCardProjeto(projetos[0])}
            </div>

            <button onclick="abrirModal()">
                Saiba mais
            </button>

        </section>
    `;
}


// ==============================
// PÁGINA DE PROJETOS
// ==============================

function mostrarProjetos() {

    let cards = "";

    projetos.forEach(function (projeto) {
        cards += criarCardProjeto(projeto);
    });

    app.innerHTML = `
        <section class="projetos">

            <h2>Nossos Projetos</h2>

            <div class="lista-projetos">
                ${cards}
            </div>

        </section>
    `;
}


// ==============================
// DISPONIBILIZAR FUNÇÕES
// PARA OS BOTÕES HTML
// ==============================

window.navegar = navegar;
window.abrirModal = abrirModal;
window.fecharModal = fecharModal;
window.alternarMenu = alternarMenu;
window.mostrarToast = mostrarToast;


// ==============================
// INICIALIZAÇÃO
// ==============================

navegar("inicio");

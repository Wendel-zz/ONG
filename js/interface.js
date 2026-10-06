// ==============================
// ELEMENTOS DA INTERFACE
// ==============================

export function mostrarToast(mensagem) {
    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = mensagem;
    toast.classList.add("mostrar");

    setTimeout(() => {
        toast.classList.remove("mostrar");
    }, 3000);
}


// ==============================
// MODAL
// ==============================

// MODAL
// ==============================

export function abrirModal() {
    const modal = document.getElementById("modal");

    if (modal) {
        // Guarda o elemento que estava com foco antes de abrir o modal
        modal.elementoAnterior = document.activeElement;

        modal.classList.add("mostrar");

        // Coloca o foco no botão Fechar
        const botaoFechar = modal.querySelector("button");

        if (botaoFechar) {
            botaoFechar.focus();
        }

        // Permite fechar o modal usando a tecla Esc
        modal.fecharComEsc = function (evento) {
            if (evento.key === "Escape") {
                fecharModal();
            }
        };

        document.addEventListener("keydown", modal.fecharComEsc);
    }
}

export function fecharModal() {
    const modal = document.getElementById("modal");

    if (modal) {
        modal.classList.remove("mostrar");

        // Remove o evento da tecla Esc
        if (modal.fecharComEsc) {
            document.removeEventListener("keydown", modal.fecharComEsc);
        }

        // Retorna o foco para o elemento que abriu o modal
        if (modal.elementoAnterior) {
            modal.elementoAnterior.focus();
        }
    }
}

// ==============================
// MENU
// ==============================

export function alternarMenu() {
    const menu = document.getElementById("menu");
    const botao = document.getElementById("botaoMenu");

    if (menu && botao) {
        const aberto = menu.classList.toggle("menu-aberto");

        botao.setAttribute("aria-expanded", aberto);
        botao.setAttribute(
            "aria-label",
            aberto
                ? "Fechar menu de navegação"
                : "Abrir menu de navegação"
        );
    }
}
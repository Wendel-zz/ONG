// ==============================
// ELEMENTOS DA INTERFACE
// ==============================

export function mostrarToast(mensagem) {
    const toast = document.getElementById("toast");

    if (!toast) {
        return;
    }

    toast.textContent = mensagem;
    toast.classList.add("mostrar");

    setTimeout(() => {
        toast.classList.remove("mostrar");
    }, 3000);
}


// ==============================
// MODAL
// ==============================

export function abrirModal() {
    const modal = document.getElementById("modal");

    if (!modal) {
        return;
    }

    // Guarda o elemento que estava com foco antes de abrir o modal
    modal.elementoAnterior = document.activeElement;

    // Exibe o modal
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


export function fecharModal() {
    const modal = document.getElementById("modal");

    if (!modal) {
        return;
    }

    // Fecha o modal
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


// ==============================
// MENU
// ==============================

export function alternarMenu() {
    const menu = document.getElementById("menu");
    const botao = document.getElementById("botaoMenu");

    if (!menu || !botao) {
        return;
    }

    const aberto = menu.classList.toggle("menu-aberto");

    // Atualiza o estado do menu para tecnologias assistivas
    botao.setAttribute("aria-expanded", aberto);

    // Atualiza a descrição do botão
    botao.setAttribute(
        "aria-label",
        aberto
            ? "Fechar menu de navegação"
            : "Abrir menu de navegação"
    );
}


// ==============================
// MODO NOTURNO
// ==============================

export function alternarContraste() {
    const body = document.body;
    const botao = document.getElementById("botaoContraste");

    if (!body || !botao) {
        return;
    }

    // Ativa ou desativa o modo noturno
    const ativo = body.classList.toggle("alto-contraste");

    // Atualiza o estado para tecnologias assistivas
    botao.setAttribute("aria-pressed", ativo);

    // Atualiza o texto e a descrição do botão
    if (ativo) {
        botao.textContent = "Modo claro";
        botao.setAttribute("aria-label", "Ativar modo claro");
    } else {
        botao.textContent = "Modo noturno";
        botao.setAttribute("aria-label", "Ativar modo noturno");
    }
}
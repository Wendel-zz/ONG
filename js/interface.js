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

export function abrirModal() {
    const modal = document.getElementById("modal");

    if (modal) {
        modal.classList.add("mostrar");
    }
}

export function fecharModal() {
    const modal = document.getElementById("modal");

    if (modal) {
        modal.classList.remove("mostrar");
    }
}


// ==============================
// MENU
// ==============================

export function alternarMenu() {
    const menu = document.querySelector(".menu");

    if (menu) {
        menu.classList.toggle("ativo");
    }
}
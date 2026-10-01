// ==============================
// DADOS DOS PROJETOS
// ==============================

export const projetos = [
    {
        titulo: "Arrecadação de alimentos",
        descricao:
            "Arrecadamos alimentos para ajudar famílias em situação de vulnerabilidade.",
        imagem: "../imagens/Doacoes.png",
        tipo: "Projeto ativo"
    },
    {
        titulo: "Ações voluntárias",
        descricao:
            "Voluntários participam de ações sociais para ajudar nossa comunidade.",
        imagem: "../imagens/Voluntarios.png",
        tipo: "Voluntariado"
    }
];

// ==============================
// CRIAÇÃO DOS CARDS
// ==============================

export function criarCardProjeto(projeto) {
    return `
        <div class="card-projeto">
            <img src="${projeto.imagem}" alt="${projeto.titulo}">
            
            <div class="card-conteudo">
                <span class="tipo-projeto">${projeto.tipo}</span>
                
                <h3>${projeto.titulo}</h3>
                
                <p>${projeto.descricao}</p>
                
                <button onclick="abrirModal()">
                    Saiba mais
                </button>
            </div>
        </div>
    `;
}
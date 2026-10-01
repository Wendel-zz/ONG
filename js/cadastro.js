// ==============================
// CADASTRO DE VOLUNTÁRIO
// ==============================

export function mostrarCadastro(app) {
    app.innerHTML = `
        <section class="cadastro">
            <h2>Cadastro de Voluntário</h2>

            <form id="formularioCadastro">

                <label for="nome">Nome completo:</label>
                <input type="text" id="nome" name="nome" required>

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>

                <label for="nascimento">Data de nascimento:</label>
                <input type="date" id="nascimento" name="nascimento" required>

                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" required>

                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" required>

                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" required>

                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade" required>

                <label for="estado">Estado:</label>
                <select id="estado" name="estado" required>
                    <option value="">Selecione</option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="MG">Minas Gerais</option>
                </select>

                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="cep" required>

                <button type="submit">Cadastrar</button>
            </form>
        </section>
    `;

    configurarFormulario();
}


// ==============================
// CONFIGURAÇÃO DO FORMULÁRIO
// ==============================

function configurarFormulario() {
    const formulario = document.getElementById("formularioCadastro");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        // Remove caracteres que não sejam números
        const cpf = document.getElementById("cpf").value.replace(/\D/g, "");
        const telefone = document.getElementById("telefone").value.replace(/\D/g, "");
        const cep = document.getElementById("cep").value.replace(/\D/g, "");

        // ==============================
        // VALIDAÇÃO DO CPF
        // ==============================

        if (cpf.length !== 11) {
            mostrarMensagemCadastro("O CPF deve conter 11 números.");
            return;
        }

        // ==============================
        // VALIDAÇÃO DO TELEFONE
        // ==============================

        if (telefone.length !== 10 && telefone.length !== 11) {
            mostrarMensagemCadastro(
                "O telefone deve conter 10 ou 11 números."
            );
            return;
        }

        // ==============================
        // VALIDAÇÃO DO CEP
        // ==============================

        if (cep.length !== 8) {
            mostrarMensagemCadastro("O CEP deve conter 8 números.");
            return;
        }

        // ==============================
        // DADOS DO VOLUNTÁRIO
        // ==============================

        const voluntario = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            nascimento: document.getElementById("nascimento").value,
            cpf: cpf,
            telefone: telefone,
            endereco: document.getElementById("endereco").value,
            cidade: document.getElementById("cidade").value,
            estado: document.getElementById("estado").value,
            cep: cep
        };

        // ==============================
        // SALVAR NO LOCALSTORAGE
        // ==============================

        const dados = JSON.stringify(voluntario);

        localStorage.setItem("voluntario", dados);

        mostrarMensagemCadastro("Cadastro realizado com sucesso!");
    });
}


// ==============================
// RECUPERAR CADASTRO
// ==============================

export function recuperarCadastro() {
    const dadosSalvos = localStorage.getItem("voluntario");

    if (!dadosSalvos) {
        return null;
    }

    return JSON.parse(dadosSalvos);
}


// ==============================
// MENSAGEM DE CADASTRO
// ==============================

function mostrarMensagemCadastro(mensagem) {
    const toast = document.getElementById("toast");

    if (toast) {
        toast.textContent = mensagem;
        toast.classList.add("mostrar");

        setTimeout(() => {
            toast.classList.remove("mostrar");
        }, 3000);
    }
}
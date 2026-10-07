import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { minify as minifyHTML } from "html-minifier-terser";
import { minify as minifyJS } from "terser";
import CleanCSS from "clean-css";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pastas = {
    html: path.join(__dirname, "html"),
    css: path.join(__dirname, "css"),
    js: path.join(__dirname, "js"),
    imagens: path.join(__dirname, "imagens"),
    dist: path.join(__dirname, "dist")
};


// ==============================
// LIMPAR E CRIAR DIST
// ==============================

if (fs.existsSync(pastas.dist)) {
    fs.rmSync(pastas.dist, {
        recursive: true,
        force: true
    });
}

fs.mkdirSync(pastas.dist, {
    recursive: true
});

fs.mkdirSync(path.join(pastas.dist, "html"));
fs.mkdirSync(path.join(pastas.dist, "css"));
fs.mkdirSync(path.join(pastas.dist, "js"));
fs.mkdirSync(path.join(pastas.dist, "imagens"));


// ==============================
// MINIFICAR HTML
// ==============================

async function otimizarHTML() {

    const arquivos = fs.readdirSync(pastas.html);

    for (const arquivo of arquivos) {

        if (!arquivo.endsWith(".html")) {
            continue;
        }

        const entrada = path.join(pastas.html, arquivo);
        const saida = path.join(pastas.dist, "html", arquivo);

        const conteudo = fs.readFileSync(entrada, "utf8");

        const resultado = await minifyHTML(conteudo, {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeEmptyAttributes: true,
            useShortDoctype: true
        });

        fs.writeFileSync(saida, resultado);

        console.log(`HTML otimizado: ${arquivo}`);
    }
}


// ==============================
// MINIFICAR CSS
// ==============================

function otimizarCSS() {

    const entrada = path.join(pastas.css, "style.css");
    const saida = path.join(pastas.dist, "css", "style.css");

    const conteudo = fs.readFileSync(entrada, "utf8");

    const resultado = new CleanCSS({
        level: 2
    }).minify(conteudo);

    if (resultado.errors.length > 0) {
        throw new Error(
            `Erro ao minificar CSS: ${resultado.errors.join(", ")}`
        );
    }

    fs.writeFileSync(saida, resultado.styles);

    console.log("CSS otimizado: style.css");
}


// ==============================
// MINIFICAR JAVASCRIPT
// ==============================

async function otimizarJavaScript() {

    const arquivos = fs.readdirSync(pastas.js);

    for (const arquivo of arquivos) {

        if (!arquivo.endsWith(".js")) {
            continue;
        }

        const entrada = path.join(pastas.js, arquivo);
        const saida = path.join(pastas.dist, "js", arquivo);

        const conteudo = fs.readFileSync(entrada, "utf8");

        const resultado = await minifyJS(conteudo, {
            compress: true,
            mangle: true,
            format: {
                comments: false
            }
        });

        if (!resultado.code) {
            throw new Error(
                `Não foi possível minificar ${arquivo}`
            );
        }

        fs.writeFileSync(saida, resultado.code);

        console.log(`JavaScript otimizado: ${arquivo}`);
    }
}


// ==============================
// OTIMIZAR IMAGENS
// ==============================

async function otimizarImagens() {

    const arquivos = fs.readdirSync(pastas.imagens);

    for (const arquivo of arquivos) {

        const entrada = path.join(pastas.imagens, arquivo);
        const saida = path.join(pastas.dist, "imagens", arquivo);

        const extensao = path.extname(arquivo).toLowerCase();

        if (extensao === ".png") {

            await sharp(entrada)
                .png({
                    compressionLevel: 9,
                    effort: 10
                })
                .toFile(saida);

        } else if (extensao === ".jpg" || extensao === ".jpeg") {

            await sharp(entrada)
                .jpeg({
                    quality: 80,
                    mozjpeg: true
                })
                .toFile(saida);

        } else {

            fs.copyFileSync(entrada, saida);
        }

        console.log(`Imagem otimizada: ${arquivo}`);
    }
}


// ==============================
// EXECUTAR BUILD
// ==============================

async function build() {

    console.log("Iniciando build de produção...\n");

    await otimizarHTML();

    otimizarCSS();

    await otimizarJavaScript();

    await otimizarImagens();

    console.log("\nBuild concluída com sucesso!");
    console.log("Arquivos gerados na pasta: dist/");
}

build().catch((erro) => {

    console.error("\nErro durante a build:");
    console.error(erro);

    process.exit(1);
});
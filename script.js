const container = document.querySelector(".personagem-container");
const botao = document.getElementById("gerarBtn");
const loader = document.getElementById("loader");

const nomeEl = document.querySelector(".nome");
const idadeEl = document.querySelector(".idade");
const racaEl = document.querySelector(".raca");
const classeEl = document.querySelector(".classe");
const historiaEl = document.querySelector(".historia");

const forcaEl = document.querySelector(".forca");
const destrezaEl = document.querySelector(".destreza");
const inteligenciaEl = document.querySelector(".inteligencia");
const carismaEl = document.querySelector(".carisma");
const sabedoriaEl = document.querySelector(".sabedoria");
const constituicaoEl = document.querySelector(".constituicao");

let dataCache = null;

async function loadJSON() {
    if (!dataCache) {
        const res = await fetch("personagem.json");
        dataCache = await res.json();
    }
    return dataCache;
}

async function gerarHistoriaIA(nome, raca, classe) {
    const prompt = `Crie uma história curta e criativa para um personagem de RPG chamado ${nome}, que é um ${raca} da classe ${classe}. Responda com apenas o texto da história, em português.`;

    try {
        const resposta = await fetch("http://localhost:11434/v1/chat/completions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "llama2",
                messages: [
                    {
                        role: "system",
                        content: "Você é um gerador de histórias de RPG. Sempre responda com uma história curta, criativa e em português."
                    },
                    {
                        role: "user",
                        content: prompt
                    }
                ],
                temperature: 0.9
            })
        });

        if (!resposta.ok) throw new Error("IA offline");

        const data = await resposta.json();
        return data.choices[0].message.content.trim();
    } catch (err) {
        console.warn("Servidor de IA offline. Usando fallback aleatório.");
        const fallbackData = await loadJSON();
        const historias = fallbackData.personagem.historia;
        return historias[Math.floor(Math.random() * historias.length)];
    }
}

botao.addEventListener("click", async () => {
    container.style.display = "none"; // Oculta o personagem anterior
    loader.style.display = "block";   // Mostra o loading

    const data = await loadJSON();
    const p = data.personagem;

    const nomeIdx = Math.floor(Math.random() * p.nome.length);
    const sobrenomeIdx = Math.floor(Math.random() * p.sobrenome.length);
    const idadeVal = Math.floor(Math.random() * 82) + 18;
    const racaIdx = Math.floor(Math.random() * p.raca.length);
    const classeIdx = Math.floor(Math.random() * p.classe.length);

    const nomeCompleto = `${p.nome[nomeIdx]} ${p.sobrenome[sobrenomeIdx]}`;
    const raca = p.raca[racaIdx];
    const classe = p.classe[classeIdx];

    const historia = await gerarHistoriaIA(nomeCompleto, raca, classe);

    const forca = Math.ceil(Math.random() * 100);
    const destreza = Math.ceil(Math.random() * 100);
    const inteligencia = Math.ceil(Math.random() * 100);
    const carisma = Math.ceil(Math.random() * 100);
    const sabedoria = Math.ceil(Math.random() * 100);
    const constituicao = Math.ceil(Math.random() * 100);

    nomeEl.textContent = nomeCompleto;
    idadeEl.textContent = idadeVal;
    racaEl.textContent = raca;
    classeEl.textContent = classe;
    historiaEl.textContent = historia;

    forcaEl.textContent = forca;
    destrezaEl.textContent = destreza;
    inteligenciaEl.textContent = inteligencia;
    carismaEl.textContent = carisma;
    sabedoriaEl.textContent = sabedoria;
    constituicaoEl.textContent = constituicao;

    container.style.display = "flex";
    loader.style.display = "none"; // Esconder loader
});


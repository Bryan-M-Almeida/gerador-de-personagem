<<<<<<< HEAD
/* container do personagem */
const container = document.querySelector(".personagem-container");

/* gerador */
const botao = document.querySelector(".btn");

/* personagem */
const nome = document.querySelector(".nome");
const idade = document.querySelector(".idade");
const raca = document.querySelector(".raca");
const classe = document.querySelector(".classe");
const historia = document.querySelector(".historia");

const forca = document.querySelector(".forca");
const destreza = document.querySelector(".destreza");
const inteligencia = document.querySelector(".inteligencia");
const carisma = document.querySelector(".carisma");
const sabedoria = document.querySelector(".sabedoria");
const constituicao = document.querySelector(".constituicao");



fetch('./personagem.json')
    .then(res => res.json())
    .then(data => {
        botao.addEventListener("click", function () {

            /* personagem gerador*/
            let nomeRandom = Math.floor(Math.random() * 281);
            let sobrenomeRandom = Math.floor(Math.random() * 79);
            let idadeRandom = Math.floor(Math.random() * 100);
            let racaRandom = Math.floor(Math.random() * 11);
            let classeRandom = Math.floor(Math.random() * 10);
            let historiaRandom = Math.floor(Math.random() * 10);

            /* atributos gerador */
            let forcaRandom = Math.floor(Math.random() * 100);
            let destrezaRandom = Math.floor(Math.random() * 100);
            let inteligenciaRandom = Math.floor(Math.random() * 100);
            let carismaRandom = Math.floor(Math.random() * 100);
            let sabedoriaRandom = Math.floor(Math.random() * 100);
            let constituicaoRandom = Math.floor(Math.random() * 100);

            /* container */
            container.style.display = "flex";

            /* personagem */
            nome.innerHTML = data.personagem.nome[nomeRandom] + " " + data.personagem.sobrenome[sobrenomeRandom];
            idade.innerHTML = idadeRandom;
            raca.innerHTML = data.personagem.raca[racaRandom];
            classe.innerHTML = data.personagem.classe[classeRandom];
            historia.innerHTML = data.personagem.historia[historiaRandom];

            /* personagem */
            forca.innerHTML = forcaRandom;
            destreza.innerHTML = destrezaRandom;
            inteligencia.innerHTML = inteligenciaRandom;
            carisma.innerHTML = carismaRandom;
            sabedoria.innerHTML = sabedoriaRandom;
            constituicao.innerHTML = constituicaoRandom;

        });
    });
=======
/* container do personagem */
const container = document.querySelector(".personagem-container");

/* gerador */
const botao = document.querySelector(".btn");

/* personagem */
const nome = document.querySelector(".nome");
const idade = document.querySelector(".idade");
const raca = document.querySelector(".raca");
const classe = document.querySelector(".classe");
const historia = document.querySelector(".historia");

const forca = document.querySelector(".forca");
const destreza = document.querySelector(".destreza");
const inteligencia = document.querySelector(".inteligencia");
const carisma = document.querySelector(".carisma");
const sabedoria = document.querySelector(".sabedoria");
const constituicao = document.querySelector(".constituicao");



fetch('./personagem.json')
    .then(res => res.json())
    .then(data => {
        botao.addEventListener("click", function () {

            /* personagem gerador*/
            let nomeRandom = Math.floor(Math.random() * 281);
            let sobrenomeRandom = Math.floor(Math.random() * 79);
            let idadeRandom = Math.floor(Math.random() * 100);
            let racaRandom = Math.floor(Math.random() * 11);
            let classeRandom = Math.floor(Math.random() * 10);
            let historiaRandom = Math.floor(Math.random() * 10);

            /* atributos gerador */
            let forcaRandom = Math.floor(Math.random() * 100);
            let destrezaRandom = Math.floor(Math.random() * 100);
            let inteligenciaRandom = Math.floor(Math.random() * 100);
            let carismaRandom = Math.floor(Math.random() * 100);
            let sabedoriaRandom = Math.floor(Math.random() * 100);
            let constituicaoRandom = Math.floor(Math.random() * 100);

            /* container */
            container.style.display = "flex";

            /* personagem */
            nome.innerHTML = data.personagem.nome[nomeRandom] + " " + data.personagem.sobrenome[sobrenomeRandom];
            idade.innerHTML = idadeRandom;
            raca.innerHTML = data.personagem.raca[racaRandom];
            classe.innerHTML = data.personagem.classe[classeRandom];
            historia.innerHTML = data.personagem.historia[historiaRandom];

            /* personagem */
            forca.innerHTML = forcaRandom;
            destreza.innerHTML = destrezaRandom;
            inteligencia.innerHTML = inteligenciaRandom;
            carisma.innerHTML = carismaRandom;
            sabedoria.innerHTML = sabedoriaRandom;
            constituicao.innerHTML = constituicaoRandom;

        });
    });
>>>>>>> 925d614 (melhoria na responsividade)

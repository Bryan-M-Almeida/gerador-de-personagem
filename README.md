# 🧙‍♂️ Gerador de Personagem RPG

Projeto simples e estiloso que gera personagens aleatórios para RPG com nome, idade, raça, classe, história e atributos. Tudo com HTML, CSS e JavaScript puro.

---

## 🎯 Funcionalidades

* Geração aleatória de:

  * Nome + sobrenome
  * Idade (18 a 99)
  * Raça (Elfo, Anão, Orc, etc)
  * Classe (Bárbaro, Clérigo, etc)
  * História (background aleatório ou gerada por IA)
  * Atributos (força, destreza, etc)

* Usa IA local com [Ollama](https://ollama.com) para gerar histórias

* Dados de nomes, raças e classes carregados do `personagem.json`

* Interface responsiva com visual temático medieval

* Fallback para modo offline (sem IA)

---

## 🖼️ Preview

![image](https://github.com/user-attachments/assets/1726580c-10ab-427a-a3e6-b32d9dbf9000)
![image](https://github.com/user-attachments/assets/572f6e81-319a-4552-9b30-7868bc73bdee)
![image](https://github.com/user-attachments/assets/b4e52398-0356-4ab8-b3ed-c6e0c6122296)
![image](https://github.com/user-attachments/assets/27669f0c-8884-41e9-8d38-f13a290c1015)

---

## 📁 Estrutura

```bash
├── index.html          # Página principal
├── style.css           # Estilo da interface
├── script.js           # Lógica de geração
├── personagem.json     # Base de dados com nomes, raças, classes, etc
├── /issue              # Pasta com imagens de loading e logo
```

---

## 🚀 Como rodar o projeto

### 🔧 Requisitos

* [Node.js](https://nodejs.org/) instalado
* [Ollama](https://ollama.com/) instalado (opcional, para gerar histórias com IA)
* Navegador moderno (Chrome, Firefox, etc.)

### 🚪 Sem IA?

Se o Ollama **não estiver rodando**, o site **continua funcionando normalmente**, usando o arquivo `personagem.json` como fallback.

### 🤖 Instalando e usando o Ollama

1. Baixe e instale: [https://ollama.com/download](https://ollama.com/download)

2. Puxe o modelo:

```bash
ollama pull llama2
```

3. Inicie o servidor local:

```bash
ollama serve
```

> Isso roda na porta `11434` por padrão

---

### 🔄 Executando o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/gerador-de-personagem.git
```

2. Navegue até a pasta:

```bash
cd gerador-de-personagem
```

3. Instale o http-server (caso não tenha):

```bash
npm install -g http-server
```

4. Rode o servidor:

```bash
http-server
```

5. Acesse no navegador:

```
http://localhost:8080
```

> Ou use extensão Live Server do VS Code.

---

## ✅ Tecnologias usadas

* HTML5
* CSS3
* JavaScript Vanilla
* IA com Ollama + LLaMA2

---

## 🔮 Melhorias futuras

* [ ] Exportar personagem em PDF
* [ ] Salvar favoritos no navegador
* [ ] Filtro por tipo (ex: Elfo Guerreiro)

---

Desenvolvido por [Bryan](https://github.com/Bryan-M-Almeida) 

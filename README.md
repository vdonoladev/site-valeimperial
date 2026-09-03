<div align="center">

# 🏛️ Vale Imperial — Curadoria de Turismo & Imóveis

<p align="center">
  <strong>Plataforma editorial de turismo boutique e acervo imobiliário de alto padrão na serra fluminense.</strong>
</p>

<p align="center">
  <a href="https://valeimperial-vdonoladev.vercel.app/"><strong>Explore a demonstração ao vivo »</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/Tech-Vanilla%20JS%20%7C%20CSS3%20%7C%20HTML5-E34F26?style=for-the-badge" alt="Stack" />
</p>

</div>

## 📖 Sobre o Projeto

O **Vale Imperial** é uma plataforma institucional com direcionamento visual editorial, concebida para atuar como ponte entre viajantes exigentes, investidores e a essência histórica de Petrópolis (RJ). 

Distanciando-se de agências de turismo convencionais e de portais imobiliários genéricos, o projeto foi estruturado com foco em exclusividade, tipografia refinada e interações sofisticadas na interface, englobando:
- **Turismo Autoral Privativo:** Roteiros gastronômicos, ecológicos e culturais com guias especializados.
- **Acervo Imobiliário Curado:** Propriedades de campo, chalés de arquitetura bioclimática e casarões históricos tombados em regiões como Itaipava, Corrêas, Araras, Nogueira e Centro Histórico.
- **Jornal da Serra:** Artigos editoriais sobre restauro, lifestyle serrano e mercado de alto padrão.

## ✨ Funcionalidades em Destaque

- **Cursor Flutuante Interativo:** Efeito visual personalizado (`custom-cursor`) que acompanha o mouse e exibe labels de contexto dinâmicos ao interagir com cards, botões e imagens.
- **Filtragem Dinâmica de Imóveis:** Alternância instantânea por categorias (*Todos*, *Casas de Campo*, *Imóveis Históricos*, *Investimento*) sem recarregamento de página.
- **Modal Editorial Dinâmico:** Diálogo modal reutilizável para detalhamento de roteiros turísticos e fichas técnicas com controle de acessibilidade (`aria-hidden`).
- **Navegação Responsiva Completa:** Menu drawer lateral para telas mobile com transições suaves e tipografia harmonizada.
- **Formulário de Captação Qualificada:** Formulário de contato estruturado para segmentação imediata de interesse (*Turismo*, *Investimento Imobiliário* ou *Ambos*).
- **SEO & Otimização Open Graph:** Meta tags completas para compartilhamento otimizado no WhatsApp, Facebook e indexação em buscadores.

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido priorizando performance nativa, sem dependência de frameworks pesados:

- **HTML5 Semântico:** Estrutura acessível com tags dedicadas (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3 Moderno:**
  - Design system próprio baseado em variáveis CSS (paleta inspirada no clima e patrimônio colonial da serra).
  - Layouts flexíveis e responsivos com CSS Grid e Flexbox.
  - Animações e microinterações puras.
- **JavaScript (ES6+):**
  - Manipulação de DOM para filtragem de catálogo em tempo real.
  - Controle de eventos do cursor customizado e abertura/fechamento de modais.
  - Validação e manipulação do formulário de contato.
- **SVG:** Ícones vetoriais leves e ilustração estilizada de localização.
- **Deploy:** Vercel.

## 📁 Estrutura de Pastas

```bash
vale-imperial/
├── assets/                  # Imagens de roteiros, propriedades e hero
│   ├── hero_petropolis.jpg
│   ├── exp_chocolate.jpg
│   ├── prop_itaipava.jpg
│   └── ...
├── index.html               # Estrutura principal da aplicação
├── styles.css               # Folha de estilos e variáveis de design
├── script.js                # Lógica interativa (filtros, modais, cursor)
└── README.md                # Documentação do projeto
```

## 🚀 Como Executar Localmente

Como o projeto é construído sobre tecnologias nativas da web, não há necessidade de gerenciadores de pacotes ou etapas de build.

1. **Clone o repositório:**
```bash
git clone https://github.com/vdonoladev/site-valeimperial
```

2. **Acesse o diretório do projeto:**
```bash
cd vale-imperial
```

3. **Execute localmente:**
* Abra o arquivo `index.html` diretamente no seu navegador de preferência; ou
* Utilize uma extensão como o **Live Server** no VS Code para hot-reload.

---

## 🔗 Links

* **Deploy:** [valeimperial-vdonoladev.vercel.app](https://valeimperial-vdonoladev.vercel.app/)
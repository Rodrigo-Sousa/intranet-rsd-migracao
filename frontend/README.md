# Visão Geral do repositório

1. Criar o **novo frontend React**.
2. Definido **arquitetura de pastas**.
3. Criar os **componentes principais da _intranet_**.
4. Montar o **layout base** 
5. Preparar o projeto para receber a estilização por **Tailwind e API** na sequência. 

---

## Criando o React (Vite)

Na raiz da pasta (frontend), digitar:

```bash
npm create vite@latest frontend -- --template react
npm install
npm run dev
```

Após isso, teremos uma estrutura assim:

```css

frontend/
    src/
        App.jsx
        main.jsx
        index.html

```

Local que acessaremos, para ver se está rorando é: http://localhost:5173/

## Arquitetura profissional do frontend

Arquitetura por responsabilidades + features (regras específicas - recursos)

```arduino

src\
    assets/ #imagens, ícones, logos
        banners/
        niver/
        logo.png

    components/ # componentes reutilizáveis (Button, Card, etc)
        Header.jsx
        Footer.jsx
        Carousel.jsx
        ServicesArea.jsx
        ValueArea.jsx
    
    features/
        birthdays/
            BirthdaySections.jsx
            BirthdayFilter.jsx
            BirthdaysCard.jsx
            birthdays.data.js
        confidencital/
            ConfidentialForms.jsx
            useConfidentialForms.js
    
    layout/
        MainLayout.jsx
    
    services/
        api.js

    pages/
        Home.jsx

    App.jsx
    main.jsx

```

Com essa estilização temos alguns pontos fortes:
- Evitando componentes gigantes
- Evitando Códigos duplicados
- Evitando bagunça quando o sistema crescer

## Estrutura de migração - index.php -> React

O que será realizado: 

**index.php**|React|
---|---|
`<header>`|`components/Header.jsx`
Navbar + dropdowns|`components/Navbar.jsx`
Carousel|`components/HeroCarousel.jsx`
Área serviços|`components/ServiceSessions.jsx`
Valores (Missão, Visão,...)|`components/ValuesSections.jsx`
Aniversariantes|`features/birthdays/*`
Canal Confidencial|`features/confidential/*`
Footer|`components/Footer.jsx`
Página inteira|`pages/Home.jsx/*`

---

## Instalando o Tailwind CSS

Instalado uma única vez, e podendo ser utilizado em todo o projeto

```bash
npm install -D tailwindcss postcss autoprefixer
 npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```
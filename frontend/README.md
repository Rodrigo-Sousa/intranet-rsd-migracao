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
    assets\ #imagens, ícones, logos
    components\ # componentes reutilizáveis (Button, Card, etc)
    layout\ #estrutura da página
        Header.jsx
        Sidebar.jsx
        MainLayout.jsx
    pages\ # páginas (rotas)
        Home.jsx
        CanalConfidencial.jsx
    features\ # regras específicas
        canal/
            ChannelList.jsx
            ChannelItem.jsx
            MessageList.jsx
            MessageItem.jsx
            MessageComposer.jsx
    services/ # comunicação com API 
        api.js
    hooks/ # hooks reutilizáveis
    styles / #estilos globais (temporário)
    App.jsx
    main.jsx

```

Com essa estilização temos alguns pontos fortes:
- Evitando componentes gigantes
- Evitando Códigos duplicados
- Evitando bagunça quando o sistema crescer
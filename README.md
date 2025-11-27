# Dorathas - Site Corporativo

Site responsivo e moderno para Dorathas, representante comercial especializada em serviços industriais e equipamentos periféricos.

## 📋 Características

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Duas versões: Padrão e Vibrante
- ✅ Blog com artigos dinâmicos
- ✅ Seção de Cases de Sucesso com logos de clientes
- ✅ Informações de contato e redes sociais
- ✅ Otimizado para SEO
- ✅ Performance rápida com Vite

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Vite** - Build tool rápido
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Ícones SVG
- **JavaScript ES6+** - Linguagem de programação

## 📦 Instalação

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Passos

1. **Descompacte o arquivo ZIP**
   ```bash
   unzip dorathas-codigo-fonte.zip
   cd dorathas-correto
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## 🚀 Build para Produção

Para gerar a versão otimizada para produção:

```bash
npm run build
```

Os arquivos compilados estarão na pasta `dist/`.

## 📁 Estrutura do Projeto

```
dorathas-correto/
├── src/
│   ├── App.jsx              # Versão padrão do site
│   ├── AppVibrante.jsx      # Versão vibrante do site
│   ├── AppWrapper.jsx       # Wrapper para alternar versões
│   ├── assets/              # Logos, imagens e ícones
│   ├── styles/              # Estilos CSS
│   ├── utils/               # Funções utilitárias
│   └── main.jsx             # Ponto de entrada
├── public/                  # Arquivos estáticos
├── index.html               # HTML principal
├── package.json             # Dependências do projeto
├── vite.config.js           # Configuração do Vite
└── tailwind.config.js       # Configuração do Tailwind CSS
```

## 🎨 Versões Disponíveis

### Versão Padrão (App.jsx)
- Cores neutras e profissionais
- Design limpo e minimalista
- Ideal para empresas tradicionais

### Versão Vibrante (AppVibrante.jsx)
- Cores mais vibrantes e modernas
- Design mais dinâmico
- Ideal para empresas inovadoras

Para alternar entre versões, edite `src/main.jsx` e importe:
- `App` para versão padrão
- `AppWrapper` para versão vibrante

## 📝 Seções do Site

1. **Hero** - Apresentação inicial com slider
2. **Quem Somos** - Informações sobre a empresa
3. **Serviços** - Termoplásticos, Termofixos, Moldes, Usinagem
4. **Equipamentos** - Periféricos HM
5. **Software** - MeasureTech (automação de processos)
6. **Blog** - Artigos sobre indústria
7. **Cases de Sucesso** - Logos de clientes
8. **Contato** - Informações e formulário

## 🔧 Customização

### Alterar Cores
Edite `tailwind.config.js` para customizar a paleta de cores.

### Adicionar Novos Logos
1. Coloque a imagem em `src/assets/`
2. Importe no topo do arquivo (App.jsx ou AppVibrante.jsx)
3. Adicione um novo `<div>` com `<img>` na seção Cases de Sucesso

### Editar Conteúdo
Todos os textos estão nos arquivos JSX. Localize a seção desejada e edite o conteúdo.

### Adicionar Artigos ao Blog
Edite `src/assets/blog_articles.json` ou adicione novas seções `<section id="blog-article-*">` no App.jsx.

## 📱 Responsividade

O site é totalmente responsivo e foi testado em:
- ✅ Smartphones (320px+)
- ✅ Tablets (768px+)
- ✅ Desktops (1024px+)
- ✅ Telas grandes (1280px+)

## 🌐 Deploy

### Opção 1: Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Opção 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Opção 3: GitHub Pages
1. Crie um repositório no GitHub
2. Configure o GitHub Pages nas configurações
3. Push o código para a branch `main`

### Opção 4: Servidor Próprio
1. Execute `npm run build`
2. Copie a pasta `dist/` para seu servidor web
3. Configure o servidor para servir `index.html` para todas as rotas

## 🐛 Troubleshooting

### Erro: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Porta 5173 já está em uso
```bash
npm run dev -- --port 3000
```

### Imagens não carregam
Certifique-se de que as imagens estão em `src/assets/` e importadas corretamente.

## 📞 Suporte

Para dúvidas ou problemas, entre em contato:
- **WhatsApp:** (19) 99391-4471
- **Email:** contato@dorathas.com.br
- **Localização:** Limeira, São Paulo

## 📄 Licença

Este projeto é propriedade da Dorathas. Todos os direitos reservados.

---

**Versão:** 1.0.0  
**Última atualização:** Novembro 2024


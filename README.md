# Documentação do Projeto de Gerenciamento de Bolsas de Sangue em Vue.js
## Introdução
Esta documentação descreve o projeto de um sistema web construído em Vue.js que permite que hospitais gerenciem bolsas de sangue entre si. O sistema possibilita aos hospitais visualizar o estoque de bolsas de sangue disponíveis, checar solicitações de outros hospitais, adicionar e remover bolsas de sangue, e atender as solicitações de outros hospitais.

## Requisitos do Sistema
Antes de prosseguir com a instalação e configuração do projeto, certifique-se de ter as seguintes dependências instaladas:

Node.js (versão 12 ou superior)
Vue CLI (versão 3 ou superior)

## Instalação
Siga os passos abaixo para instalar e configurar o projeto:

Faça o download do código-fonte do projeto a partir do repositório.
Abra um terminal e navegue até o diretório raiz do projeto.
Execute o seguinte comando para instalar as dependências do projeto:
``npm install``

## Configuração
Antes de executar o projeto, você precisa realizar algumas configurações:
Abra o arquivo src/config.js no diretório raiz do projeto. Neste arquivo, você pode configurar as seguintes opções:

apiBaseUrl: O URL base da API do sistema de gerenciamento de bolsas de sangue. Certifique-se de fornecer o URL correto para interagir com a API do sistema.
Outras configurações relevantes, como chaves de acesso, podem ser adicionadas ou modificadas conforme necessário.
Executando o Projeto
Após concluir as etapas de instalação e configuração, você pode iniciar o projeto. Execute o seguinte comando no terminal:

``npm run serve``

Isso irá iniciar o servidor de desenvolvimento e você poderá acessar o projeto no navegador através do seguinte URL: http://localhost:8080.

## Uso do Sistema
O sistema de gerenciamento de bolsas de sangue possui as seguintes funcionalidades:

### 1. Visualizar Estoque de Bolsas de Sangue
Após acessar o sistema, você poderá visualizar o estoque atual de bolsas de sangue disponíveis no próprio hospital. O sistema exibirá informações como tipo de sangue, quantidade disponível e data de validade.

### 2. Checar Solicitações de Outros Hospitais
O sistema permite que você verifique as solicitações de bolsas de sangue de outros hospitais. Você poderá visualizar informações como o hospital solicitante, tipo de sangue necessário e quantidade desejada.

### 3. Adicionar Bolsa de Sangue
Para adicionar uma nova bolsa de sangue ao estoque do hospital, você poderá utilizar a funcionalidade de adição de bolsa de sangue. Será necessário fornecer informações como tipo de sangue, quantidade e data de validade da bolsa adicionada.

### 4. Remover Bolsa de Sangue
Se necessário, você poderá remover bolsas de sangue do estoque do hospital. Basta selecionar a bolsa de sangue a ser removida e confirmar a operação.

### 5. Atender Solicitações
Ao receber uma solicitação de bolsa de sangue de outro hospital, você poderá atendê-la no sistema. Selecione a solicitação e especifique a quantidade de bolsas de sangue a serem fornecidas. O sistema atualizará automaticamente o estoque e registrará a operação.


## Dependências
### axios
O Axios é um cliente HTTP baseado em Promises, que permite fazer requisições HTTP de forma fácil e eficiente.
Versão: 1.4.0
Documentação: https://axios-http.com/

### bootstrap
O Bootstrap é um framework front-end popular que fornece estilos CSS e componentes pré-construídos para ajudar no desenvolvimento de interfaces responsivas e modernas.
Versão: 5.3.0
Documentação: https://getbootstrap.com/docs/5.3/getting-started/introduction/

### bootstrap-icons
O Bootstrap Icons é um conjunto de ícones SVG de código aberto que podem ser usados em seu projeto para adicionar ícones facilmente.
Versão: 1.10.5
Documentação: https://icons.getbootstrap.com/

### bootstrap-vue-next
O Bootstrap Vue Next é uma biblioteca de componentes Vue.js que integra o Bootstrap com o Vue, permitindo que você use os componentes do Bootstrap em seu projeto Vue.
Versão: 0.9.20
Documentação: https://bootstrap-vue.org/

### vue
O Vue.js é um framework JavaScript progressivo para a construção de interfaces de usuário. Ele é usado para criar aplicativos web interativos e reativos.
Versão: 3.3.4
Documentação: https://v3.vuejs.org/

### vue-axios
O Vue Axios é um plugin Vue.js que fornece uma integração fácil e transparente entre o Axios e o Vue para facilitar o uso de requisições HTTP em componentes Vue.
Versão: 3.5.2
Documentação: https://www.npmjs.com/package/vue-axios

### vue-router
O Vue Router é um roteador oficial para o Vue.js que permite criar aplicativos de página única (SPA) com navegação por rotas.
Versão: 4.2.2
Documentação: https://next.router.vuejs.org/

## DevDependencies
### @tsconfig/node18
O pacote @tsconfig/node18 fornece um arquivo de configuração do TypeScript para projetos Vue.js usando o Node.js versão 18.
Versão: 2.0.1
Documentação: https://www.npmjs.com/package/@tsconfig/node18

###@types/node
O pacote @types/node fornece declarações de tipo TypeScript para o ambiente Node.js.
Versão: 18.16.17
Documentação: https://www.npmjs.com/package/@types/node

### @vitejs/plugin-vue
O pacote @vitejs/plugin-vue é um plugin oficial do Vue para o Vite, que permite a compilação de arquivos Vue no ambiente de desenvolvimento.
Versão: 4.2.3
Documentação: https://www.npmjs.com/package/@vitejs/plugin-vue

### @vitejs/plugin-vue-jsx
O pacote @vitejs/plugin-vue-jsx é um plugin oficial do Vue para o Vite, que permite a compilação de arquivos Vue com suporte ao JSX no ambiente de desenvolvimento.
Versão: 3.0.1
Documentação: https://www.npmjs.com/package/@vitejs/plugin-vue-jsx

### @vue/tsconfig
O pacote @vue/tsconfig fornece um arquivo de configuração do TypeScript para projetos Vue.js.
Versão: 0.4.0
Documentação: https://www.npmjs.com/package/@vue/tsconfig

### npm-run-all
O pacote npm-run-all permite a execução de vários scripts npm sequencialmente ou em paralelo.
Versão: 4.1.5
Documentação: https://www.npmjs.com/package/npm-run-all

### typescript
O TypeScript é uma linguagem de programação baseada em JavaScript que adiciona suporte a tipos estáticos ao JavaScript.
Versão: 5.0.4
Documentação: https://www.typescriptlang.org/

### unplugin-vue-components
O pacote unplugin-vue-components é um plugin Vue.js que simplifica o uso de componentes Vue em seu projeto.
Versão: 0.25.1
Documentação: https://www.npmjs.com/package/unplugin-vue-components

###vite
O Vite é um construtor de aplicativos web extremamente rápido e leve para projetos modernos de front-end.
Versão: 4.3.9
Documentação: https://vitejs.dev/


## Conclusão
Essa documentação descreveu o projeto de um sistema de gerenciamento de bolsas de sangue em Vue.js. Certifique-se de seguir os requisitos de instalação e configuração para executar o projeto corretamente. O sistema permite que hospitais visualizem estoques, chequem solicitações, adicionem e removam bolsas de sangue, além de atenderem solicitações de outros hospitais. Personalize o sistema conforme necessário para atender aos requisitos específicos do seu ambiente e necessidades.

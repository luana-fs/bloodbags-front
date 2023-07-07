# Documentação do Projeto de Gerenciamento de Bolsas de Sangue em Vue.js
Introdução
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

shell
Copy code
npm install
Configuração
Antes de executar o projeto, você precisa realizar algumas configurações:

Abra o arquivo src/config.js no diretório raiz do projeto.

Neste arquivo, você pode configurar as seguintes opções:

apiBaseUrl: O URL base da API do sistema de gerenciamento de bolsas de sangue. Certifique-se de fornecer o URL correto para interagir com a API do sistema.
Outras configurações relevantes, como chaves de acesso, podem ser adicionadas ou modificadas conforme necessário.
Executando o Projeto
Após concluir as etapas de instalação e configuração, você pode iniciar o projeto. Execute o seguinte comando no terminal:

shell
Copy code
npm run serve
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

## Conclusão
Essa documentação descreveu o projeto de um sistema de gerenciamento de bolsas de sangue em Vue.js. Certifique-se de seguir os requisitos de instalação e configuração para executar o projeto corretamente. O sistema permite que hospitais visualizem estoques, chequem solicitações, adicionem e removam bolsas de sangue, além de atenderem solicitações de outros hospitais. Personalize o sistema conforme necessário para atender aos requisitos específicos do seu ambiente e necessidades.

# Validação de Acesso e Gerenciamento de Lista de Usuários
<img align="" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img align="" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
<img align="" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
<img align="" src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white ">
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/OneDrive-0078D4.svg?style=for-the-badge&logo=microsoftonedrive&logoColor=white">
</p>

*Disciplina:* Desensivolvimento Web



*Professor*: [Leonardo Santiago Sidon da Rocha](https://github.com/LeonardoRochaMarista/)

# Descrição

Este projeto consiste em um sistema de login e cadastro de usuários, desenvolvido com o intuito de demonstrar funcionalidades básicas de autenticação e gerenciamento de usuários em uma aplicação web. Ele permite que usuários façam login com suas credenciais e se cadastrem, armazenando as informações em arrays para simular um banco de dados simples.

# Tecnologias Utilizadas

- *HTML5*: Estrutura do projeto, incluindo os formulários de login e cadastro.
- *CSS3*: Utilizado para estilizar os formulários e a tabela de visualização dos usuários cadastrados.
- *JavaScript*: Implementação da lógica de validação, cadastro, edição e exclusão de usuários.

# Estrutura do Projeto

O projeto é composto por dois formulários principais:

1. *Formulário de Login*: Permite que o usuário insira seu email e senha para acessar o sistema. Se os dados forem válidos, o usuário é redirecionado para a página de cadastro.
   
   - *Validação*: A função acessar() verifica se o email contém os caracteres '@' e '.' e se a senha foi preenchida. Se qualquer validação falhar, uma mensagem de erro é exibida.
   
2. *Formulário de Cadastro*: Permite que o usuário insira seu nome e email para se cadastrar no sistema. Os dados são armazenados em arrays (userLista e emaillista) e exibidos em uma tabela abaixo do formulário.

   - *Salvamento e Validação*: A função salvarUser() verifica se os campos foram preenchidos corretamente e armazena os dados nos arrays. Se algum campo estiver vazio, uma mensagem de alerta é exibida.

# Funcionalidades

- *Login*:
  - Validação de email e senha.
  - Redirecionamento para a página de cadastro após login bem-sucedido.

- *Cadastro*:
  - Armazenamento de dados em arrays.
  - Exibição dos dados cadastrados em uma tabela.
  - Funções para editar e excluir usuários cadastrados.

## Como Usar

1. *Login*:
   - Preencha o email e a senha no formulário de login.
   - Clique em "ACESSAR" para validar as informações e ser redirecionado para a página de cadastro.

2. *Cadastro*:
   - Preencha o nome e email no formulário de cadastro.
   - Clique em "Enviar" para adicionar os dados à tabela de usuários.
   - Utilize os botões "Editar" e "Excluir" para modificar ou remover usuários da tabela.

## Considerações Finais

Este sistema é um exemplo básico de um CRUD (Create, Read, Update, Delete) usando tecnologias de front-end. Ele pode ser expandido para incluir funcionalidades mais avançadas, como armazenamento em banco de dados, autenticação segura e integração com APIs.

Para utilizar o sistema, basta abrir o arquivo HTML em um navegador web. O JavaScript incorporado irá gerenciar todas as funcionalidades diretamente no cliente, sem a necessidade de um servidor backend.

<img src="img/login.png" width=400px>      

<img src="img/cadastro.png" width=400px>

# Autor 
* `Geovana Aparecida de Lima`

<img src="img/geovana.jpg" width=200px>

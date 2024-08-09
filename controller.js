//FUNÇÃO PARA VALIDAÇÃO DE ACESSO   
//window.location.href é uma propriedade do objeto window em JavaScript que representa a URL (endereço) da página atual ou permite redirecionar o navegador para uma nova URL.
function acessar(){
    let loginEmail =document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos");
    }else{
        //alert("Campos preenchidos com sucesso");
        window.location.href = 'cadastro.html';
    }
}

// FUNÇÃO PARA ARMAZENAMENTO DE NOMES EM ARRAY
//A função salvarUser é usada para: Capturar o nome inserido pelo usuário. Verificar se o nome foi inserido.Armazenar o nome no array dadoLista. Atualizar a lista exibida na página com os nomes armazenados.
var dadoLista = [];
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){
        dadoLista.push(nomeUser);
        //console.log(dadoLista);
        criaLista();
        document.getElementById('nomeUser').value = "";
    }else{
        alert("Favor informe um nome para cadastro");
    }
}

// FUNÇÃO DE CRIAR LISTA
//<td> cria coluna e o <tr> cria linha | <th> define cabeçalho da tabela | += o que estiver dentro da tabela fica mais mas adiciona alguma coisa  | A expressão parentNode.parentNode.rowIndex em JavaScript é usada para identificar o índice de uma linha (<tr>) dentro de uma tabela HTML.
function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = " <tr><th>Nome Usúario</th><th>Ações</th></tr>";
    for(let i=0;i<= (dadoLista.length - 1); i++){
        tabela += "<tr><td>" + dadoLista[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}
//FUNÇÃO PARA EDITAR NOMES DE LISTA
// value representa o conteúdo ou o valor inserido ou selecionado pelo usuário nesses elementos.  splice remover ou substituir elementos em posições específicas do array. 
function editar(i){
    document.getElementById('nomeUser').value =dadoLista[(i - 1)];
    dadoLista.splice(dadoLista[(i - 1)], 1);
}

//FUNÇÃO PARA EXCLUIR NOME DE LISTA
//deleteRow deleta a linha 
function excluir(i){
    dadoLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}
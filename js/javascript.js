document.addEventListener('DOMContentLoaded', () => { //isso aqui faz que o js só seja executado quando a pagina inteira do html for carregada
    
const input = document.getElementById('busca'); //Identifica a barra de busca

input.addEventListener('input', (event) => { //Se algo for digitado na barra o valor será armazenado na variavel pesquisa, const serve pra declara variaveis
    const pesquisa = maiusculo_sem_espaco(event.target.value);

        const palavras = document.querySelectorAll('.container .text');

            if(pesquisa != ''){
                palavras.forEach(text =>{
            
                    if(maiusculo_sem_espaco(text.textContent).indexOf(pesquisa) !== -1){ // Chama a funcao, transforma todo texto digitado em maiusculo e depois verifica se o que foi digitado condiz com o que ta na class conteiner, se sim a propriedade retorna um numero diferente de -1, se não retorna -1
                        text.style.color = 'red';
                    }
                });

            } 
            else palavras.forEach(text =>{ //Se não tiver nada digitado na barra de busca ele retorna o texto todo pra cor preta
                text.style.color = 'black';
            });
        });

    function maiusculo_sem_espaco(pesquisa){ //Cria a função com o nome maiusculo_sem_espaco, que transforma tudo que for digitado na busca em maiusculo e com o trim retira os espaços de antes e depois da informação escrita
        return pesquisa.toUpperCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''); //essas duas linhas ai servem para se mesmo a pessoa não colocar acento na palavra achar ela do mesmo jeito
    }

});

function carConteudo(){
    let listaDoencas = document.getElementById('links'); // Obtém a lista de doenças
    let botao = document.getElementById('botao_doencas');//Criando uma variavel pra mexer no botão
    const doenca_individual = document.querySelectorAll('#nome_doenca'); //como sao varios elementos com o mesmo id temos que usar o querySelectorAll
    let menu = document.getElementById('menu'); // criando a variavel que pega o id do menu

    if (listaDoencas.style.display === "none") {
        listaDoencas.style.display = "flex";

        if(innerWidth<600){ //media screen pra js
            
            doenca_individual.forEach((doenca_individual) => { //isso aqui faz que para cada elemento com o id doenca_individual o código será executado
                doenca_individual.style.fontSize = "130%";
            })

            botao.style.fontSize = "110%";
            listaDoencas.style.display = "flex";
            listaDoencas.style.listStyle = "none";
            listaDoencas.style.alignContent = "stretch"
            listaDoencas.style.justifyContent = "center";
            listaDoencas.style.flexDirection = "row";
            listaDoencas.style.flexWrap = "wrap";
            menu.style.width = "95%";
            menu.style.height = "100px";
            menu.style.transition = "1s";
        }

        else{
            menu.style.width = "575px";
            menu.style.transition = "1s";  // Torna visível
        }

    } else {
        listaDoencas.style.display = "none"; // Torna invisível
        
        menu.style.transition = "1s";
        menu.style.width = "100px"; // Altera a largura
        menu.style.height = "50px";

    }
}

function validarForms() {
    // Impede o envio do formulário, caso o botão tenha o tipo submit

    let confirmacao = document.querySelector('.confirmacao'); //porque nao tem id e sim uma class
    let cabecalho = document.querySelector('.cabecalho');
    let forms = document.querySelector('.centralizar');
    let rodape = document.querySelector('.rodape');

    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var email = document.getElementById("email").value;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var tamanho_senha = senha.length;

    // Validação da senha
    if (tamanho_senha < 8) {
        window.alert("A senha deve conter no mínimo 8 caracteres...");
        return false;
    }

    cabecalho.style.filter = "blur(30px)";
    forms.style.filter = "blur(30px)";
    rodape.style.filter = "blur(30px)";
    
    // Preenche os dados na confirmação
    document.getElementById('valid_nome').innerHTML = nome;
    document.getElementById('valid_idade').innerHTML = idade;
    document.getElementById('valid_email').innerHTML = email;
    document.getElementById('valid_username').innerHTML = usuario;
    document.getElementById('valid_senha').innerHTML = senha;

    // Exibe a tela de confirmação
    confirmacao.style.display = "block";
}

function botao_nao() {
    let confirmacao = document.querySelector('.confirmacao');
    let cabecalho = document.querySelector('.cabecalho');
    let forms = document.querySelector('.centralizar');
    let rodape = document.querySelector('.rodape');
    
    confirmacao.style.display = "none";
    cabecalho.style.filter = "blur(0px)";
    forms.style.filter = "blur(0px)";
    rodape.style.filter = "blur(0px)";
}

function botao_sim(){
    let confirmacao = document.querySelector('.confirmacao');
    let cabecalho = document.querySelector('.cabecalho');
    let forms = document.querySelector('.centralizar');
    let rodape = document.querySelector('.rodape');
    
    confirmacao.style.display = "none";
    cabecalho.style.filter = "blur(0px)";
    forms.style.filter = "blur(0px)";
    rodape.style.filter = "blur(0px)";
}

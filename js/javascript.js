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
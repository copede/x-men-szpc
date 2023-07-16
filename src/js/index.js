/*OBJETIVO 1 - quando passar o mouse em cima do personagem na 
listagem , devemos seleciona-lo*/
// passo 1 - pegar os pesonagens no JS pra poder verificar quando o usuario passar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem');

// passo 2 - adicionar a classe selecionado no personagem que o usuario passar o cursor do mouse

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () =>{

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

 /* passo 3 - verificar se já existe um personagem selecionado,
         se sim, devemos remover a seleção dele*/

         const personagemSelecionado = document.querySelector('.selecionado');
         personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado');

        /*OBJETIVO 2 - quando passar  o mouse em cima do personagem 
        na imagem, o nome e a descriçao do personagem grande*/
        /* passo 1 - pegar o elemento do personagem grande pra adiconar
        as informações dele*/

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
            
        //passo 2 - alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        console.log(idPersonagem)
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        //passo 3 alterar o nome do personagem  grande
        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // passo 4 - alterar a descrição do personagem grande

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
        

    })
})
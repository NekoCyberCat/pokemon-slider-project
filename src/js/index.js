// Variáveis
const btnForward = document.getElementById('btn-forward');
const btnBack = document.getElementById('btn-back');
const cards = document.querySelectorAll('.card');
let atualCard = 0;

// Funções
function hideSelectedCard(){
    const selectedCard = document.querySelector('.selected');
    selectedCard.classList.remove('selected');
}

function showCard(indexCard){
    cards[indexCard].classList.add('selected');
}

// Execução
btnForward.addEventListener('click', function (){

    if(atualCard === cards.length - 1) return 

    hideSelectedCard();
    
    atualCard++;
    showCard(atualCard);
})


btnBack.addEventListener('click', function (){

    if(atualCard === 0) return
 
    hideSelectedCard();

    atualCard--;
    showCard(atualCard);
})
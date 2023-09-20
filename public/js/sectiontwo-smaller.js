
window.addEventListener('resize', function(){
    const cardContainer = document.querySelector('.card-container');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    let currentIndex = 0;

    if(window.innerWidth < 568){
        function showCards(){
            const cards = cardContainer.querySelectorAll('.card');

            cards.forEach((currentCard,index) =>{
                if(index === currentIndex ){
                    currentCard.style.display = 'block';
                }
                else{
                    currentCard.style.display = 'none';
                }
            });
        }

        function nextCard() {
            const cards = cardContainer.querySelectorAll('.card');

            if(currentIndex+1 < cards.length){
                currentIndex+=1;
                showCards();
            }
        }

        function prevCard(){
            if(currentIndex>0){
                currentIndex-= 1;
                showCards();
            }
        }

        showCards();
        nextButton.addEventListener('click',nextCard);
        prevButton.addEventListener('click',prevCard);
    
    }
});
    

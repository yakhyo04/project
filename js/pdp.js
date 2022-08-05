const cardAmount = document.querySelector('.card__cta--amount');
const cardInc = document.querySelector('.card__cta--increase');
const cardDec = document.querySelector('.card__cta--decrease');

const cardShow = document.querySelector('.card__navigation--first');
const cardHidden = document.querySelector('.card__navigation--hidden');
const cardShowText = document.querySelector('.card__navigation--firstShow');

const secondCardShow = document.querySelector('.card__navigation--second');
const secondCardHidden = document.querySelector('.card__navigation--secondHidden');
const secondCardShowText = document.querySelector('.card__navigation--secondShow');

const thirdCardShow = document.querySelector('.card__navigation--third');
const thirdCardHidden = document.querySelector('.card__navigation--thirdHidden');
const thirdCardShowText = document.querySelector('.card__navigation--thirdShow');

const fourthCardShow = document.querySelector('.card__navigation--fourth');
const fourthCardHidden = document.querySelector('.card__navigation--fourthHidden');
const fourthCardShowText = document.querySelector('.card__navigation--fourthShow');

let num = 0;

// secondCardHidden.style.display = 'none';
// thirdCardHidden.style.display = 'none';
// fourthCardHidden.style.display = 'none';
// secondCardShowText.innerHTML = '+';
// thirdCardShowText.innerHTML = '+';
// fourthCardShowText.innerHTML = '+';

cardInc.addEventListener('click', () => {
    num++;
    cardAmount.innerHTML = num;
})

cardDec.addEventListener('click', () => {
    if(num >= 1) num--;
    cardAmount.innerHTML = num;
})

cardShow.addEventListener('click', () => {
    if(cardHidden.style.display == 'none'){
        cardShowText.innerHTML = '-';

        cardHidden.style.display = 'block';
    }else{
        cardShowText.innerHTML = '+';
        cardHidden.style.display = 'none';
    }
})

secondCardShow.addEventListener('click', () => {
    if(secondCardHidden.style.display == 'none'){
        secondCardShowText.innerHTML = '-'
        secondCardHidden.style.display = 'block';
    }else{
        secondCardShowText.innerHTML = '+';
        secondCardHidden.style.display = 'none';
    }
})

thirdCardShow.addEventListener('click', () => {
    if(thirdCardHidden.style.display == 'none'){
        thirdCardShowText.innerHTML = '-'
        thirdCardHidden.style.display = 'block';
    }else{
        thirdCardShowText.innerHTML = '+';
        thirdCardHidden.style.display = 'none';
    }
})

fourthCardShow.addEventListener('click', () => {
    if(fourthCardHidden.style.display == 'none'){
        fourthCardShowText.innerHTML = '-'
        fourthCardHidden.style.display = 'block';
    }else{
        fourthCardShowText.innerHTML = '+';
        fourthCardHidden.style.display = 'none';
    }
})


function myFunction(imgs){
    var expandImg = document.getElementById('expandImg');
    expandImg.src = imgs.src;
}
myFunction();
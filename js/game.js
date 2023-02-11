const grid = document.querySelector('.grid')

const katarinas = [
    'kda',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
]

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className

    return element
}

function endGame() {
    const reveledCards = document.querySelectorAll('.disabled-card')

    if(reveledCards.length === 0) {
        setTimeout(() => {
            alert('You Won!')
        }, 500)
    }
}

const checkCards = () => {
    const firstKat = firstCard.getAttribute('data-katarina')
    const secondKat = secondCard.getAttribute('data-katarina')

    if(firstKat === secondKat) {
        firstCard.firstChild.classList.remove('disabled-card')
        secondCard.firstChild.classList.remove('disabled-card')
    
        firstCard = ''
        secondCard = ''

        endGame()
    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')

            firstCard = ''
            secondCard = ''
        }, 500)
    }
}

const revealCard = ({ target }) => {
    if(target.parentNode.className.includes('reveal-card')) {
        return; 
    }

    if(firstCard === '') {
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode

        checkCards()
    }
}

let firstCard = '';
let secondCard = '';


const createCard = (katarina) => {
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../images/${katarina}.png')`
    front.classList.add('disabled-card')

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)
    card.setAttribute('data-katarina', katarina)


    return card
}


const loadGame = () => {

    const duplicateKatarinas = [ ...katarinas, ...katarinas ]

    const shuffledArray = duplicateKatarinas.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((katarina) => {
        const card = createCard(katarina)
        grid.appendChild(card)
    })
}

loadGame()
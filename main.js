const btnStart = document.querySelector('.start')
const btnClick = document.querySelector('.click')
const timerSpan = document.querySelector('.timer')
const scoreList = document.querySelector('.score__list')
const bodyEl = document.querySelector('body')

let score = 0

btnStart.addEventListener('click', () => {
    timer()
    btnClick.addEventListener('click', () => {
        
        score++
    })

    setTimeout(() => {
        btnClick.setAttribute('disabled', true)
        bodyEl.innerHTML += createModal(score)
       
        const scoreListItem = document.querySelector('.score__li')
        scoreListItem.textContent = score

        closeModal()
    }, 10000);
})

const timer = () => {
    let number = 10
    setInterval(() => {
        if (number >= 0){
           timerSpan.textContent = number
           number--
        }
    }, 1000);
}

// const addScore = () => {
//     function updateScore() {
//         const listItem = document.querySelector('.score__li')
//         score++
//         listItem.textContent = score
//         btnClick.removeEventListener('click', updateScore)
//     }
//     btnClick.addEventListener('click', updateScore)

//     setTimeout(() => {
//         btnClick.setAttribute('disabled', true)
//     }, 10000);
// }

const createModal = score => {
    return `
    <div class="modal__wrapper">
        <div class="modal">
            <div class="modal__text">
                Вітаю! Ви набрали ${score} кліків!
            </div>
            <button class="okay">Ok</button>
            <button class="close">Close</button>
        </div>
    </div>
    `
}

const createListScore = score => {
    return `
        <li class="score__li">${score}</li>
    `
}

const closeModal = () => {
    const btnClose = document.querySelector('.close')
    const btnOkay = document.querySelector('.okay')

    btnClose.addEventListener('click', () => {
        const modal = document.querySelector('.modal__wrapper')
        modal.remove()
    })

    btnOkay.addEventListener('click', () => {
        const modal = document.querySelector('.modal__wrapper')
        modal.remove()
    })
}
const selectedRatings = document.querySelectorAll('[data-selection]')
const welcomePage = document.querySelector('.welcome-page')
const thankYouPage = document.querySelector('.thankYouPage')
const selectionMsgELement = document.querySelector('.selected')
const submitBtn = document.querySelector('.submit-btn')

let clickArr = []

selectedRatings.forEach(selectedRating => { 
    selectedRating.addEventListener('click', handleRating)
})

submitBtn.addEventListener('click', handleSubmission)

function handleRating(e) {
    
    const checkForPrevRating = [...selectedRatings].find(eachRating => eachRating.classList.contains('clicked'))
    if(checkForPrevRating) {
        [...selectedRatings].find(eachRating => eachRating.classList.remove('clicked'))
    }
    const clickedTarget = e.target
    rating = clickedTarget.dataset.selection
    clickedTarget.classList.toggle('clicked')
    
    clickArr.push(rating)
    giveThankYouMessage(rating)
}

function  giveThankYouMessage(rating) {
    selectionMsgELement.innerText = `You Selected ${rating} Out of 5`
} 

function handleSubmission() {
    if(clickArr.length <= 0) return
    welcomePage.classList.remove('active')
    thankYouPage.classList.add('active')
}
   
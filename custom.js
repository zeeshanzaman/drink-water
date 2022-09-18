const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('lister')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remaind')

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})


// it is made for click after click to empty the glass

function highlightCups(idx) {
    if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }


    // make if else condition of highlightcups to add or remove class

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
}
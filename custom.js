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

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length
        // it is for filling in larger cup
    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
            // it is for filling in larger cup writing 
        percentage.innerText = `${fullCups / totalCups * 100}%`

        if (fullCups === totalCups) {
            remained.style.visibility = 'hidden'
            remained.style.height = 0
        }
    }


}
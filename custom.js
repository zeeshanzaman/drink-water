const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('lister')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remaind')

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => hightlightCups(idx))
})






//fade rules box
document.querySelector('.rules').addEventListener('click', () => {
    document.querySelector('.rules-overlay').classList.add('active')
})
//fade rules box
document.querySelector('.cross-btn').addEventListener('click', () => {
    document.querySelector('.rules-overlay').classList.remove('active')
})
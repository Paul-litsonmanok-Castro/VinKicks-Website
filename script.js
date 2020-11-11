const toggleButton = document.getElementsByClassName('button-menu-image')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

const arrowButton = document.getElementsByClassName('arrow-down-image')[0]
const sidebar = document.getElementsByClassName('sidebar')[0]

arrowButton.addEventListener('click', () => {
    sidebar.classList.toggle('active')
})
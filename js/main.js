function toggleMenu() {
    let navMenu = document.getElementById('menu')

    if (navMenu.style.display == 'flex') {
        navMenu.style.display = 'none'
    } else {
        navMenu.style.display = 'flex'
    }
}
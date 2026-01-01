//Dynamically load header, footer, and navigation
function loadFile(filename, elementId) {
    fetch(filename)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

// Load the common sections depend on index or other html
function loadHeaderAndFooter() {
    const path = window.location.pathname.includes('/html/') ? './shared/' : 'html/shared/';
    //const path = !window.location.pathname.includes('/html') ? 'html/shared/':'./shared/';
    loadFile(`${path}header.html`, 'header');
    console.log(path)
    loadFile(`${path}footer.html`, 'footer');
    console.log(path)
}

loadHeaderAndFooter();

// loadFile('html/shared/header.html', 'header');
// loadFile('html/shared/footer.html', 'footer');

//Toggle menu after click on the link
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu-toggle').checked = false;

    })


})



// sidebar function

function sidebar(active) {
    let sidebar = document.querySelector('.sidebar');

    if (active) {
        sidebar.style.left = '0';
    }
    if (!active) {
        sidebar.style.left = '-500px';
    }
    
}
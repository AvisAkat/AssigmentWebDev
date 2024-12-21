

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



// mini search box

function miniSearchBox(active) {
    let mini = document.querySelector('.mini-searchbox');

    if (active) {
        mini.style.top = '0';
    }
    if (!active) {
        mini.style.top = '-500px';
    }
    
}
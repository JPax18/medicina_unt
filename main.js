document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            // Lógica para detectar si es móvil o escritorio
            if (window.innerWidth <= 768) {
                // En móvil: desliza el menú (tipo drawer)
                sidebar.classList.toggle('active');
            } else {
                // En escritorio: colapsa el menú (cambia ancho)
                sidebar.classList.toggle('collapsed');
                mainContent.classList.toggle('expanded');
            }
        });
    }
});
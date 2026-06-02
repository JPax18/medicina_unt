document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-btn");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                // Móvil: desliza el menú
                sidebar.classList.toggle("active");
            } else {
                // Escritorio: colapsa el menú
                sidebar.classList.toggle("collapsed");
                mainContent.classList.toggle("expanded");
            }
        });
    }
});
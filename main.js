document.addEventListener('DOMContentLoaded', function () {
    const hamburguesa = document.querySelector('.hamburguesa');
    const seccionesHeader = document.querySelector('nav .seccionesHeader');

    hamburguesa.addEventListener('click', () => {
        seccionesHeader.classList.toggle('show');
    });
});
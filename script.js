const fileInput = document.getElementById('file');
const errorMessage = document.getElementById('file_error');

fileInput.addEventListener('change', () => {
    const files = fileInput.files;

    if (files.length > 5) {
        errorMessage.textContent = 'Puedes seleccionar hasta 5 archivos de imagen.';
        fileInput.value = ''; 
    } else {
        errorMessage.textContent = `${files.length} imágenes seleccionadas`; // 
    }
});

function addCountryCode() {
    const phoneInput = document.getElementById('telefono');

    if (!phoneInput.value.startsWith('+34 ')) {
        phoneInput.value = '+34 ' + phoneInput.value.replace(/^\+\d+\s/, '');
    }
}


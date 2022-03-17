const div = document.querySelector('div');
div.style.width = "250px";
div.style.height = "250px";
div.style.backgroundColor = "red";

div.addEventListener('click', cambiarColor);
div.addEventListener('mouseleave', volverColor);
div.addEventListener('dblclick', circulo);
div.addEventListener('mouseleave', volverForma);


function cambiarColor() {
    div.style.backgroundColor = "purple";
}

function volverColor() {
    div.style.backgroundColor = "red";
}

function circulo() {
    div.style.borderRadius = "50%";
}

function volverForma() {
    div.style.borderRadius = "0%";
}
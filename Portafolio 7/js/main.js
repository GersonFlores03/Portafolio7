document.getElementById("btn").addEventListener("click" ,mostrar_menu)
document.getElementById("back-Menu").addEventListener("click" ,ocultar_menu)
const contenido = document.getElementById("Navegador");
const colorMenu = document.getElementById("back-Menu")

function mostrar_menu(){
    contenido.style.right = "0px";
    colorMenu.style.display="block"
}

function ocultar_menu(){
    contenido.style.right = "-350px";
    colorMenu.style.display="none"
}



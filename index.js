const mascotas = document.querySelector("#mascotas")
const ruta_info = "img/media_refugio/Lobitos/Info Dogos.txt"
fetch(ruta_info)
    .then((resultado) => resultado.text())
    .then((texto) => {
        const lista = texto.split("\r\n\r").map((n) =>n.trim()) 
        for (perro of lista) {
            let info = perro.split("\r\n")
            
            let cont_nombre = document.createElement("h1")
            cont_nombre.className = "perro"

            //mascotas.appendChild(cont_nombre)
        }
    })
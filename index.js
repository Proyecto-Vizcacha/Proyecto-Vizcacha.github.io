const mascotas = document.querySelector("#mascotas")
const ruta_info = "img/media_refugio/Lobitos/Info Dogos.txt"
fetch(ruta_info)
    .then((resultado) => resultado.text())
    .then((texto) => {
        const lista = texto.split("\r\n\r").map((n) =>n.trim()) 
        for (perro of lista) {
            let info = perro.split("\r\n")
            
            let cont_perro = document.createElement("div")
            cont_perro.className = "perro"
            
            let cont_nombre = document.createElement("h2")
            cont_nombre.textContent = info[0]
            cont_perro.appendChild(cont_nombre)

            let cont_tamano = document.createElement("h3")
            cont_tamano.textContent = info[1]
            cont_perro.appendChild(cont_tamano)

            if (info[2]) {
                let cont_descripcion = document.createElement("p")
                cont_descripcion.textContent = info[2]
                cont_perro.appendChild(cont_descripcion)
            }

            mascotas.appendChild(cont_perro)
        }
    })
const mascotas = document.querySelector("#mascotas")
const ruta_info = "/img/media_refugio/Lobitos/Info Dogos.json"
fetch(ruta_info)
    .then((resultado) => resultado.json())
    .then((lista) => {
        for (perro of lista) {
            let cont_perro = document.createElement("div")
            cont_perro.className = "perro"
            let nombre = decodeURI(perro.name)
            let tamano = decodeURI(perro.size)
            let desc = decodeURI(perro.desc) || ""
            
            let cont_nombre = document.createElement("h2")
            cont_nombre.textContent = nombre
            cont_perro.appendChild(cont_nombre)

            let cont_tamano = document.createElement("h3")
            cont_tamano.textContent = tamano 
            cont_perro.appendChild(cont_tamano)

            let cont_imagen = document.createElement("img")
            cont_imagen.src = "img/media_refugio/Lobitos/"+nombre+".jpeg"
            cont_imagen.alt = "imagen "+nombre
            cont_imagen.loading = "lazy"
            cont_imagen.decode() //Para decodificar la imágen en el momento en el que se carga y evitar que la página se pare durante el scroll
            cont_perro.appendChild(cont_imagen)
            cont_perro.addEventListener("click", function() {
                let query = "nombre="+encodeURI(nombre)
                console.log("query_string: "+"\""+query+"\"")
                location.href="form.html?"+query
                
            })

            let cont_descripcion = document.createElement("p")
            cont_descripcion.textContent =desc 
            cont_perro.appendChild(cont_descripcion)

            mascotas.appendChild(cont_perro)
        }
    })
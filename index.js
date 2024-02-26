const ruta_info = "img/media_refugio/Lobitos/Info Dogos.txt"
fetch(ruta_info)
    .then((resultado) => resultado.text())
    .then((texto) => {
        const lista = texto.split("\n\n")
        for(texto_lista of lista) {
            console.log(texto_lista)
            console.log("-------------")
        }
    })
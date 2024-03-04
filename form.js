let params = new URLSearchParams(location.search)
if ( params.get("nombre") ) {
    document.getElementById("nombre_mascota").value = params.get("nombre")
}
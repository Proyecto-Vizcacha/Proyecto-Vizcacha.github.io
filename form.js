let params = new URLSearchParams(location.search)
if ( params.get("nombre") ) {
    document.getElementById("nombre").value = params.get("nombre")
}
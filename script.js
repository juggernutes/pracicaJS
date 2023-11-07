document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();
    var pelicula = {
        titulo: document.getElementById("titulo").value,
        anio: document.getElementById("anio").value,
        duracion: document.getElementById("duracion").value,
        genero: document.getElementById("genero").value,
        director: document.getElementById("director").value,
        sinopsis: document.getElementById("sinopsis").value,
    }
    agregarTabla(pelicula);
    e.target.reset();

function agregarTabla(pelicula){

    var tbody = document.getElementById("cuerpoTabla");
    var fila = document.createElement("tr");

    for (var key in pelicula){
        var td = document.createElement("td");
        td.textContent = pelicula[key]
        fila.appendChild(td);
    }

    var td = document.createElement("td");
    var btn = document.createElement("button");
    btn.textContent = "Eliminar";
    btn.className = "btn btn-danger";
    td.appendChild(btn);
    fila.appendChild(td);
    btn.onclick = function(){
        tbody.removeChild(this.parentNode.parentNode);
    }
    var td = document.createElement("td");
    var btne = document.createElement("button");
    btne.textContent = "Editar";
    btne.className = "btn btn-success";
    td.appendChild(btne);
    fila.appendChild(td);
    btn2.onclick = function(){
        document.getElementById("titulo").value = fila.childNodes[0].textContent;
        document.getElementById("anio").value = fila.childNodes[1].textContent;
        document.getElementById("duracion").value = fila.childNodes[2].textContent;
        document.getElementById("genero").value = fila.childNodes[3].textContent;
        document.getElementById("director").value = fila.childNodes[4].textContent;
        document.getElementById("sinopsis").value = fila.childNodes[5].textContent;
    };

    tbody.appendChild(fila);
}})
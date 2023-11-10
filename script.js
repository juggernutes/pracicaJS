document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();
    let p[eliculas] = [];
    var pelicula = {
        id: getId(),
        titulo: document.getElementById("titulo").value,
        anio: document.getElementById("anio").value,
        duracion: document.getElementById("duracion").value,
        genero: document.getElementById("genero").value,
        director: document.getElementById("director").value,
        sinopsis: document.getElementById("sinopsis").value,
    }
    peliculas.push(pelicula);
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
    var btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "btn btn-danger";
    td.appendChild(btnEliminar);
    fila.appendChild(td);
    btnEliminar.onclick = function(){
        tbody.removeChild(this.parentNode.parentNode);
    }

    var td = document.createElement("td");
    var btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.className = "btn btn-success";
    td.appendChild(btnEditar);
    fila.appendChild(td);
    btnEditar.onclick = function(){
        Editar(pelicula.id);
    };

    tbody.appendChild(fila);
}})

function limpiar(){ 
    document.getElementById("titulo").value = "";
    document.getElementById("anio").value = "";
    document.getElementById("duracion").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("director").value = "";
    document.getElementById("sinopsis").value = "";
}

function btnAgregar(){
    btn1.textContent = "Agregar";
    btn1.className = "btn btn-primary";
    btn1.onclick = function(){
        agregarTabla(pelicula);
        limpiar();
    }
}

function getId(){
    let count, id;

    if(localStorage.getItem("id")){
        count = parseInt(localStorage.getItem("id")) + 1;
    }else{
        count = 1;
    }

    localStorage.setItem("id", count);
    id = "ID" + count;
    return id;
}

function Editar(id){
    var pelicula = peliculas.find(function(pelicula){
        return pelicula.id === id;
    });
    btn1.textContent = "Editar";
    btn1.className = "btn btn-success";
    document.getElementById("titulo").value = pelicula.titulo;
    document.getElementById("anio").value = pelicula.anio;
    document.getElementById("duracion").value = pelicula.duracion;
    document.getElementById("genero").value = pelicula.genero;
    document.getElementById("director").value = pelicula.director;
    document.getElementById("sinopsis").value = pelicula.sinopsis;
    btnAgregar();
    limpiar();
}
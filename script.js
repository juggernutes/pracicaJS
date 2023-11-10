let peliculas = [];


document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("peliculas")) {
        peliculas = JSON.parse(localStorage.getItem("peliculas"));
        peliculas.forEach(function (pelicula) {
            agregarTabla(pelicula);
        });
    }
});

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    var pelicula = {
        id: getId(),
        titulo: document.getElementById("titulo").value,
        anio: document.getElementById("anio").value,
        duracion: document.getElementById("duracion").value,
        genero: document.getElementById("genero").value,
        director: document.getElementById("director").value,
        sinopsis: document.getElementById("sinopsis").value,
    };

    peliculas.push(pelicula);

    
    localStorage.setItem("peliculas", JSON.stringify(peliculas));

    agregarTabla(pelicula);
    limpiar();
});

function agregarTabla(pelicula) {
    var tbody = document.getElementById("cuerpoTabla");
    var fila = document.createElement("tr");

    for (var key in pelicula) {
        var td = document.createElement("td");
        td.textContent = pelicula[key];
        fila.appendChild(td);
    }

    var td = document.createElement("td");
    var btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "btn btn-danger";
    td.appendChild(btnEliminar);
    fila.appendChild(td);
    btnEliminar.onclick = function () {
        
        var index = peliculas.findIndex(function (p) {
            return p.id === pelicula.id;
        });
        peliculas.splice(index, 1);

        
        localStorage.setItem("peliculas", JSON.stringify(peliculas));

        
        tbody.removeChild(this.parentNode.parentNode);
    };

    var td = document.createElement("td");
    var btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.className = "btn btn-success";
    td.appendChild(btnEditar);
    fila.appendChild(td);
    btnEditar.onclick = function () {
        
        Editar(pelicula.id);
    };

    tbody.appendChild(fila);
}

function limpiar() {
    document.getElementById("titulo").value = "";
    document.getElementById("anio").value = "";
    document.getElementById("duracion").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("director").value = "";
    document.getElementById("sinopsis").value = "";
}

function getId() {
    let count;

    if (localStorage.getItem("id")) {
        count = parseInt(localStorage.getItem("id")) + 1;
    } else {
        count = 1;
    }

    localStorage.setItem("id", count);
    return "ID" + count;
}

function Editar(id) {
    var pelicula = peliculas.find(function (pelicula) {
        return pelicula.id === id;
    });

    
    var index = peliculas.findIndex(function (p) {
        return p.id === pelicula.id;
    });
    peliculas.splice(index, 1);

    
    localStorage.setItem("peliculas", JSON.stringify(peliculas));

    
    var tbody = document.getElementById("cuerpoTabla");
    tbody.innerHTML = "";

    
    peliculas.forEach(function (p) {
        agregarTabla(p);
    });

    
    document.getElementById("titulo").value = pelicula.titulo;
    document.getElementById("anio").value = pelicula.anio;
    document.getElementById("duracion").value = pelicula.duracion;
    document.getElementById("genero").value = pelicula.genero;
    document.getElementById("director").value = pelicula.director;
    document.getElementById("sinopsis").value = pelicula.sinopsis;

    
    btn1.textContent = "Editar";
    btn1.className = "btn btn-success";
    btn1.onclick = function () {
        
        peliculas.push(pelicula);

        
        localStorage.setItem("peliculas", JSON.stringify(peliculas));

        
        var tbody = document.getElementById("cuerpoTabla");
        tbody.innerHTML = "";

        
        peliculas.forEach(function (p) {
            agregarTabla(p);
        });

        
        limpiar();
    };
}

var crearDatos = function() {
    var campoNombre = document.getElementById("nombre");
    var campoApellido = document.getElementById("apellido");
    var campoEdad = document.getElementById("edad");

    var datoUno = campoNombre.value;
    var datoDos = campoApellido.value;
    var datoTres = campoEdad.value;

    var datos = "nombre="+datoUno+"&apellido="+datoDos+"&edad="+datoTres;
    
    enviarPeticion("POST", "http://localhost:3000/crear", datos, 
        function(respuestaPeticion){
            if(respuestaPeticion.state == true){
                campoNombre.value = "";
                campoApellido.value = "";
                campoEdad.value = "";
                console.log(respuestaPeticion.mensaje);
            }
        }
    );
}

var listarDatos = function() {
    enviarPeticion("GET", "http://localhost:3000/listar", null, 
        function(respuestaPeticion) {
            var contenidoTabla = document.getElementById("contenidoTablaUsuarios");
            contenidoTabla.innerHTML = "";
            for(let i = 0; i < respuestaPeticion.listaUsuarios.length; i++){
                contenidoTabla.innerHTML = contenidoTabla.innerHTML +
                    "<tr>" +
                        "<td>" + respuestaPeticion.listaUsuarios[i].nombre + "</td>" +
                        "<td>" + respuestaPeticion.listaUsuarios[i].apellido + "</td>" +
                        "<td>" + respuestaPeticion.listaUsuarios[i].edad + "</td>" +
                        "<td><button class='btn btn-danger' onclick='borrar(" + i + ")'>Borrar</button></td>" +
                    "</tr>";
            }
        }
    )
}

var borrar = function(index){
    enviarPeticion("GET", "http://localhost:3000/borrar/"+index, null, 
        function(respuestaPeticion) {
            if(respuestaPeticion.state == true){
                listarDatos();
            }
        }
    )
}

var enviarPeticion = function(tipo, url, datos, callback){
    var data = datos;
    var xhr = new XMLHttpRequest();
    xhr.open(tipo, url);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("cache-control", "no-cache");
    
    if(data == null){
        xhr.send();
    }
    else{
        xhr.send(data);
    }

    xhr.addEventListener("readystatechange", function(){
        if(this.readyState === 4){
            var respuesta = JSON.parse(this.responseText);
            return callback(respuesta);
        }
    })
} 
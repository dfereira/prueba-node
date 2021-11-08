var usuariosModelo = require("../modelos/usuariosModelo.js").usuariosModelo;

var usuariosControlador = {};

usuariosControlador.crear = function(request, response) {
    var nombre = request.body.nombre;
    var apellido = request.body.apellido;
    var edad = request.body.edad;

    if(nombre == undefined || nombre == null || nombre == ""){
        response.json({mensaje: "El campo nombre es obligatorio"});
        return;
    }

    if(apellido == undefined || apellido == null || apellido == ""){
        response.json({mensaje: "El campo apellido es obligatorio"});
        return;
    }

    if(edad == undefined || edad == null || edad == ""){
        response.json({mensaje: "El campo edad es obligatorio"});
        return;
    }

    var usuario = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }

    usuariosModelo.crear(usuario, function(respuesta){
        response.json(respuesta);
    })
}

usuariosControlador.listar = function(request, response) {
    usuariosModelo.listar(function(respuesta){
        response.json(respuesta);
    });
}

usuariosControlador.borrar = function(request, response) {
    var index = request.params.index;
    console.log("Usuario a borrar: " + index);
    usuariosModelo.borrar(index, function(respuesta){
        response.json(respuesta);
    });
}

module.exports.usuariosControlador = usuariosControlador;
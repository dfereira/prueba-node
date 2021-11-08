var usuariosModelo = {};
var usuarios = [];

usuariosModelo.crear = function(usuario, callback){
    usuarios.push(usuario);
    console.log(usuarios);
    return callback({state: true, mensaje: "El usuario se agregó correctamente"});
}

usuariosModelo.listar = function(callback){
    return callback({listaUsuarios: usuarios});
}

usuariosModelo.borrar = function(index, callback){
    usuarios.splice(index, 1);
    return callback({state: true});
}


module.exports.usuariosModelo = usuariosModelo;
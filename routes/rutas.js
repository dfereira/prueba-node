var usuariosControlador = require("../controladores/usuariosControlador.js").usuariosControlador

app.get('/listar', function(request, response){
    usuariosControlador.listar(request, response);
})

app.get('/borrar/:index', function(request, response){
    usuariosControlador.borrar(request, response);
})

app.post('/crear', function(request, response){
    usuariosControlador.crear(request, response);
});
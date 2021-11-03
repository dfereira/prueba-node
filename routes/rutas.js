app.post('/sumar',function(request,response){
    var a = parseInt(request.body.a);
    var b = parseInt(request.body.b);

    var c = a + b;

    response.send("El resultado es: " + c);
})

app.post('/restar',function(request,response){
    var a = parseInt(request.body.a);
    var b = parseInt(request.body.b);

    var c = a - b;

    response.send("El resultado es: " + c);
})

app.post('/multiplicar',function(request,response){
    var a = parseInt(request.body.a);
    var b = parseInt(request.body.b);

    var c = a * b;

    response.send("El resultado es: " + c);
})

app.post('/dividir',function(request,response){
    var a = parseInt(request.body.a);
    var b = parseInt(request.body.b);

    var c = a / b;

    response.send("El resultado es: " + c);
})
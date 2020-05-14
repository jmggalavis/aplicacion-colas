// Comando para establecer la conexión
var socket = io();

var label = $('#lblNuevoTicket'); // Creamos un alias 'label' para hacer referencia 
// a la etiqueta HTML en nuevo-ticket.html

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

//recibir evento on 
socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
});

$('button').on('click', function() {
    console.log('click');
    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        console.log('Respuesta server: ', siguienteTicket);
        label.text(siguienteTicket);

    });

})
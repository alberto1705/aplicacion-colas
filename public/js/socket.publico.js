var socket = io();

var labelEscritorio1 = $('#lblEscritorio1');
var labelEscritorio2 = $('#lblEscritorio2');
var labelEscritorio3 = $('#lblEscritorio3');
var labelEscritorio4 = $('#lblEscritorio4');

var labelTicket1 = $('#lblTicket1');
var labelTicket2 = $('#lblTicket2');
var labelTicket3 = $('#lblTicket3');
var labelTicket4 = $('#lblTicket4');

var lblTickets = [labelTicket1, labelTicket2, labelTicket3, labelTicket4];
var lblEscritorios = [labelEscritorio1, labelEscritorio2, labelEscritorio3, labelEscritorio4];

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

socket.on('estadoActual', function(data) {
    actualizaHTML(data.ultimos4);
});

socket.on('ultimos4', function(data) {
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(data.ultimos4);
});

function actualizaHTML(ultimos4) {
    for (i = 0; i < ultimos4.length; i++) {
        lblTickets[i].text('Ticket ' + ultimos4[i].numero);
        lblEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio);
    }
}
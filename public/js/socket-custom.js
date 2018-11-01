var socket = io();
socket.on('connect', function(){
    console.log('Conectando al servidor');
})

socket.on('disconnect', function(){
    console.log('Desconectado al servidor')
})

socket.on('env', function(message){
    console.log('Servidor : ', message);
})
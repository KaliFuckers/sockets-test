const {io} = require('../server');
io.on('connection', (cliente) => {
    console.log('Conectando al cliente');

    cliente.on('disconnect',()=>{
        console.log('Usuario desconectado');
    })

    cliente.on('enviarMensaje', (data, callback) => {
        console.log(data);
        cliente.broadcast.emit('env', data);
    });

    cliente.on('envi', (message) => {
        console.log(message)
    })
})
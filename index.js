var io = require('socket.io'),
    http = require('http'),
    server = http.createServer(),
    io = io.listen(server);

io.on('connection', function(socket) {
    console.log('User Connected');
    socket.on('message', function(datamsg){
        io.emit(datamsg.room+'message', datamsg.data);
    });
    socket.on('userentered', function(user){
        io.emit(user.room+'userentered', user.data);
    });
    socket.on('userleave', function(user){
        io.emit(user.room+'userleave', user.data);
    });
    
});

server.listen(3000, function(){
    console.log('Server started');
})
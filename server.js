const PORT = 3333

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('panik', (msg) => {
        console.log('[panik]', msg)
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

});

http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});
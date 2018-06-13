import * as http from 'http';
import * as socketIo from 'socket.io';
const server = http.createServer();
const io: SocketIO.Server = socketIo(server);

// Track total messages emited
let totalMessages: number = 0;

io.on('connection', (socket: SocketIO.Socket) => {
  console.log('client connected');

  socket.on('event', (data) => {
    console.log(data);
  });

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });

  // Track messages for each connection
  let i = 0;
  setInterval(() => {
    socket.emit('message', {
      message: 'Success',
      id: i++,
      globalMessageCount: totalMessages++,
    });
  }, 1000);
});

server.listen(3000);

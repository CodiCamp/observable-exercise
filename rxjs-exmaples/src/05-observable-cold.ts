import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import * as io from 'socket.io-client';

{
  /* create a new observable, providing the subscribe function. */
  const messages = Observable.create((observer: Observer<any>) => {
    console.log(
      '%cNew subscription created',
      'background: #222; color: #bada55',
    );

    const url = 'localhost:3000';
    const socket: SocketIOClient.Socket = io(url);

    socket.on('message', (data: any) => {
      observer.next(data);
    });

    return () => {
      socket.disconnect();
    };
  });

  /* An Observable is cold until subscribed. */
  messages.subscribe((message: any) => console.log(message));
}

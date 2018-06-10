import { Observable, Observer } from 'rxjs';
import * as io from 'socket.io-client';

{
  /* Create single connection outside of observer to avoid multiple connections. */
  let socket: SocketIOClient.Socket;
  const url = 'localhost:3000';
  socket = io(url);

  /* create a new observable, providing the subscribe function. */
  const messages = Observable.create((observer: Observer<any>) => {
    console.log(
      '%cNew subscription created',
      'background: #222; color: #bada55',
    );

    socket.on('message', (data: any) => observer.next(data));
  });

  /* Multiple subscriptions will open single connection. */
  // const subscription = messages.subscribe((message: any) => console.log('First subscription', message));
  // subscription.add(messages.subscribe((message: any) => console.log('Second subscription', message)));
  // setTimeout(() => subscription.unsubscribe(), 6000);
}

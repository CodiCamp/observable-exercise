import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { share } from 'rxjs/operators';
import * as io from 'socket.io-client';

{
  /* create a new observable, providing the subscribe function. */
  let socket: SocketIOClient.Socket;
  const url = 'localhost:3000';
  
  const messages = Observable.create((observer: Observer<any>) => {
    console.log(
      '%cNew subscription created',
      'background: #222; color: #bada55',
    );

    socket = io(url);

    socket.on('message', (data: any) => {
      observer.next(data);
    });

    return () => {
      socket.disconnect();
    };
  }).pipe(share());

  /***
   * In the example above we use the pipe() method, providing the share() operator.
   * The share() operator returns a new observable that is multicasted and hot.
   */

  /* Multiple subscriptions will open single connection. */
  const subscription = messages.subscribe((message: any) =>
    console.log('First subscription', message),
  );
  subscription.add(
    messages.subscribe((message: any) =>
      console.log('Second subscription', message),
    ),
  );
  setTimeout(() => subscription.unsubscribe(), 6000);
}

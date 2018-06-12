import { Observable } from 'rxjs';
import { publish, takeWhile } from 'rxjs/operators';
import { ConnectableObservable } from 'rxjs';

{
  /* Component state. */
  let alive = true;

  /* create a new observable, providing the subscribe function. */
  let i = 0;
  const observable = new Observable<number>((observer) => {
    console.log(
      '%cNew subscription created',
      'background: #222; color: #bada55',
    );
    i++;

    const interval = setInterval(() => {
      observer.next(i);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }).pipe(takeWhile(() => alive));

  // Use the new features of rxjs -> :( #_#
  // because .pipe() returns Observable<any> but we need the .connect() method
  // of type ConnectableObservable<number>
  let multicasted = observable.pipe(publish()) as ConnectableObservable<number>;

  /* Create two subscriptions */
  multicasted.subscribe((value) => console.log('First subscription', value));
  multicasted.subscribe((value) => console.log('Second subscription', value));

  /* Connect the subject to the observabe. */
  multicasted.connect();

  /* Complete the observable after 5 seconds. */
  setTimeout(() => (alive = false), 5000);
}

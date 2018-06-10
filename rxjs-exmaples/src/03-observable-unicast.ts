import { Observable } from 'rxjs';

{
  /* create a new observable, providing the subscribe function. */
  let i = 0;
  const observable: Observable<number> = new Observable((observer) => {
    // The subscribe function will be invoked for each subscription
    console.log(
      '%cNew subscription created',
      'background: #222; color: #bada55',
    );
    i++;

    // A new interval is set for each subscription
    const interval = setInterval(() => {
      observer.next(i);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  /* Each subscription receives a copy of Observer. */
  const subscription = observable.subscribe((value) =>
    console.log('First subscription', value),
  );
  subscription.add(
    observable.subscribe((value) => console.log('Second subscription', value)),
  );

  /* Unsubscribe after 5 seconds. */
  setTimeout(() => subscription.unsubscribe(), 5000);
}

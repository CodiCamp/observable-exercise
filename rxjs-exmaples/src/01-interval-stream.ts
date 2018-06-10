import { Observable, Subscriber } from 'rxjs';
{
  /* create a new observable, providing the subscribe function. */
  const observable: Observable<string> = Observable.create(
    (observer: Subscriber<string>) => {
      let called10Times = 0;

      const interval = setInterval(() => {
        called10Times++;
        if (called10Times > 10) {
          observer.complete();
        }

        observer.next('Hello from Observableland!');
      }, 1000);

      // teardown
      return () => {
        clearInterval(interval);
      };
    },
  );

  /* Subscribe to Notifications. */
  observable.subscribe(
    (value) => console.log(value),
    () => {},
    () => {
      console.log(`Completed`);
    },
  );
}

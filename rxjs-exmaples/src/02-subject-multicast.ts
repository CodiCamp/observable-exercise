import { Subject } from 'rxjs';
{
  /***
   * The Subject is both subscriber and observable.
   * It can subscribe a subscriber and it can emit values
   */

  /* create an instance of Subject. */
  const s = new Subject<number>();

  /* Subscribe to subject. */
  s.subscribe(
    (next) => console.log('before 1:', next),
    (error) => console.warn(error),
    () => console.log('complete before 1'),
  );
  s.subscribe(
    (next) => console.log('before 2:', next),
    (error) => console.warn(error),
    () => console.log('complete before 2'),
  );

  s.subscribe(
    function(next) {
      console.log('before 3:', next);
    },
    (error) => console.warn(error),
    () => console.log('complete before 3'),
  );

  /* Emit some values. */
  s.next(1);
  s.next(2);
  s.next(3);

  /* Subscribe late to subject. */
  s.subscribe(
    (next) => console.log('after:', next),
    (error) => console.warn(error),
    () => console.log('complete after'),
  );

  /* Late subscription will now receive Notification. */
  s.next(4);
  s.complete();
}

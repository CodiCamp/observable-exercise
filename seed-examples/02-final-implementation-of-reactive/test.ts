import { Observable } from './src/observable';

console.log(Observable);

//roughly replicated the behavior over here: https://github.com/ReactiveX/rxjs/blob/master/doc/observable.md
// const myObservable = Observable.create((observer) => {
//   // Observer only rises events
//   observer.next('asdf');
//   observer.next('woop');

//   observer.complete('still subscribed?');
//   observer.throw('Oh no! An error!');

//   observer.next('still subscribed?');
// });

// const subscription = myObservable.subscribe(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log('the error is: ' + error);
//   },
//   (lastValue) => {
//     console.log('the observable was completed');
//     console.log('last value before completion:');
//     console.log(lastValue);
//   },
// );

// //also replicated the .of() method
// Observable.of(1, 2, 3).subscribe((value) => {
//   console.log(value);
// });
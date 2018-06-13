# Observable exercise

Introduction to the core concepts of reactive programming

## Materials used

* http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html
* https://www.learnrxjs.io/operators/creation/create.html
* https://toddmotto.com/rxjs-observables-observers-operators
* https://gist.github.com/staltz/868e7e9bc2a7b8c1f754
* https://auth0.com/blog/whats-new-in-rxjs-6/
* https://www.academind.com/learn/javascript/rxjs-6-what-changed/

## Reactive programming

> Reactive programming is programming with **asynchronous data streams**.

## RxJS

> JavaScript implementation of the **ReactiveX** library. (Reactive Extensions) http://reactivex.io/rxjs/

## Observable

> An observer (or multiple observers) receives a **Notification** that is emitted by the observable.

## Notification

> Represents, or wraps, the event or value that is being emitted by the observable stream.

## Observer

> The **Observer** receives a **_Notification_** from an **_Observable_** and is managed by a **_Subscription_**.

## Subscription

> A **Subscription** is the link between an **_observable_** and an **_observer_**.

## Subject

> A subject is both an observable and an observer!

## Task definition

Implement Observable, Observer, Subscriber, Subscription and Subject using typescript.

### Observable Class

Must implement the following public static methods:

- of
- create

Must implement the following public instance methods:

- getValue
- getSubscriber
- setSubscriber
- getObserver
- setObserver
- getSubscription
- setInvokerFunction
- update
- subscribe

### Observer Class

Must implement the following public instance methods:

- next
- complete
- throw

### Subscriber Interface or Class

Must implement the following public instance methods:

- onNext
- onError
- onComplete

### Subscription Class

Must implement the following public instance methods:

- unsubscribe

### Project installation and server

```
yarn install
# OR
npm install
```

To start the server run:

```
yarn start
# OR
npm start
```

Your page is served at `localhost:3000`.

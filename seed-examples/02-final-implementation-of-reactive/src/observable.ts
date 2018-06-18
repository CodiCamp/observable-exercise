import { Observer } from './observer';
import { Subscriber } from './subscriber';
import { Subscription } from './subscription';
export class Observable {
  // Subscriber
  // last stream value
  // the result of the subscribe method
  // The object that notifies for changes in the stream of data
  private _observer: Observer;
  private _subscription: Subscription;
  private _subscriber: Subscriber | null;
  private _value: any;

  /**
   * Nothing to do here
   */
  constructor(private _invokerFn: (observer: Observer) => void) {}

  /**
   * Execute multiple notification values and complete the stream
   * Must return new Observable
   * @param {Any as Array} values
   */
  static of(...values: any[]) {}

  /**
   * Create new Observable
   * @param {Function} observerFunction
   * @returns {Observable}
   */
  static create(observerFunction: (observer: Observer) => void) {
    const observable = new Observable(observerFunction);

    return observable;
  }

  /**
   * Get last stream value
   */
  getValue(): any {
    return this._value;
  }

  /**
   * Get current subscriber
   */
  getSubscriber(): Subscriber | null {
    return this._subscriber;
  }

  /**
   * Set new subscriber
   * @param {Subscriber} subscriber
   * @returns {Void}
   */
  setSubscriber() {}

  /**
   * Get current observer
   * @returns {Observer}
   */
  getObserver() {}

  /**
   * Set new Observer
   * @param {Observer} observer
   * @returns {Void}
   */
  setObserver(observerFunction: (observer: Observer) => void) {
    this._invokerFn = observerFunction;
  }

  /**
   * Get current subscription
   * @returns {Subscription}
   */
  getSubscription(): Subscription {
    return this._subscription;
  }

  /**
   * Set invoker function
   * @param {Function} invoker
   * @returns {Void}
   */
  setInvokerFunction() {}

  /**
   * Update next value
   * @param {Any} newValue
   * @returns {Void}
   */
  update(newValue: any) {
    this._value = newValue;
  }

  /**
   * @param {Object} subscriberCallbacks
   * @prop onNext
   * @prop onError
   * @prop onComplete
   * @return {Subscription}
   */
  subscribe(subscriber: Subscriber): Subscription {
    this._subscriber = subscriber;
    this._observer = new Observer(this);
    this._subscription = new Subscription(() => {
      this._subscriber = null;
    });

    this._invokerFn(this._observer);

    return this._subscription;
  }
}

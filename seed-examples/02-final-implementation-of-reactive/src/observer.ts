import { Observable } from './observable';

export class Observer {
  constructor(private _observable: Observable) {}

  /**
   * Update Observable wuth new value
   * @param {Any} newValue
   * @returns {Void}
   */
  next(newValue: any) {
    this._observable.update(newValue);

    const subscriber = this._observable.getSubscriber();

    if (subscriber) {
      subscriber.onNext(this._observable.getValue());
    }
  }

  /**
   * Execute onComplte method of the subscriber with last value
   * Unsubscribe from subscription
   * @returns {Void}
   */
  complete(lastValue: any): void {
    this._observable.update(lastValue);

    const subscriber = this._observable.getSubscriber();
    const subscription = this._observable.getSubscription();

    if (subscriber && subscriber.onComplete) {
      subscriber.onComplete(this._observable.getValue());
    }

    if (subscription) {
      subscription.unsubscribe();
    }
  }

  /**
   * Execute onComplte onError of the subscriber with last value
   * Unsubscribe from subscription
   * @returns {Void}
   */
  throw(error: string) {
    const subscriber = this._observable.getSubscriber();
    const subscription = this._observable.getSubscription();

    if (subscriber && subscriber.onError) {
      subscriber.onError(error, this._observable.getValue());
    }

    if (subscription) {
      subscription.unsubscribe();
    }
  }
}

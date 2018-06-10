import { Observable } from './observable';

export class Observer {
  constructor(private _observable: Observable) {}

  /**
   * Update Observable wuth new value
   * @param {Any} newValue
   * @returns {Void}
   */
  next(newValue) {}

  /**
   * Execute onComplte method of the subscriber with last value
   * Unsubscribe from subscription
   * @returns {Void}
   */
  complete() {}

  /**
   * Execute onComplte onError of the subscriber with last value
   * Unsubscribe from subscription
   * @returns {Void}
   */
  throw(error: string) {}
}

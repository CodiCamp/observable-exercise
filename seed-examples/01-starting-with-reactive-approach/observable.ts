export class Observable {
  // Subscriber
  // last stream value
  // the result of the subscribe method
  // FN that is passed to the create method
  // The object that notifies for changes in the stream of data

  /**
   * Nothing to do here for now
   */
  constructor() {}

  /**
   * Execute multiple notification values and complete the stream
   * Must return new Observable
   * @param values
   * @returns {Observable}
   */
  static of(...values) {}

  /**
   * Create new Observable
   * @param {Function} observerFunction
   * @returns {Observable}
   */
  static create(observerFunction: (observer) => void) {}

  /**
   * Get last tream value
   */
  getValue() {}

  /**
   * Get current subscriber
   */
  getSubscriber() {}

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
  setObserver() {}

  /**
   * Get current subscription
   * @returns {Subscription}
   */
  getSubscription() {}

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
  update() {}

  /**
   * @param {Object} subscriberCallbacks
   * @prop onNext
   * @prop onError
   * @prop onComplete
   * @return {Subscription}
   */
  subscribe() {}
}

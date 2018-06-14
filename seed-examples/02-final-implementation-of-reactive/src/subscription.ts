export class Subscription {
  /**
   * @param {Function} unsubscribeFuntion
   */
  constructor(private unsubscribeFuntion: () => void) {}

  unsubscribe() {}
}

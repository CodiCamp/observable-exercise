export class Subscription {
  /**
   * @param {Function} unsubscribeFuntion
   */
  constructor(private _unsubscribeFuntion: () => void) {}

  unsubscribe() {
    this._unsubscribeFuntion();
  }
}

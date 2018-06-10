/**
 * Do we need a class ?
 */
export interface Subscriber {
  onNext(value: any): void;
  onError?(error: string, lastValue: any): void;
  onComplete?(value: any): void;
}

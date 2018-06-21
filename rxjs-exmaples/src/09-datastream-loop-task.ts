/**
 * We have 5 predefined values {ValueType}[] that musst be looped inside of a data stream
 * Each value is emited with a delay by the property delay{Number} of the previous one
 */
import { Observable, Subscriber } from 'rxjs';
{
  type ValueType = {
    data: string;
    delay: number;
  };

  const dataStreamValues: ValueType[] = [
    {
      data: 'First value',
      delay: 1000,
    },
    {
      data: 'Second value',
      delay: 500,
    },
    {
      data: 'Third value',
      delay: 350,
    },
    {
      data: 'Forth value',
      delay: 1050,
    },
    {
      data: 'Fifth value',
      delay: 840,
    },
  ];

  const valueEmitter = function(
    this: Subscriber<ValueType>,
    value: ValueType,
  ): void {
    this.next(value);

    let nextIndex = dataStreamValues.indexOf(value) + 1;

    if (nextIndex === dataStreamValues.length) {
      nextIndex = 0;
    }

    const nextValue = dataStreamValues[nextIndex];

    setTimeout(() => {
      valueEmitter.call(this, nextValue);
    }, value.delay);
  };

  const stream: Observable<ValueType> = Observable.create(
    (observer: Subscriber<ValueType>) => {
      console.log('Started streaming');

      const [firstValue] = dataStreamValues;

      valueEmitter.call(observer, firstValue);
    },
  );

  stream.subscribe((value: ValueType) => {
    console.log('Current value is', value.data);
    console.log(`Next value will be emitted after ${value.delay}`);
  });
}

import Now from '../src/index';

test('return endOfQuarter default', () => {
  const now = new Now(2017, 9, 29, 17, 35, 20, 100);
  expect(now.endOfQuarter()).toBe('2017-12-31 23:59:59.999');
});

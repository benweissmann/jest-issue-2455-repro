const FooModule = require('..');

it('works', () => {
  const obj = FooModule.foo();

  expect(obj.prop).toBeUndefined;
  jest.runAllTimers();
  expect(obj.prop).toBe('val');
});

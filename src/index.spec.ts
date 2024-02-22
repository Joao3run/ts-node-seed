import ExampleModel from '@/app/model/example';

it('deve mostar Hello world', () => {
  const exaple = new ExampleModel();
  expect(exaple.showName('world')).toBe('Hello world');
});

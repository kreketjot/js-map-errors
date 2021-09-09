import ErrorRepository from '../ErrorRepository';

test('creating error repository', () => {
  const { errors } = new ErrorRepository();
  expect(errors instanceof Map).toBe(true);
});

test('translating code error', () => {
  const errors = new ErrorRepository();
  expect(errors.translate(2)).toBe('Syntax error');
});

test('translating unknown code error', () => {
  const errors = new ErrorRepository();
  expect(errors.translate(25)).toBe('Unknown error');
});

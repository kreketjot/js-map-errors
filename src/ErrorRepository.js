export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [15, 'Type error'],
      [2, 'Syntax error'],
      [309, 'Reference error'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}

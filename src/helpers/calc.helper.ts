export class CalcHelper {
  constructor(private bias: number) {}

  sum(a: number, b: number): number {
    return a + b + this.bias;
  }

  checkPositiveNumbers(data: Array<number>): boolean {
    return data.every(a => Math.sign(a) >= 0);
  }
}

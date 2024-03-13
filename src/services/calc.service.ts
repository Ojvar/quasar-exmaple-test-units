import {BindingKey, BindingScope, injectable} from '@loopback/core';
import {CalcHelper} from '../helpers';
import {HttpErrors} from '@loopback/rest';

@injectable({scope: BindingScope.APPLICATION})
export class CalcService {
  static BINDING_KEY = BindingKey.create<CalcService>(
    `services.${CalcService.name}`,
  );

  constructor(private calcHelper: CalcHelper = new CalcHelper(0)) {}

  sumPositive(a: number, b: number): number {
    const checkResult = this.calcHelper.checkPositiveNumbers([a, b]);
    if (!checkResult) {
      throw new HttpErrors.UnprocessableEntity('invalid input');
    }
    return this.calcHelper.sum(a, b);
  }
}

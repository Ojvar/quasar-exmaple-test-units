/* eslint-disable @typescript-eslint/naming-convention */
import {get, param, post, requestBody} from '@loopback/rest';
import {model, property} from '@loopback/repository';
import {inject} from '@loopback/core';
import {CalcService} from '../services';

@model({
  jsonSchema: {
    if: {properties: {a: {const: true}}},
    then: {required: ['b']},
  },
})
export class CalcInput {
  @property({type: 'boolean', required: true})
  a: boolean;
  @property({type: 'string', required: false})
  b?: string;
}

export class CalcController {
  constructor(
    @inject(CalcService.BINDING_KEY) private calcService: CalcService,
  ) {}

  @post('/x/y/z')
  testPostMethod(
    @requestBody() body: {first_name: string; last_name: string},
  ): object {
    return {...body, first_name: body.first_name, id: +new Date()};
  }

  @get('/calc/positive-sum/{a}/{b}')
  sumPositive(
    @param.path.number('a') a: number,
    @param.path.number('b') b: number,
  ): number {
    return this.calcService.sumPositive(a, b);
  }

  @post('/test')
  test(@requestBody() data: CalcInput): CalcInput {
    console.log(data);
    return data;
  }
}

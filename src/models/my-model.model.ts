import {Model, model, property} from '@loopback/repository';

@model()
export class MyModel extends Model {
  @property({
    type: 'any',
    required: true,
    jsonSchema: {
      oneOf: [{type: 'string'}, {type: 'number'}],
    },
  })
  value: string | number;

  constructor(data?: Partial<MyModel>) {
    super(data);
  }
}

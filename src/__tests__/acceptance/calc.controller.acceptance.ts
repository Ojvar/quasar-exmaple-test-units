/* eslint-disable @typescript-eslint/naming-convention */
import {Client, expect} from '@loopback/testlab';
import {LbTestApplication} from '../../application';
import {setupApplication} from '../test-helper';

describe('CalcController [ACCEPTANCE]', () => {
  let app: LbTestApplication;
  let client: Client;

  enum EnumCalcUrl {
    POSITIVE_SUM = '/calc/positive-sum/{a}/{b}',
  }

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('should retreive an object that contains sent data', async () => {
    // POST
    const inputData = {
      first_name: 'amir',
      last_name: 'ojvar',
    };
    const expectedResult2 = {
      first_name: 'amir',
      last_name: 'ojvar',
    };
    const result2 = await client
      .post('/x/y/z')
      .set('content-type', 'application/json')
      .send(inputData)
      .expect(200);
    expect(result2.body).containDeep(expectedResult2);
  });

  it('should return sum of two positive numbers', async () => {
    // Arrange
    const num1 = 10;
    const num2 = 20;
    const expectedResult = num1 + num2;

    const url = EnumCalcUrl.POSITIVE_SUM.replace(
      '{a}',
      num1.toString(),
    ).replace('{b}', num2.toString());
    // url -> /calc/positive-sum/10/20

    // Act & Assert
    const clientResult = await client.get(url).expect(200);
    expect(clientResult.body).to.equal(expectedResult);
  });
});

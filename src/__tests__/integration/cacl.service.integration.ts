import {expect} from '@loopback/testlab';
import {LbTestApplication} from '../../application';
import {CalcService} from '../../services';
import {setupApplication} from '../test-helper';

describe('Calc Service [INTEGRATION TEST]', () => {
  let app: LbTestApplication;
  let calcService: CalcService;

  before('Setup Application', async () => {
    ({app} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  beforeEach(async () => {
    calcService = await app.get(CalcService.BINDING_KEY);
  });

  it('positive sum of two numbers should be correct', () => {
    // Arrange
    const num1 = 10;
    const num2 = 20;
    const expectedResult = num1 + num2;

    // Act
    const testResult = calcService.sumPositive(num1, num2);

    // Assert
    expect(testResult).to.equal(expectedResult);
  });

  it('sum of positive and negative should raise an error', () => {
    // Arrange
    const num1 = -10;
    const num2 = 20;

    // Act & Assert
    expect(() => calcService.sumPositive(num1, num2)).to.throw(/invalid input/);
  });
});

import {expect} from '@loopback/testlab';
import {CalcHelper} from '../../helpers';

describe('Calc Helper [UNIT TEST]', () => {
  const bias = 0;
  let calcHelper: CalcHelper;

  beforeEach(() => {
    calcHelper = new CalcHelper(bias);
  });

  it('all positive sum should be correct', () => {
    // Arrange
    const num1 = 10;
    const num2 = 20;
    const expectedResult = num1 + num2 + bias;

    // Act
    const testResult = calcHelper.sum(num1, num2);

    // Assert
    expect(testResult).to.equal(expectedResult);
  });

  it('positive and negative sum should be correct', () => {
    // Arrange
    const num1 = -10;
    const num2 = 20;
    const expectedResult = num1 + num2 + bias;

    // Act
    const testResult = calcHelper.sum(num1, num2);

    // Assert
    expect(testResult).to.equal(expectedResult);
  });

  it('all negative sum should be correct', () => {
    // Arrange
    const num1 = -10;
    const num2 = -20;
    const expectedResult = num1 + num2 + bias;

    // Act
    const testResult = calcHelper.sum(num1, num2);

    // Assert
    expect(testResult).to.equal(expectedResult);
  });

  it('check positive array result should be true', () => {
    // Arrange
    const array: Array<number> = [1, 2, 3, 4];
    const expectedResult = true;

    // Act
    const testResult = calcHelper.checkPositiveNumbers(array);

    // Assert
    expect(testResult).to.equal(expectedResult);
  });

  it('check positive array result should be false', () => {
    // Arrange
    const array: Array<number> = [1, 2, 3, -4];
    const expectedResult = false;

    // Act
    const testResult = calcHelper.checkPositiveNumbers(array);

    // Assert
    expect(testResult).to.equal(expectedResult);
  });
});

// // import { expect } from '@loopback/testlab';
// import { describe } from 'mocha';
// // import { CalcService } from '../../services';
//
// describe('Calc Service', () => {
//   // let calcService: CalcService;
//
//   // beforeEach(() => {
//   //   calcService = new CalcService();
//   // });
//
//   it('should be return sum of two positive numbers', () => {
//     // calcService = new CalcService();
//     //
//     // // Arrange
//     // const a = 10;
//     // const b = 20;
//     // const expectedResult = a + b;
//     //
//     // // Act
//     // const result = calcService.sum(a, b);
//     //
//     // // Assert
//     // expect(result).to.equal(expectedResult);
//   });
// });

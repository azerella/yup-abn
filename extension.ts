import * as Yup from 'yup';

declare module 'yup' {
  export interface NumberSchema {
    abn(): NumberSchema;
  }

  export interface StringSchema {
    acn(): StringSchema;
    arbn(): StringSchema;
    arsn(): StringSchema;
  }
}

const ABN_METHOD_NAME = 'abn';
const ABN_IDX_WEIGHTING = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const ACN_METHOD_NAME = 'acn';
const ARBN_METHOD_NAME = 'arbn';
const ARSN_METHOD_NAME = 'arsn';
const ACN_IDX_WEIGHTING = [8, 7, 6, 5, 4, 3, 2, 1];

/**
 * @see https://abr.business.gov.au/Help/AbnFormat
 */
function parseABN() {
  return this.test(
    ABN_METHOD_NAME,
    ({ value }) => `${value} is not a valid ABN`,
    function (value: number) {
      const valueArray = Array.from(String(value));
      const firstDigit = parseInt(valueArray[0]);

      // ABN length must be 11
      if (valueArray.length !== 11) {
        return false; // Msg too short
      }

      if (firstDigit <= 0) {
        return false; // Too small
      }

      // Decrement the first digit by 1
      const valueArrayReplaceFirstDigit: string[] = valueArray.map((value, idx) => {
        if (idx === 0) {
          return String(firstDigit - 1);
        }
        return value;
      });

      // Multiply values based on their positional weighting
      const valueSum = valueArrayReplaceFirstDigit.reduce(
        (acc, val, idx) => acc + parseInt(val) * ABN_IDX_WEIGHTING[idx],
        0
      );

      return valueSum % 89 === 0;
    }
  );
}

/**
 * @see https://asic.gov.au/for-business/registering-a-company/steps-to-register-a-company/australian-company-numbers/australian-company-number-digit-check/
 */
function parseACN() {
  return this.test(
    ACN_METHOD_NAME,
    ({ value }) => `${value} is not a valid ACN, ARSN or ARBN`,
    function (value: string) {
      const valueArray = value.split('').filter((val) => Number.isInteger(parseInt(val)));
      const lastDigitCheck = parseInt(valueArray.at(-1) || '0');
      const valueArrayAsInt = valueArray.map((value) => parseInt(value)).slice(0, 8);

      // ACN length must be 9
      if (valueArray.length !== 9) {
        return false; // Msg too short
      }

      const numberSum = valueArrayAsInt.reduce((acc, val, idx) => {
        return acc + val * ACN_IDX_WEIGHTING[idx];
      }, 0);

      const valueRemainder = numberSum % 10;
      const remainderCompliment = 10 - valueRemainder;

      if (remainderCompliment === 10) {
        return 0 === lastDigitCheck;
      }

      return remainderCompliment === lastDigitCheck;
    }
  );
}

Yup.addMethod(Yup.number, ABN_METHOD_NAME, parseABN);
Yup.addMethod(Yup.string, ACN_METHOD_NAME, parseACN);
Yup.addMethod(Yup.string, ARBN_METHOD_NAME, parseACN); // Same formula as ACN
Yup.addMethod(Yup.string, ARSN_METHOD_NAME, parseACN); // Same formula as ACN

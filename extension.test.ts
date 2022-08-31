import * as Yup from 'yup';

require('./lib/yup-abn.cjs');

describe('ABN', () => {
  test('Detects known, valid numbers', () => {
    const schema = Yup.number().abn().required();

    expect(schema.isValidSync(51824753556)).toBe(true);
    expect(schema.isValidSync(50110219460)).toBe(true);
    expect(schema.isValidSync(79769424861)).toBe(true);
    expect(schema.isValidSync(63367901336)).toBe(true);
    expect(schema.isValidSync(34602272664)).toBe(true);
    expect(schema.isValidSync(99644068913)).toBe(true);
    expect(schema.isValidSync(36643591119)).toBe(true);
    expect(schema.isValidSync(76659042038)).toBe(true);
    expect(schema.isValidSync(81601798609)).toBe(true);
    expect(schema.isValidSync(72629951766)).toBe(true);
    expect(schema.isValidSync(61215203421)).toBe(true);
    expect(schema.isValidSync(58630144375)).toBe(true);
    expect(schema.isValidSync(31654912035)).toBe(true);
    expect(schema.isValidSync(39134737759)).toBe(true);
    expect(schema.isValidSync(17224685191)).toBe(true);
    expect(schema.isValidSync(56105941526)).toBe(true);
    expect(schema.isValidSync(51144664380)).toBe(true);
    expect(schema.isValidSync(51426424824)).toBe(true);
    expect(schema.isValidSync(21436066341)).toBe(true);
    expect(schema.isValidSync(58615316526)).toBe(true);
    expect(schema.isValidSync(11117617053)).toBe(true);
    expect(schema.isValidSync(59121126226)).toBe(true);
    expect(schema.isValidSync(34203184762)).toBe(true);
    expect(schema.isValidSync(38236823729)).toBe(true);
    expect(schema.isValidSync(87801276726)).toBe(true);
    expect(schema.isValidSync(95516914852)).toBe(true);
    expect(schema.isValidSync(30085635601)).toBe(true);
    expect(schema.isValidSync(82639971074)).toBe(true);
    expect(schema.isValidSync(45639982200)).toBe(true);
    expect(schema.isValidSync(93087909500)).toBe(true);
    expect(schema.isValidSync(30085635601)).toBe(true);
    expect(schema.isValidSync(25655962664)).toBe(true);
    expect(schema.isValidSync(19406845079)).toBe(true);
  });

  test('Detects invalid numbers', () => {
    const schema = Yup.number().abn().required();

    expect(schema.isValidSync(11111111111)).toBe(false);
    expect(schema.isValidSync(40110219460)).toBe(false);
    expect(schema.isValidSync(30085635602)).toBe(false);
    expect(schema.isValidSync(19406545079)).toBe(false);
    expect(schema.isValidSync(87801276722)).toBe(false);
    expect(schema.isValidSync(25656962664)).toBe(false);
    expect(schema.isValidSync(1234)).toBe(false);
  });
});

describe('ACN, ARBN & ARSN', () => {
  test('Detects known, valid numbers', () => {
    const schema = Yup.string().acn().required();

    expect(schema.isValidSync('000 000 019')).toBe(true);
    expect(schema.isValidSync('000 250 000')).toBe(true);
    expect(schema.isValidSync('000000019')).toBe(true);
    expect(schema.isValidSync('000250000')).toBe(true);
    expect(schema.isValidSync('000500005')).toBe(true);
    expect(schema.isValidSync('000750005')).toBe(true);
    expect(schema.isValidSync('001000004')).toBe(true);
    expect(schema.isValidSync('001250004')).toBe(true);
    expect(schema.isValidSync('001500009')).toBe(true);
    expect(schema.isValidSync('001749999')).toBe(true);
    expect(schema.isValidSync('001999999')).toBe(true);
    expect(schema.isValidSync('002249998')).toBe(true);
    expect(schema.isValidSync('002499998')).toBe(true);
    expect(schema.isValidSync('002749993')).toBe(true);
    expect(schema.isValidSync('002999993')).toBe(true);
    expect(schema.isValidSync('003249992')).toBe(true);
    expect(schema.isValidSync('003499992')).toBe(true);
    expect(schema.isValidSync('003749988')).toBe(true);
    expect(schema.isValidSync('003999988')).toBe(true);
    expect(schema.isValidSync('004249987')).toBe(true);
    expect(schema.isValidSync('004499987')).toBe(true);
    expect(schema.isValidSync('004749982')).toBe(true);
    expect(schema.isValidSync('004999982')).toBe(true);
    expect(schema.isValidSync('005249981')).toBe(true);
    expect(schema.isValidSync('005499981')).toBe(true);
    expect(schema.isValidSync('005749986')).toBe(true);
    expect(schema.isValidSync('005999977')).toBe(true);
    expect(schema.isValidSync('006249976')).toBe(true);
    expect(schema.isValidSync('006499976')).toBe(true);
    expect(schema.isValidSync('006749980')).toBe(true);
    expect(schema.isValidSync('006999980')).toBe(true);
    expect(schema.isValidSync('007249989')).toBe(true);
    expect(schema.isValidSync('007499989')).toBe(true);
    expect(schema.isValidSync('007749975')).toBe(true);
    expect(schema.isValidSync('007999975')).toBe(true);
    expect(schema.isValidSync('008249974')).toBe(true);
    expect(schema.isValidSync('008499974')).toBe(true);
    expect(schema.isValidSync('008749979')).toBe(true);
    expect(schema.isValidSync('008999979')).toBe(true);
    expect(schema.isValidSync('009249969')).toBe(true);
    expect(schema.isValidSync('009499969')).toBe(true);
    expect(schema.isValidSync('009749964')).toBe(true);
    expect(schema.isValidSync('009999964')).toBe(true);
    expect(schema.isValidSync('010249966')).toBe(true);
    expect(schema.isValidSync('010499966')).toBe(true);
    expect(schema.isValidSync('010749961')).toBe(true);
  });

  test('Detects invalid numbers', () => {
    const schema = Yup.string().acn().required();

    expect(schema.isValidSync('000000009')).toBe(false);
    expect(schema.isValidSync('0000000')).toBe(false);
    expect(schema.isValidSync('010249965')).toBe(false);
    expect(schema.isValidSync('010499964')).toBe(false);
    expect(schema.isValidSync('010749962')).toBe(false);
  });
});

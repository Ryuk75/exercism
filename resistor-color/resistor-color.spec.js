import { colorCode, COLORS } from './resistor-color';

describe('ResistorColor', () => {
  describe('Color codes', () => {
    describe('Black', () => {
      test('Black lower', () => {
        expect(colorCode('black')).toEqual(0);
      });
      test('Black upper', () => {
        expect(colorCode('Black')).toEqual(0);
      });
    })
    describe('Brown', () => {
      test('Brown lower', () => {
        expect(colorCode('brown')).toEqual(1);
      });
      test('Brown upper', () => {
        expect(colorCode('Brown')).toEqual(1);
      });
    })
    describe('Red', () => {
      test('Red lower', () => {
        expect(colorCode('red')).toEqual(2);
      });
      test('Red upper', () => {
        expect(colorCode('Red')).toEqual(2);
      });
    })
    describe('Orange', () => {
      test('Orange lower', () => {
        expect(colorCode('orange')).toEqual(3);
      });
      test('Orange upper', () => {
        expect(colorCode('Orange')).toEqual(3);
      });
    })
  });

  test('Colors', () => {
    expect(COLORS).toEqual([
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ]);
  });
});

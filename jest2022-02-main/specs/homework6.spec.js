import { describe } from 'eslint/lib/rule-tester/rule-tester';
import { SumM } from '../src/homework6';

describe('Тест функции SumM', () => {
    test('Функция SumM загружается без ошибок', () => {
      expect(SumM).toBeDefined();
      expect(typeof SumM).toBe('function');
    });
    test('Функция SumM считает значения в ассоциативном массиве', () => {
      const scores = {
        Anna: 10,
        Olga: 1,
        Ivan: 5,
        AAA: 23,
        };
      expect(SumM(scores)).toEqual(39);
    });
    test('Функция SumM считает значения в обычном массиве', () => {
      const scores = [
        1, 5, 7, 9
      ];
      expect(SumM(scores)).toEqual(22);
    });
    test('Функция SumM считает только значения', () => {
      const scores = {
        Anna: 10,
        Olga: 1,
        Ivan: 5,
        AAA: 23,
        };
      expect(SumM(scores)).not.toEqual(40);
    });
    test('Функция SumM считает дробные значения', () => {
      const scores = {
        Anna: 1.1,
        Olga: 2.2,
        Ivan: 3.3,
        };
      expect(SumM(scores)).toEqual(6.6);
    });
  });
  
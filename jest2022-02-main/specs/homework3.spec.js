import { describe } from 'eslint/lib/rule-tester/rule-tester';
import { fullTrim, nameIsValid } from '../src/homework3';

describe('Здесь могла бы быть ваша реклама', () => {
  /**
   * Допишите несколько unit тестов для функции (вспоминаем тест-дизайн),
   * которая удаляет пробелы и табуляторы в начале и конце строки.
   */
  test('Функция fullTrim загружается без ошибок', () => {
    expect(fullTrim).toBeDefined();
    expect(typeof fullTrim).toBe('function');
  });
  test('Проверяем тримминг для пробела в начале слова', () => {
    expect(fullTrim(' Это домашка')).toEqual('Это домашка');
  });
  test('Проверяем тримминг для пробела в конце слова', () => {
    expect(fullTrim('Это домашка ')).toEqual('Это домашка');
  });
  test('Проверяем тримминг для пробела в конце и начале слова', () => {
    expect(fullTrim(' Это домашка ')).toEqual('Это домашка');
  });
  test('Проверяем тримминг для нескольких пробелов в конце и начале слова', () => {
    expect(fullTrim('     Это домашка    ')).toEqual('Это домашка');
  });
  test('Проверяем тримминг для пробела между словами', () => {
    expect(fullTrim('Это  домашка')).not.toEqual('Это домашка');
  });
  test('Проверяем тримминг для пробела между словами', () => {
    expect(fullTrim('Этодомашка')).not.toEqual('Это домашка');
  });

  /**
   * Напишите параметризированный unit (describe.each`table`) тест для функции,
   * которая проверяет валидность кличек котиков.
   * Кличка считается валидной, если она соответствует следующим условиям:
   * 1) Кличка содержит минимум два символа;
   * 2) Кличка не пустая;
   * 3) Кличка не содержит пробелов.

   Обратите внимание, в примере приведен обычный тест.
   Параметризированный тест - https://jestjs.io/docs/en/api#testeachtablename-fn-timeout
   */
  test('Функция nameIsValid загружается без ошибок', () => {
    expect(nameIsValid).toBeDefined();
    expect(typeof nameIsValid).toBe('function');
  });

  test('Передать валидную кличку', () => {
    expect(nameIsValid('Имя')).toEqual(true);
  });
  describe.each`
    n               |  expected
    ${'Бобик'}      |  ${true}
    ${'Боб'}        |  ${true}
    ${'Бо'}         |  ${true}
    ${'123'}        |  ${true}
    ${'Б'}          |  ${false}
    ${'Боб бик'}    |  ${false}
    ${' '}          |  ${false} 
    ${' Бобик '}    |  ${false}
    `
    ('Параметризированный тест', ({n, expected}) => {
      test(`Проверка валидности клички ${n}`, () => {
        expect(nameIsValid(n)).toEqual(expected);
      })
    })
});

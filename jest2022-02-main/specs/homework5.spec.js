import { only } from 'eslint/lib/rule-tester/rule-tester';
import fetch from 'node-fetch';

describe('Отправляем http запросы', () => {
    const URL = 'https://airportgap.dev-tester.com/';
    test('GET /airports',async () => {
        const path = 'api/airports';
        const response = await fetch(URL + path, { method: 'GET', Authorization: 'Bearer token=h88WMsyeM7mJ2TiBkm7uhKRz'});
      expect(response.status).toEqual(200);
    });

    test('GET /airports/:id', async () => {
      const path = 'api/airports/?';
      const params = new URLSearchParams(
        {
          id: "JFK",
        },
      );
      const response = await fetch(URL + path + params, { method: 'GET', headers: {Accept: 'application/json',  Authorization: 'Bearer token=h88WMsyeM7mJ2TiBkm7uhKRz'}});
      expect(response.status).toEqual(200);
    });

    test('POST /airports/distance', async () => {
      const path = 'api/airports/distance/?';
      const params = new URLSearchParams(
        {
          from: "KIX",
          to: "JFK",
        }
      );
      const response = await fetch(URL + path + params, { method: 'POST', headers: {Accept: 'application/json', Authorization: 'Bearer token=h88WMsyeM7mJ2TiBkm7uhKRz'}});
      expect(response.status).toEqual(200);
    });

    test('POST /tokens', async () => {
      const path = 'api/tokens/?';
      const params = new URLSearchParams(
        {
          email: 'sssyrc@gmail.com',
          password: 'lord22314',
        }
      );
      const response = await fetch(URL + path + params, { method: 'POST', headers: {Accept: 'application/json', Authorization: 'Bearer token=h88WMsyeM7mJ2TiBkm7uhKRz'}, body: JSON.stringify(params)});
      expect(response.status).toEqual(200);
    });

    test.skip('POST /favorites', async () => {
      const path = 'api/favorites/?';
      const params = new URLSearchParams(
        {
          airport_id: 'HLG',
          note: 'AAdd',
        }
      );
      const response = await fetch(URL + path + params, { method: 'POST', headers: {Accept: 'application/json', Authorization: 'Bearer token=h88WMsyeM7mJ2TiBkm7uhKRz'}, body: JSON.stringify(params)});
      expect(response.status).toEqual(201);
    });

    test.skip('PATCH /favorites/:id', async () => {
      const path = 'api/favorites/';
      const airport_id = "KIX";
      const params =
        {
          note: 'AAAAAAAAAA'
        };
      const response = await fetch(URL + path + airport_id, { method: 'PATCH', headers: {Accept: 'application/json', Authorization: 'Bearer token=h88WMsyeM7mJ2TiBkm7uhKRz'}, body: JSON.stringify(params)});
      expect(response.status).toEqual(200);
    });
});


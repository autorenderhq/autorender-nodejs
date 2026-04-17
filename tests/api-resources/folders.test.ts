// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Autorender from '@autorender/sdk';

const client = new Autorender({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource folders', () => {
  test('create: only required params', async () => {
    const responsePromise = client.folders.create({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.folders.create({ name: 'name', parent_folder_no: 'parent_folder_no' });
  });

  test('list', async () => {
    const responsePromise = client.folders.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.folders.list({ parent_folder_no: 'sD1LvqoDzG' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Autorender.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.folders.delete('my8JeLg4tr');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('rename: only required params', async () => {
    const responsePromise = client.folders.rename('53855hxPoq', { name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('rename: required and optional params', async () => {
    const response = await client.folders.rename('53855hxPoq', { name: 'name' });
  });
});

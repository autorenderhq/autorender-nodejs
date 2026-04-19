// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Autorender from '@autorender/nodejs';

const client = new Autorender({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource folders', () => {
  test('create: only required params', async () => {
    const responsePromise = client.folders.create({ folder_name: 'folder_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.folders.create({ folder_name: 'folder_name', path: 'path' });
  });

  test('delete', async () => {
    const responsePromise = client.folders.delete('folderNo');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('rename: only required params', async () => {
    const responsePromise = client.folders.rename('folderNo', { name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('rename: required and optional params', async () => {
    const response = await client.folders.rename('folderNo', { name: 'name' });
  });
});

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Autorender, { toFile } from '@autorender/nodejs';

const client = new Autorender({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource uploads', () => {
  test('create: only required params', async () => {
    const responsePromise = client.uploads.create({
      file: await toFile(Buffer.from('Example data'), 'README.md'),
      file_name: 'file_name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.uploads.create({
      file: await toFile(Buffer.from('Example data'), 'README.md'),
      file_name: 'file_name',
      custom_id: 'custom_id',
      folder: 'folder',
      metadata: 'metadata',
      random_prefix: 'random_prefix',
      tags: 'tags',
      transform: 'transform',
    });
  });
});

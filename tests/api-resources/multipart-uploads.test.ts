// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Autorender from '@autorender/nodejs';

const client = new Autorender({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource multipartUploads', () => {
  test('complete: only required params', async () => {
    const responsePromise = client.multipartUploads.complete({ session_id: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('complete: required and optional params', async () => {
    const response = await client.multipartUploads.complete({ session_id: 'x', uuid: 'uuid' });
  });

  test('start: only required params', async () => {
    const responsePromise = client.multipartUploads.start({
      file_name: 'x',
      format: 'x',
      size: 1,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('start: required and optional params', async () => {
    const response = await client.multipartUploads.start({
      file_name: 'x',
      format: 'x',
      size: 1,
      custom_id: 'custom_id',
      folder: 'folder',
      metadata: { foo: 'bar' },
      random_prefix: true,
      tags: ['string'],
      ttl_seconds: 1,
    });
  });
});

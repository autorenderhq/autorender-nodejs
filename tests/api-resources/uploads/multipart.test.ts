// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Autorender, { toFile } from '@autorender/sdk';

const client = new Autorender({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource multipart', () => {
  test('complete: only required params', async () => {
    const responsePromise = client.uploads.multipart.complete({ session_id: 'session_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('complete: required and optional params', async () => {
    const response = await client.uploads.multipart.complete({ session_id: 'session_id' });
  });

  test('start: only required params', async () => {
    const responsePromise = client.uploads.multipart.start({
      file_name: 'file_name',
      format: 'format',
      size: 0,
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
    const response = await client.uploads.multipart.start({
      file_name: 'file_name',
      format: 'format',
      size: 0,
      custom_id: 'custom_id',
      folder: 'folder',
      metadata: { foo: 'bar' },
      random_prefix: true,
      tags: ['string'],
      ttl_seconds: 0,
    });
  });

  test('uploadPart', async () => {
    const responsePromise = client.uploads.multipart.uploadPart(
      await toFile(Buffer.from('Example data'), 'README.md'),
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});

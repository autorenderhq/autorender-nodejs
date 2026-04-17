// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Autorender, { toFile } from '@autorender/sdk';

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
      webhook_url: 'webhook_url',
    });
  });

  test('createFromURL: only required params', async () => {
    const responsePromise = client.uploads.createFromURL({ remote_url: 'remote_url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createFromURL: required and optional params', async () => {
    const response = await client.uploads.createFromURL({
      remote_url: 'remote_url',
      custom_id: 'custom_id',
      file_name: 'file_name',
      folder: 'folder',
      metadata: 'metadata',
      random_prefix: 'random_prefix',
      tags: 'tags',
      transform: 'transform',
      webhook_url: 'webhook_url',
    });
  });

  test('createWithToken', async () => {
    const responsePromise = client.uploads.createWithToken(
      'up_tok_01JHD8X4BX3HQM8NFMD9ZCQ9QN',
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

  test('generateToken: only required params', async () => {
    const responsePromise = client.uploads.generateToken({ file_name: 'avatar.jpg' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generateToken: required and optional params', async () => {
    const response = await client.uploads.generateToken({
      file_name: 'avatar.jpg',
      allow_override: {
        folder: true,
        tags: true,
        transform: true,
      },
      custom_id: 'custom_id',
      folder: 'user-uploads/avatars',
      max_file_size: 5242880,
      metadata: { foo: 'bar' },
      random_prefix: true,
      tags: ['string'],
      transform: 'w_400,h_400,fit_cover',
      ttl_seconds: 900,
    });
  });
});

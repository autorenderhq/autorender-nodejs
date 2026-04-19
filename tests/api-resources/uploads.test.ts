// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Autorender, { toFile } from '@autorender/nodejs';

const client = new Autorender({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource uploads', () => {
  test('create: only required params', async () => {
    const responsePromise = client.uploads.create({
      file: await toFile(Buffer.from('Example data'), 'README.md'),
      file_name: 'product.jpg',
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
      file_name: 'product.jpg',
      custom_id: 'sku123',
      folder: 'products/sku123',
      metadata: '{"productId":"123"}',
      random_prefix: 'random_prefix',
      tags: 'product,thumbnail',
      transform: 'transform',
      webhook_url: 'webhook_url',
    });
  });

  test('createFromURL: only required params', async () => {
    const responsePromise = client.uploads.createFromURL({ remote_url: 'https://example.com' });
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
      remote_url: 'https://example.com',
      custom_id: 'custom_id',
      file_name: 'file_name',
      folder: 'folder',
      metadata: 'metadata',
      random_prefix: 'random_prefix',
      tags: 'tags',
      webhook_url: 'https://example.com',
    });
  });
});

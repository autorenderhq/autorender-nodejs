// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';

/**
 * Upload endpoints (API key required)
 */
export class Uploads extends APIResource {
  /**
   * Upload a file from your backend server using multipart/form-data.
   *
   * @example
   * ```ts
   * const upload = await client.uploads.create({
   *   file: fs.createReadStream('path/to/file'),
   *   file_name: 'product.jpg',
   * });
   * ```
   */
  create(body: UploadCreateParams, options?: RequestOptions): APIPromise<UploadCreateResponse> {
    return this._client.post(
      '/api/v1/uploads',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Download a file from a remote URL and store it in AutoRender.
   *
   * @example
   * ```ts
   * const response = await client.uploads.createFromURL({
   *   remote_url: 'https://example.com',
   * });
   * ```
   */
  createFromURL(
    body: UploadCreateFromURLParams,
    options?: RequestOptions,
  ): APIPromise<UploadCreateFromURLResponse> {
    return this._client.post('/api/v1/uploads/remote', { body, ...options });
  }
}

/**
 * Upload created
 */
export interface UploadCreateResponse {
  id: string;

  created_at: string;

  custom_id: string | null;

  extension: string;

  file_no: string;

  folder_no: string | null;

  height: number | null;

  is_duplicate: boolean;

  metadata: { [key: string]: unknown } | null;

  mime_type: string;

  name: string;

  path: string;

  size: number;

  tags: Array<string>;

  thumbnail: string;

  upload_source: string;

  url: string;

  width: number | null;

  workspace_id: string;

  format?: string;

  hash?: string;

  is_private?: boolean;
}

/**
 * Upload created
 */
export interface UploadCreateFromURLResponse {
  id: string;

  created_at: string;

  custom_id: string | null;

  extension: string;

  file_no: string;

  folder_no: string | null;

  height: number | null;

  is_duplicate: boolean;

  metadata: { [key: string]: unknown } | null;

  mime_type: string;

  name: string;

  path: string;

  size: number;

  tags: Array<string>;

  thumbnail: string;

  upload_source: string;

  url: string;

  width: number | null;

  workspace_id: string;

  format?: string;

  hash?: string;

  is_private?: boolean;
}

export interface UploadCreateParams {
  /**
   * File to upload.
   */
  file: Uploadable;

  /**
   * File name (e.g. product.jpg)
   */
  file_name: string;

  /**
   * Custom identifier
   */
  custom_id?: string;

  /**
   * Optional folder path
   */
  folder?: string;

  /**
   * JSON string of metadata
   */
  metadata?: string;

  /**
   * true/false to append random suffix
   */
  random_prefix?: string;

  /**
   * Comma-separated tags
   */
  tags?: string;

  /**
   * Transform string (w_300,h_300,c_crop,...)
   */
  transform?: string;

  /**
   * URL to notify on success
   */
  webhook_url?: string;
}

export interface UploadCreateFromURLParams {
  /**
   * HTTP/HTTPS URL to fetch
   */
  remote_url: string;

  custom_id?: string;

  /**
   * Override file name
   */
  file_name?: string;

  /**
   * Destination folder path
   */
  folder?: string;

  /**
   * JSON string of metadata object
   */
  metadata?: string;

  /**
   * true/false to append random suffix
   */
  random_prefix?: string;

  /**
   * Comma-separated tags
   */
  tags?: string;

  webhook_url?: string;
}

export declare namespace Uploads {
  export {
    type UploadCreateResponse as UploadCreateResponse,
    type UploadCreateFromURLResponse as UploadCreateFromURLResponse,
    type UploadCreateParams as UploadCreateParams,
    type UploadCreateFromURLParams as UploadCreateFromURLParams,
  };
}

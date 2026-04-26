// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

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
    return this._client.post('/api/v1/uploads', multipartFormRequestOptions({ body, ...options }, this._client));
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
  createFromURL(body: UploadCreateFromURLParams, options?: RequestOptions): APIPromise<UploadCreateFromURLResponse> {
    return this._client.post('/api/v1/uploads/remote', { body, ...options });
  }

  /**
   * Generate a short-lived token for direct browser uploads. No file is created at
   * this stage.
   *
   * @example
   * ```ts
   * const response = await client.uploads.generateToken({
   *   file_name: 'file_name',
   * });
   * ```
   */
  generateToken(body: UploadGenerateTokenParams, options?: RequestOptions): APIPromise<UploadGenerateTokenResponse> {
    return this._client.post('/api/v1/generate-token', { body, ...options });
  }

  /**
   * Upload a file directly from the browser using a token from /generate-token. Send
   * the raw file as binary in the request body.
   *
   * @example
   * ```ts
   * const response = await client.uploads.uploadWithToken(
   *   'token',
   *   fs.createReadStream('path/to/file'),
   * );
   * ```
   */
  uploadWithToken(token: string, file: Uploadable, options?: RequestOptions): APIPromise<UploadUploadWithTokenResponse> {
    return this._client.post(path`/api/v1/uploads/${token}`, { body: file, ...options, headers: buildHeaders([{'Content-Type': 'application/octet-stream'}, options?.headers]) });
  }
}

/**
 * Upload created
 */
export interface UploadCreateResponse {
  id: string;

  created_at: string;

  custom_id: string | null;

  file_no: string;

  folder_no: string | null;

  height: number | null;

  is_duplicate: boolean;

  is_private: boolean;

  metadata: { [key: string]: unknown } | null;

  mime_type: string;

  name: string;

  path: string;

  size: number;

  tags: Array<string>;

  upload_source: string;

  url: string;

  width: number | null;

  workspace_id: string;

  format?: string;

  hash?: string;
}

/**
 * Upload created
 */
export interface UploadCreateFromURLResponse {
  id: string;

  created_at: string;

  custom_id: string | null;

  file_no: string;

  folder_no: string | null;

  height: number | null;

  is_duplicate: boolean;

  is_private: boolean;

  metadata: { [key: string]: unknown } | null;

  mime_type: string;

  name: string;

  path: string;

  size: number;

  tags: Array<string>;

  upload_source: string;

  url: string;

  width: number | null;

  workspace_id: string;

  format?: string;

  hash?: string;
}

/**
 * Token generated
 */
export interface UploadGenerateTokenResponse {
  token: string;

  expire_at: number;

  policy: UploadGenerateTokenResponse.Policy;

  public_key: string;

  signature: string;

  workspace_id: string;
}

export namespace UploadGenerateTokenResponse {
  export interface Policy {
    allow_override: Policy.AllowOverride;

    folder: string;

    max_file_size: number;

    tags: Array<string>;
  }

  export namespace Policy {
    export interface AllowOverride {
      folder?: boolean;

      tags?: boolean;
    }
  }
}

/**
 * Upload created
 */
export interface UploadUploadWithTokenResponse {
  id: string;

  created_at: string;

  custom_id: string | null;

  file_no: string;

  folder_no: string | null;

  height: number | null;

  is_duplicate: boolean;

  is_private: boolean;

  metadata: { [key: string]: unknown } | null;

  mime_type: string;

  name: string;

  path: string;

  size: number;

  tags: Array<string>;

  upload_source: string;

  url: string;

  width: number | null;

  workspace_id: string;

  format?: string;

  hash?: string;
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

export interface UploadGenerateTokenParams {
  /**
   * File name for the uploaded file (e.g., avatar.jpg)
   */
  file_name: string;

  allow_override?: UploadGenerateTokenParams.AllowOverride;

  custom_id?: string;

  /**
   * Destination folder path
   */
  folder?: string;

  /**
   * Max file size in bytes
   */
  max_file_size?: number;

  metadata?: { [key: string]: unknown };

  random_prefix?: boolean;

  tags?: Array<string>;

  /**
   * Token lifetime in seconds. Defaults to 300.
   */
  ttl_seconds?: number;
}

export namespace UploadGenerateTokenParams {
  export interface AllowOverride {
    folder?: boolean;

    tags?: boolean;
  }
}

export declare namespace Uploads {
  export {
    type UploadCreateResponse as UploadCreateResponse,
    type UploadCreateFromURLResponse as UploadCreateFromURLResponse,
    type UploadGenerateTokenResponse as UploadGenerateTokenResponse,
    type UploadUploadWithTokenResponse as UploadUploadWithTokenResponse,
    type UploadCreateParams as UploadCreateParams,
    type UploadCreateFromURLParams as UploadCreateFromURLParams,
    type UploadGenerateTokenParams as UploadGenerateTokenParams
  };
}

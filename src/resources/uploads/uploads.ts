// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MultipartAPI from './multipart';
import { Multipart, MultipartCompleteParams, MultipartStartParams, Session } from './multipart';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

/**
 * Upload files to your workspace
 */
export class Uploads extends APIResource {
  multipart: MultipartAPI.Multipart = new MultipartAPI.Multipart(this._client);

  /**
   * Upload a file to your AutoRender workspace with optional transformations, tags,
   * and folder organization
   *
   * @example
   * ```ts
   * const upload = await client.uploads.create({
   *   file: fs.createReadStream('path/to/file'),
   *   file_name: 'file_name',
   * });
   * ```
   */
  create(body: UploadCreateParams, options?: RequestOptions): APIPromise<Upload> {
    return this._client.post(
      '/api/v1/uploads',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Download a file from a remote HTTP/HTTPS URL and store it in your AutoRender
   * workspace. Supports optional transformations and metadata.
   *
   * @example
   * ```ts
   * const upload = await client.uploads.createFromURL({
   *   remote_url: 'remote_url',
   * });
   * ```
   */
  createFromURL(body: UploadCreateFromURLParams, options?: RequestOptions): APIPromise<Upload> {
    return this._client.post('/api/v1/uploads/remote', { body, ...options });
  }

  /**
   * Upload a file directly from a browser or mobile client using a token from POST
   * /api/v1/generate-token. Send raw file bytes as the request body. Filename and
   * upload policy are taken from the token.
   *
   * @example
   * ```ts
   * const upload = await client.uploads.createWithToken(
   *   'up_tok_01JHD8X4BX3HQM8NFMD9ZCQ9QN',
   *   fs.createReadStream('path/to/file'),
   * );
   * ```
   */
  createWithToken(
    token: string,
    body: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    options?: RequestOptions,
  ): APIPromise<Upload> {
    return this._client.post(path`/api/v1/uploads/${token}`, {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/octet-stream' }, options?.headers]),
    });
  }

  /**
   * Generate a short-lived signed token that allows a browser or mobile client to
   * upload directly to AutoRender without exposing your secret API key. The token
   * encodes upload policy (folder, tags, transforms, file size limit). No file
   * record is created until the token is used.
   *
   * @example
   * ```ts
   * const response = await client.uploads.generateToken({
   *   file_name: 'avatar.jpg',
   * });
   * ```
   */
  generateToken(
    body: UploadGenerateTokenParams,
    options?: RequestOptions,
  ): APIPromise<UploadGenerateTokenResponse> {
    return this._client.post('/api/v1/generate-token', { body, ...options });
  }
}

export interface Upload {
  data: UploadData;

  success: boolean;
}

export interface UploadData {
  /**
   * Unique file record ID
   */
  id?: string;

  /**
   * 10-character file number identifier
   */
  file_no?: string;

  /**
   * File size in bytes
   */
  file_size?: number;

  /**
   * File format (e.g., jpeg, png, mp4)
   */
  format?: string;

  /**
   * Image height in pixels
   */
  height?: number | null;

  /**
   * Final filename
   */
  name?: string;

  /**
   * Folder path where the file is stored
   */
  path?: string;

  /**
   * CDN URL to access the file
   */
  url?: string;

  /**
   * Image width in pixels
   */
  width?: number | null;

  /**
   * Workspace identifier
   */
  workspace_no?: string;
}

export interface UploadGenerateTokenResponse {
  token?: string;

  /**
   * Unix timestamp of expiry
   */
  expire_at?: number;

  policy?: UploadGenerateTokenResponse.Policy;

  public_key?: string;

  signature?: string;

  workspace_id?: string;
}

export namespace UploadGenerateTokenResponse {
  export interface Policy {
    allow_override?: Policy.AllowOverride;

    folder?: string;

    max_file_size?: number;

    tags?: Array<string>;

    transform?: string | null;
  }

  export namespace Policy {
    export interface AllowOverride {
      folder?: boolean;

      tags?: boolean;

      transform?: boolean;
    }
  }
}

export interface UploadCreateParams {
  /**
   * The file to upload (binary data)
   */
  file: Uploadable;

  /**
   * File name for the uploaded file (e.g., my-image.jpg)
   */
  file_name: string;

  /**
   * Custom identifier for the file
   */
  custom_id?: string;

  /**
   * Folder path where the file will be stored (e.g., products/sku123)
   */
  folder?: string;

  /**
   * JSON string for custom metadata (e.g., {"productId": "123"})
   */
  metadata?: string;

  /**
   * Set to "true" to add a random suffix to the filename
   */
  random_prefix?: string;

  /**
   * Comma-separated tags (e.g., product,thumbnail)
   */
  tags?: string;

  /**
   * Image transformation string (e.g., w_800,h_600,q_90)
   */
  transform?: string;

  /**
   * URL to receive a webhook notification when the upload completes
   */
  webhook_url?: string;
}

export interface UploadCreateFromURLParams {
  /**
   * HTTP or HTTPS URL of the file to download
   */
  remote_url: string;

  /**
   * Custom identifier for the file
   */
  custom_id?: string;

  /**
   * Override filename. Defaults to filename from URL.
   */
  file_name?: string;

  /**
   * Destination folder path
   */
  folder?: string;

  /**
   * JSON string of custom metadata
   */
  metadata?: string;

  /**
   * Set to "true" to add a random suffix
   */
  random_prefix?: string;

  /**
   * Comma-separated tags
   */
  tags?: string;

  /**
   * Transformation string applied after download
   */
  transform?: string;

  /**
   * URL to receive a webhook notification on completion
   */
  webhook_url?: string;
}

export interface UploadGenerateTokenParams {
  /**
   * Filename for the upload (e.g., avatar.jpg)
   */
  file_name: string;

  /**
   * Which policy fields the uploader may override
   */
  allow_override?: UploadGenerateTokenParams.AllowOverride;

  /**
   * Custom identifier for the file
   */
  custom_id?: string;

  /**
   * Destination folder path
   */
  folder?: string;

  /**
   * Maximum allowed file size in bytes
   */
  max_file_size?: number;

  /**
   * Custom metadata to attach
   */
  metadata?: { [key: string]: unknown };

  /**
   * Add a random prefix to the filename
   */
  random_prefix?: boolean;

  /**
   * Tags to apply to the uploaded file
   */
  tags?: Array<string>;

  /**
   * Transformation string applied on upload
   */
  transform?: string;

  /**
   * Token lifetime in seconds (default: 300)
   */
  ttl_seconds?: number;
}

export namespace UploadGenerateTokenParams {
  /**
   * Which policy fields the uploader may override
   */
  export interface AllowOverride {
    folder?: boolean;

    tags?: boolean;

    transform?: boolean;
  }
}

Uploads.Multipart = Multipart;

export declare namespace Uploads {
  export {
    type Upload as Upload,
    type UploadData as UploadData,
    type UploadGenerateTokenResponse as UploadGenerateTokenResponse,
    type UploadCreateParams as UploadCreateParams,
    type UploadCreateFromURLParams as UploadCreateFromURLParams,
    type UploadGenerateTokenParams as UploadGenerateTokenParams,
  };

  export {
    Multipart as Multipart,
    type Session as Session,
    type MultipartCompleteParams as MultipartCompleteParams,
    type MultipartStartParams as MultipartStartParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UploadsAPI from './uploads';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * Large file uploads via multipart
 */
export class Multipart extends APIResource {
  /**
   * Finalize a multipart upload after all parts have been uploaded. Assembles the
   * parts and creates the file record.
   *
   * @example
   * ```ts
   * const upload = await client.uploads.multipart.complete({
   *   session_id: 'session_id',
   * });
   * ```
   */
  complete(body: MultipartCompleteParams, options?: RequestOptions): APIPromise<UploadsAPI.Upload> {
    return this._client.post('/api/v1/multipart/complete', { body, ...options });
  }

  /**
   * Initiate a multipart upload session for large files. Returns presigned PUT URLs
   * for each part. Upload each part to its URL in order, then call POST
   * /api/v1/multipart/complete.
   *
   * @example
   * ```ts
   * const session = await client.uploads.multipart.start({
   *   file_name: 'file_name',
   *   format: 'format',
   *   size: 0,
   * });
   * ```
   */
  start(body: MultipartStartParams, options?: RequestOptions): APIPromise<Session> {
    return this._client.post('/api/v1/multipart/start', { body, ...options });
  }

  /**
   * Upload a single part using one of the presigned URLs from POST
   * /api/v1/multipart/start. Send raw bytes directly — do not include the AutoRender
   * Authorization header, as auth is embedded in the presigned URL.
   *
   * @example
   * ```ts
   * await client.uploads.multipart.uploadPart(
   *   fs.createReadStream('path/to/file'),
   * );
   * ```
   */
  uploadPart(
    body: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put('/api/v1/multipart/parts', {
      body: body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }
}

export interface Session {
  /**
   * Part size in bytes
   */
  part_size?: number;

  /**
   * Presigned PUT URLs in order, one per part
   */
  parts?: Array<string>;

  /**
   * Session UUID; required for the complete call
   */
  session_id?: string;
}

export interface MultipartCompleteParams {
  /**
   * Session ID from POST /api/v1/multipart/start
   */
  session_id: string;
}

export interface MultipartStartParams {
  /**
   * Original filename (e.g., big-video.mp4)
   */
  file_name: string;

  /**
   * MIME type (e.g., video/mp4, image/jpeg)
   */
  format: string;

  /**
   * Total file size in bytes
   */
  size: number;

  custom_id?: string;

  /**
   * Destination folder path
   */
  folder?: string;

  metadata?: { [key: string]: unknown };

  random_prefix?: boolean;

  tags?: Array<string>;

  /**
   * Presigned URL lifetime in seconds
   */
  ttl_seconds?: number;
}

export declare namespace Multipart {
  export {
    type Session as Session,
    type MultipartCompleteParams as MultipartCompleteParams,
    type MultipartStartParams as MultipartStartParams,
  };
}

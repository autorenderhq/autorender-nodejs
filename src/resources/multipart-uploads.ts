// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Upload endpoints (API key required)
 */
export class MultipartUploads extends APIResource {
  /**
   * Finalise a multipart upload session and return the stored file record.
   */
  complete(
    body: MultipartUploadCompleteParams,
    options?: RequestOptions,
  ): APIPromise<MultipartUploadCompleteResponse> {
    return this._client.post('/api/v1/multipart/complete', { body, ...options });
  }

  /**
   * Initialise a multipart upload session and receive pre-signed part URLs.
   */
  start(
    body: MultipartUploadStartParams,
    options?: RequestOptions,
  ): APIPromise<MultipartUploadStartResponse> {
    return this._client.post('/api/v1/multipart/start', { body, ...options });
  }
}

/**
 * Upload completed
 */
export interface MultipartUploadCompleteResponse {
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
 * Session created
 */
export interface MultipartUploadStartResponse {
  /**
   * Unix timestamp when the session expires
   */
  expire_at: number;

  min_part_size: number;

  part_size: number;

  /**
   * Pre-signed S3 upload URLs, one per part
   */
  parts: Array<string>;

  policy: MultipartUploadStartResponse.Policy;

  public_key: string;

  session_id: string;

  uuid: string;

  workspace_id: string;
}

export namespace MultipartUploadStartResponse {
  export interface Policy {
    folder: string;

    format: string;

    size: number;

    tags: Array<string>;
  }
}

export interface MultipartUploadCompleteParams {
  session_id: string;

  uuid?: string;
}

export interface MultipartUploadStartParams {
  file_name: string;

  format: string;

  size: number;

  custom_id?: string;

  folder?: string;

  metadata?: { [key: string]: unknown };

  random_prefix?: boolean;

  tags?: Array<string> | string;

  ttl_seconds?: number;
}

export declare namespace MultipartUploads {
  export {
    type MultipartUploadCompleteResponse as MultipartUploadCompleteResponse,
    type MultipartUploadStartResponse as MultipartUploadStartResponse,
    type MultipartUploadCompleteParams as MultipartUploadCompleteParams,
    type MultipartUploadStartParams as MultipartUploadStartParams,
  };
}

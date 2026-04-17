// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';

export class Uploads extends APIResource {
  /**
   * Upload a file to your AutoRender workspace with optional transformations, tags,
   * and folder organization
   */
  create(body: UploadCreateParams, options?: RequestOptions): APIPromise<Upload> {
    return this._client.post(
      '/api/v1/uploads',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface Upload {
  data: UploadData;

  /**
   * Indicates if the upload was successful
   */
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
   * File size in bytes (after processing)
   */
  file_size?: number;

  /**
   * File format/extension (e.g., jpg, png, webp)
   */
  format?: string;

  /**
   * Image height in pixels (null for non-image files)
   */
  height?: number | null;

  /**
   * Final filename (may include random suffix if requested)
   */
  name?: string;

  /**
   * Folder path where the file is stored
   */
  path?: string;

  /**
   * Full CDN URL to access the uploaded file
   */
  url?: string;

  /**
   * Image width in pixels (null for non-image files)
   */
  width?: number | null;

  /**
   * Workspace identifier
   */
  workspace_no?: string;
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
   * Folder path where the file will be stored (e.g., uploads/my-folder)
   */
  folder?: string;

  /**
   * JSON string for custom metadata (e.g., {"key": "value"})
   */
  metadata?: string;

  /**
   * Set to "true" to add a random suffix to filename
   */
  random_prefix?: string;

  /**
   * Comma-separated tags (e.g., tag1,tag2,tag3)
   */
  tags?: string;

  /**
   * Image transformation string (e.g., w_800,h_600,q_90)
   */
  transform?: string;
}

export declare namespace Uploads {
  export {
    type Upload as Upload,
    type UploadData as UploadData,
    type UploadCreateParams as UploadCreateParams,
  };
}

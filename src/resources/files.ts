// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * File management endpoints (API key required)
 */
export class Files extends APIResource {
  /**
   * Get file details
   */
  retrieve(fileNo: string, options?: RequestOptions): APIPromise<FileRetrieveResponse> {
    return this._client.get(path`/api/v1/files/${fileNo}`, options);
  }

  /**
   * Update file tags/metadata
   */
  update(fileNo: string, body: FileUpdateParams, options?: RequestOptions): APIPromise<FileUpdateResponse> {
    return this._client.patch(path`/api/v1/files/${fileNo}`, { body, ...options });
  }

  /**
   * List/search files with pagination, filtering, and sorting.
   */
  list(query: FileListParams | null | undefined = {}, options?: RequestOptions): APIPromise<FileListResponse> {
    return this._client.get('/api/v1/files', { query, ...options });
  }

  /**
   * Delete file
   */
  delete(fileNo: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/files/${fileNo}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  /**
   * Rename file
   */
  rename(fileNo: string, body: FileRenameParams, options?: RequestOptions): APIPromise<FileRenameResponse> {
    return this._client.patch(path`/api/v1/files/${fileNo}/rename`, { body, ...options });
  }
}

/**
 * File details
 */
export interface FileRetrieveResponse {
  data: FileRetrieveResponse.Data;

  success: true;
}

export namespace FileRetrieveResponse {
  export interface Data {
    id: string;

    created_at: string;

    file_no: string;

    folder_name: string | null;

    folder_no: string | null;

    format: string | null;

    height: number | null;

    metadata: { [key: string]: unknown } | null;

    mime_type: string;

    name: string;

    path: string;

    size: number;

    source: string;

    tags: Array<string>;

    updated_at: string | null;

    url: string;

    width: number | null;
  }
}

/**
 * Updated file
 */
export interface FileUpdateResponse {
  data: FileUpdateResponse.Data;

  success: true;
}

export namespace FileUpdateResponse {
  export interface Data {
    id: string;

    created_at: string;

    file_no: string;

    folder_name: string | null;

    folder_no: string | null;

    format: string | null;

    height: number | null;

    metadata: { [key: string]: unknown } | null;

    mime_type: string;

    name: string;

    path: string;

    size: number;

    source: string;

    tags: Array<string>;

    updated_at: string | null;

    url: string;

    width: number | null;
  }
}

/**
 * Files list
 */
export interface FileListResponse {
  is_page_next: boolean;

  items: Array<FileListResponse.Item>;

  limit: number;

  page: number;

  total_count: number;

  total_pages: number;
}

export namespace FileListResponse {
  export interface Item {
    id: string;

    created_at: string;

    file_no: string;

    folder_name: string | null;

    folder_no: string | null;

    format: string | null;

    height: number | null;

    metadata: { [key: string]: unknown } | null;

    mime_type: string;

    name: string;

    path: string;

    size: number;

    source: string;

    tags: Array<string>;

    updated_at: string | null;

    url: string;

    width: number | null;
  }
}

/**
 * Renamed file
 */
export interface FileRenameResponse {
  data: FileRenameResponse.Data;

  success: true;
}

export namespace FileRenameResponse {
  export interface Data {
    id: string;

    created_at: string;

    file_no: string;

    folder_name: string | null;

    folder_no: string | null;

    format: string | null;

    height: number | null;

    metadata: { [key: string]: unknown } | null;

    mime_type: string;

    name: string;

    path: string;

    size: number;

    source: string;

    tags: Array<string>;

    updated_at: string | null;

    url: string;

    width: number | null;
  }
}

export interface FileUpdateParams {
  /**
   * Tags to add to the existing set
   */
  add_tags?: Array<string>;

  /**
   * Metadata to merge into existing metadata
   */
  metadata?: { [key: string]: unknown };

  /**
   * Tags to remove from the existing set
   */
  remove_tags?: Array<string>;
}

export interface FileListParams {
  /**
   * Exact folder number
   */
  folderNo?: string;

  limit?: number;

  /**
   * Partial name match (case-insensitive)
   */
  name?: string;

  page?: number;

  /**
   * Folder prefix (e.g. products/sku123/)
   */
  path?: string;

  sort?: 'created_at_asc' | 'created_at_desc' | 'size_asc' | 'size_desc';

  /**
   * Comma-separated tags
   */
  tags?: string;
}

export interface FileRenameParams {
  /**
   * New file name without extension or path separators
   */
  name: string;
}

export declare namespace Files {
  export {
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileUpdateResponse as FileUpdateResponse,
    type FileListResponse as FileListResponse,
    type FileRenameResponse as FileRenameResponse,
    type FileUpdateParams as FileUpdateParams,
    type FileListParams as FileListParams,
    type FileRenameParams as FileRenameParams
  };
}

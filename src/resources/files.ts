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
   * List/search files with pagination, filtering, and sorting.
   */
  list(
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListResponse> {
    return this._client.get('/api/v1/files', { query, ...options });
  }

  /**
   * Delete file
   */
  delete(fileNo: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/files/${fileNo}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
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
 * Files list
 */
export interface FileListResponse {
  files: Array<FileListResponse.File>;

  meta: FileListResponse.Meta;
}

export namespace FileListResponse {
  export interface File {
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

  export interface Meta {
    hasNext: boolean;

    hasPrev: boolean;

    limit: number;

    page: number;

    total: number;
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

export interface FileListParams {
  /**
   * Filter by folder number
   */
  folder_no?: string;

  limit?: number;

  page?: number;

  /**
   * Partial name match (case-insensitive)
   */
  search?: string;

  sort?: 'name_asc' | 'name_desc' | 'size_asc' | 'size_desc' | 'created_at_asc' | 'created_at_desc';
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
    type FileListResponse as FileListResponse,
    type FileRenameResponse as FileRenameResponse,
    type FileListParams as FileListParams,
    type FileRenameParams as FileRenameParams,
  };
}

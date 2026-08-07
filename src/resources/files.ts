// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePagination, type PagePaginationParams, PagePromise } from '../core/pagination';
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
  ): PagePromise<FileListResponsesPagePagination, FileListResponse> {
    return this._client.getAPIList('/api/v1/files', PagePagination<FileListResponse>, { query, ...options });
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

export type FileListResponsesPagePagination = PagePagination<FileListResponse>;

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

export interface FileListResponse {
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

export interface FileListParams extends PagePaginationParams {
  /**
   * Filter by folder number
   */
  folder_no?: string;

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
    type FileListResponsesPagePagination as FileListResponsesPagePagination,
    type FileListParams as FileListParams,
    type FileRenameParams as FileRenameParams,
  };
}

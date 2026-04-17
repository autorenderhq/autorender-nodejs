// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Files extends APIResource {
  /**
   * Retrieve detailed information about a file by numeric file id (`file_no`).
   *
   * @example
   * ```ts
   * const fileObject = await client.files.retrieve(
   *   '2353377462',
   * );
   * ```
   */
  retrieve(fileNo: string, options?: RequestOptions): APIPromise<FileObject> {
    return this._client.get(path`/api/v1/files/${fileNo}`, options);
  }

  /**
   * Paginated list of files in the workspace. Filter by folder, sort by field and
   * order, and page through results.
   *
   * @example
   * ```ts
   * const files = await client.files.list();
   * ```
   */
  list(
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListResponse> {
    return this._client.get('/api/v1/files', { query, ...options });
  }

  /**
   * Permanently delete a file. No request body is required.
   *
   * @example
   * ```ts
   * const file = await client.files.delete('2338056701');
   * ```
   */
  delete(fileNo: string, options?: RequestOptions): APIPromise<FileDeleteResponse> {
    return this._client.delete(path`/api/v1/files/${fileNo}`, options);
  }

  /**
   * Rename a file. The API may preserve or normalize the file extension (e.g. `demo`
   * → `demo.png`).
   *
   * @example
   * ```ts
   * const response = await client.files.rename('2338045312', {
   *   name: 'demo',
   * });
   * ```
   */
  rename(fileNo: string, body: FileRenameParams, options?: RequestOptions): APIPromise<FileRenameResponse> {
    return this._client.patch(path`/api/v1/files/${fileNo}/rename`, { body, ...options });
  }
}

/**
 * File summary row in list responses
 */
export interface FileListItem {
  created_at?: string;

  /**
   * Asset category, e.g. image
   */
  extension?: string;

  file_no?: string;

  file_size?: number;

  format?: string;

  height?: number | null;

  name?: string;

  /**
   * Relative path / display path
   */
  path?: string;

  /**
   * Thumbnail CDN URL (field name as returned by the API)
   */
  thumbanil?: string;

  url?: string;

  width?: number | null;

  workspace_no?: string;
}

export interface FileObject {
  data?: FileObject.Data;

  success?: boolean;
}

export namespace FileObject {
  export interface Data {
    id?: string;

    asset_key?: string;

    asset_url?: string;

    dimensions?: Data.Dimensions;

    extension?: string;

    file_no?: string;

    folder?: unknown;

    format?: string;

    name?: string;

    path?: string | null;

    /**
     * File size in bytes
     */
    size?: number;

    uploaded_at?: string;

    uploaded_by?: string;

    url?: string;

    workspace?: Data.Workspace;
  }

  export namespace Data {
    export interface Dimensions {
      height?: number;

      width?: number;
    }

    export interface Workspace {
      name?: string;

      workspace_no?: string;
    }
  }
}

export interface FileListResponse {
  files: Array<FileListItem>;

  meta: FileListResponse.Meta;
}

export namespace FileListResponse {
  export interface Meta {
    hasNext: boolean;

    hasPrev: boolean;

    limit: number;

    page: number;

    /**
     * Total matching files
     */
    total: number;
  }
}

export interface FileDeleteResponse {
  message?: string;
}

/**
 * Updated file record after rename
 */
export interface FileRenameResponse {
  id?: string;

  created_at?: string;

  created_by?: string;

  extension?: string;

  file_no?: string;

  file_size?: number;

  folder_id?: string | null;

  format?: string;

  height?: number | null;

  is_active?: boolean;

  is_default?: boolean;

  is_delete?: boolean;

  meta_data?: { [key: string]: unknown };

  name?: string;

  orientation?: string | null;

  original_url?: string | null;

  path?: string | null;

  source?: string;

  transform_string?: string | null;

  updated_at?: string;

  url?: string;

  width?: number | null;

  workspace_id?: string;

  workspace_no?: string;
}

export interface FileListParams {
  /**
   * Restrict results to files in this folder (folder number)
   */
  folder_no?: string;

  /**
   * Items per page
   */
  limit?: number;

  /**
   * Filter by filename (partial match, if supported)
   */
  name?: string;

  /**
   * Page number (1-based)
   */
  page?: number;

  /**
   * Filter by path prefix (if supported)
   */
  path?: string;

  /**
   * Field to sort by
   */
  sort_field?: 'file_size' | 'name' | 'created_at' | 'updated_at';

  /**
   * Sort direction
   */
  sort_order?: 'asc' | 'desc';

  /**
   * Comma-separated tags (if supported)
   */
  tags?: string;
}

export interface FileRenameParams {
  /**
   * New base name; extension may be applied by the server
   */
  name: string;
}

export declare namespace Files {
  export {
    type FileListItem as FileListItem,
    type FileObject as FileObject,
    type FileListResponse as FileListResponse,
    type FileDeleteResponse as FileDeleteResponse,
    type FileRenameResponse as FileRenameResponse,
    type FileListParams as FileListParams,
    type FileRenameParams as FileRenameParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Manage files in your workspace
 */
export class Files extends APIResource {
  /**
   * Retrieve detailed information about a specific file by its file number.
   */
  retrieve(fileNo: string, options?: RequestOptions): APIPromise<File> {
    return this._client.get(path`/api/v1/files/${fileNo}`, options);
  }

  /**
   * Update a file's tags and/or metadata. Tags are merged — add_tags appends,
   * remove_tags removes. Metadata is merged with existing values.
   */
  update(fileNo: string, body: FileUpdateParams, options?: RequestOptions): APIPromise<FileUpdateResponse> {
    return this._client.patch(path`/api/v1/files/${fileNo}`, { body, ...options });
  }

  /**
   * Paginated list of files in the workspace. Filter by folder, path prefix, name,
   * or tags. Sort by various fields.
   */
  list(
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListResponse> {
    return this._client.get('/api/v1/files', { query, ...options });
  }

  /**
   * Permanently delete a file from the workspace.
   */
  delete(fileNo: string, options?: RequestOptions): APIPromise<FileDeleteResponse> {
    return this._client.delete(path`/api/v1/files/${fileNo}`, options);
  }

  /**
   * Rename a file. The server preserves the file extension (e.g., supplying
   * "product" renames to "product.jpg").
   */
  rename(fileNo: string, body: FileRenameParams, options?: RequestOptions): APIPromise<FileRenameResponse> {
    return this._client.patch(path`/api/v1/files/${fileNo}/rename`, { body, ...options });
  }
}

export interface File {
  data?: File.Data;

  success?: boolean;
}

export namespace File {
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

export interface FileListItem {
  created_at?: string;

  extension?: string;

  file_no?: string;

  file_size?: number;

  format?: string;

  height?: number | null;

  name?: string;

  path?: string;

  /**
   * Thumbnail CDN URL
   */
  thumbanil?: string;

  url?: string;

  width?: number | null;

  workspace_no?: string;
}

export interface FileUpdateResponse {
  id?: string;

  created_at?: string;

  extension?: string;

  file_no?: string;

  file_size?: number;

  folder_id?: string | null;

  format?: string;

  height?: number | null;

  meta_data?: { [key: string]: unknown };

  name?: string;

  path?: string | null;

  updated_at?: string;

  url?: string;

  width?: number | null;

  workspace_no?: string;
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

    total: number;
  }
}

export interface FileDeleteResponse {
  message?: string;
}

export interface FileRenameResponse {
  id?: string;

  created_at?: string;

  extension?: string;

  file_no?: string;

  file_size?: number;

  folder_id?: string | null;

  format?: string;

  height?: number | null;

  meta_data?: { [key: string]: unknown };

  name?: string;

  path?: string | null;

  updated_at?: string;

  url?: string;

  width?: number | null;

  workspace_no?: string;
}

export interface FileUpdateParams {
  /**
   * Tags to add
   */
  add_tags?: Array<string>;

  /**
   * Metadata to merge
   */
  metadata?: { [key: string]: unknown };

  /**
   * Tags to remove
   */
  remove_tags?: Array<string>;
}

export interface FileListParams {
  /**
   * Filter to files in this folder
   */
  folder_no?: string;

  /**
   * Items per page
   */
  limit?: number;

  /**
   * Partial filename match (case-insensitive)
   */
  name?: string;

  /**
   * Page number (1-based)
   */
  page?: number;

  /**
   * Filter by path prefix (e.g., products/sku123/)
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
   * Comma-separated tags to filter by
   */
  tags?: string;
}

export interface FileRenameParams {
  /**
   * New base name; extension is preserved by the server
   */
  name: string;
}

export declare namespace Files {
  export {
    type File as File,
    type FileListItem as FileListItem,
    type FileUpdateResponse as FileUpdateResponse,
    type FileListResponse as FileListResponse,
    type FileDeleteResponse as FileDeleteResponse,
    type FileRenameResponse as FileRenameResponse,
    type FileUpdateParams as FileUpdateParams,
    type FileListParams as FileListParams,
    type FileRenameParams as FileRenameParams,
  };
}

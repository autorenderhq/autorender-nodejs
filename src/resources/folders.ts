// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Folders extends APIResource {
  /**
   * Create a folder under an optional parent.
   *
   * @example
   * ```ts
   * const folder = await client.folders.create({
   *   name: 'demo2',
   *   parent_folder_no: 'sD1LvqoDzG',
   * });
   * ```
   */
  create(body: FolderCreateParams, options?: RequestOptions): APIPromise<FolderCreateResponse> {
    return this._client.post('/api/v1/folders', { body, ...options });
  }

  /**
   * List folders under an optional parent. Omit `parent_folder_no` to list
   * root-level folders.
   *
   * @example
   * ```ts
   * const folders = await client.folders.list();
   * ```
   */
  list(
    query: FolderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FolderListResponse> {
    return this._client.get('/api/v1/folders', { query, ...options });
  }

  /**
   * Delete a folder by folder number. No request body required.
   *
   * @example
   * ```ts
   * const folder = await client.folders.delete('my8JeLg4tr');
   * ```
   */
  delete(folderNo: string, options?: RequestOptions): APIPromise<FolderDeleteResponse> {
    return this._client.delete(path`/api/v1/folders/${folderNo}`, options);
  }

  /**
   * Rename a folder by `folder_no`.
   *
   * @example
   * ```ts
   * const folder = await client.folders.rename('53855hxPoq', {
   *   name: 'demo2',
   * });
   * ```
   */
  rename(folderNo: string, body: FolderRenameParams, options?: RequestOptions): APIPromise<Folder> {
    return this._client.post(path`/api/v1/folders/rename/${folderNo}`, { body, ...options });
  }
}

export interface Folder {
  id?: string;

  created_at?: string;

  created_by?: string;

  folder_no?: string;

  is_active?: boolean;

  is_delete?: boolean;

  name?: string;

  parent_folder?: string | null;

  path?: string;

  source?: string;

  updated_at?: string;

  workspace?: Folder.Workspace;

  workspace_id?: string;

  workspace_no?: string;
}

export namespace Folder {
  export interface Workspace {
    workspace_no?: string;
  }
}

export interface FolderListItem {
  created_at?: string;

  folder_no?: string;

  name?: string;

  total_items?: number;

  /**
   * Total size of items in bytes
   */
  total_size?: number;
}

export interface FolderCreateResponse {
  folder_no?: string;

  name?: string;
}

export interface FolderListResponse {
  folders?: Array<FolderListItem>;
}

export interface FolderDeleteResponse {
  message?: string;
}

export interface FolderCreateParams {
  /**
   * Folder display name
   */
  name: string;

  /**
   * Parent folder number; omit or null for root
   */
  parent_folder_no?: string;
}

export interface FolderListParams {
  /**
   * Only return direct children of this folder (folder number)
   */
  parent_folder_no?: string;
}

export interface FolderRenameParams {
  name: string;
}

export declare namespace Folders {
  export {
    type Folder as Folder,
    type FolderListItem as FolderListItem,
    type FolderCreateResponse as FolderCreateResponse,
    type FolderListResponse as FolderListResponse,
    type FolderDeleteResponse as FolderDeleteResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderListParams as FolderListParams,
    type FolderRenameParams as FolderRenameParams,
  };
}

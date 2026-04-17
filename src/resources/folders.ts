// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Manage folder structure
 */
export class Folders extends APIResource {
  /**
   * Create a new folder. Optionally nest it under an existing folder by providing
   * parent_folder_no.
   */
  create(body: FolderCreateParams, options?: RequestOptions): APIPromise<FolderCreateResponse> {
    return this._client.post('/api/v1/folders', { body, ...options });
  }

  /**
   * List folders in the workspace. Omit parent_folder_no to list root-level folders.
   */
  list(
    query: FolderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FolderListResponse> {
    return this._client.get('/api/v1/folders', { query, ...options });
  }

  /**
   * Delete a folder by its folder number.
   */
  delete(folderNo: string, options?: RequestOptions): APIPromise<FolderDeleteResponse> {
    return this._client.delete(path`/api/v1/folders/${folderNo}`, options);
  }

  /**
   * Rename a folder by its folder number.
   */
  rename(folderNo: string, body: FolderRenameParams, options?: RequestOptions): APIPromise<Folder> {
    return this._client.post(path`/api/v1/folders/rename/${folderNo}`, { body, ...options });
  }
}

export interface Folder {
  id?: string;

  created_at?: string;

  folder_no?: string;

  is_active?: boolean;

  is_delete?: boolean;

  name?: string;

  parent_folder?: string | null;

  path?: string;

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
   * Parent folder number; omit for root level
   */
  parent_folder_no?: string;
}

export interface FolderListParams {
  /**
   * Return only direct children of this folder
   */
  parent_folder_no?: string;
}

export interface FolderRenameParams {
  /**
   * New folder name
   */
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

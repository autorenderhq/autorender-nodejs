// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Folder management endpoints (API key required)
 */
export class Folders extends APIResource {
  /**
   * Create folder
   */
  create(body: FolderCreateParams, options?: RequestOptions): APIPromise<FolderCreateResponse> {
    return this._client.post('/api/v1/folders', { body, ...options });
  }

  /**
   * Delete folder
   */
  delete(folderNo: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/folders/${folderNo}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Rename folder
   */
  rename(
    folderNo: string,
    body: FolderRenameParams,
    options?: RequestOptions,
  ): APIPromise<FolderRenameResponse> {
    return this._client.post(path`/api/v1/folders/rename/${folderNo}`, { body, ...options });
  }
}

/**
 * Folder created
 */
export interface FolderCreateResponse {
  id: string;

  created_at: string;

  folder_no: string;

  name: string;

  parent_folder_no: string | null;

  path: string;

  updated_at: string | null;
}

/**
 * Renamed folder
 */
export interface FolderRenameResponse {
  id: string;

  created_at: string;

  folder_no: string;

  name: string;

  parent_folder_no: string | null;

  path: string;

  updated_at: string | null;
}

export interface FolderCreateParams {
  /**
   * Folder name without slashes
   */
  folder_name: string;

  /**
   * Optional parent path, e.g. products/sku123
   */
  path?: string;
}

export interface FolderRenameParams {
  /**
   * New folder name without slashes
   */
  name: string;
}

export declare namespace Folders {
  export {
    type FolderCreateResponse as FolderCreateResponse,
    type FolderRenameResponse as FolderRenameResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderRenameParams as FolderRenameParams,
  };
}

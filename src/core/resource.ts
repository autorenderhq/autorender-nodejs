// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Autorender } from '../client';

export abstract class APIResource {
  protected _client: Autorender;

  constructor(client: Autorender) {
    this._client = client;
  }
}

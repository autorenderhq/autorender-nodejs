// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.uploads.create',
    fullyQualifiedName: 'uploads.create',
    httpMethod: 'post',
    httpPath: '/api/v1/uploads',
  },
  {
    clientCallName: 'client.uploads.createFromURL',
    fullyQualifiedName: 'uploads.createFromURL',
    httpMethod: 'post',
    httpPath: '/api/v1/uploads/remote',
  },
  {
    clientCallName: 'client.files.retrieve',
    fullyQualifiedName: 'files.retrieve',
    httpMethod: 'get',
    httpPath: '/api/v1/files/{fileNo}',
  },
  {
    clientCallName: 'client.files.list',
    fullyQualifiedName: 'files.list',
    httpMethod: 'get',
    httpPath: '/api/v1/files',
  },
  {
    clientCallName: 'client.files.delete',
    fullyQualifiedName: 'files.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/files/{fileNo}',
  },
  {
    clientCallName: 'client.files.rename',
    fullyQualifiedName: 'files.rename',
    httpMethod: 'patch',
    httpPath: '/api/v1/files/{fileNo}/rename',
  },
  {
    clientCallName: 'client.folders.create',
    fullyQualifiedName: 'folders.create',
    httpMethod: 'post',
    httpPath: '/api/v1/folders',
  },
  {
    clientCallName: 'client.folders.list',
    fullyQualifiedName: 'folders.list',
    httpMethod: 'get',
    httpPath: '/api/v1/folders',
  },
  {
    clientCallName: 'client.folders.delete',
    fullyQualifiedName: 'folders.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/folders/{folderNo}',
  },
  {
    clientCallName: 'client.folders.rename',
    fullyQualifiedName: 'folders.rename',
    httpMethod: 'post',
    httpPath: '/api/v1/folders/rename/{folderNo}',
  },
  {
    clientCallName: 'client.multipartUploads.complete',
    fullyQualifiedName: 'multipartUploads.complete',
    httpMethod: 'post',
    httpPath: '/api/v1/multipart/complete',
  },
  {
    clientCallName: 'client.multipartUploads.start',
    fullyQualifiedName: 'multipartUploads.start',
    httpMethod: 'post',
    httpPath: '/api/v1/multipart/start',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'create',
    endpoint: '/api/v1/uploads',
    httpMethod: 'post',
    summary: 'Server-side direct upload',
    description: 'Upload a file from your backend server using multipart/form-data.',
    stainlessPath: '(resource) uploads > (method) create',
    qualified: 'client.uploads.create',
    params: [
      'file: string;',
      'file_name: string;',
      'custom_id?: string;',
      'folder?: string;',
      'metadata?: string;',
      'random_prefix?: string;',
      'tags?: string;',
      'transform?: string;',
      'webhook_url?: string;',
    ],
    response:
      '{ id: string; created_at: string; custom_id: string; extension: string; file_no: string; folder_no: string; height: number; is_duplicate: boolean; metadata: object; mime_type: string; name: string; path: string; size: number; tags: string[]; thumbnail: string; upload_source: string; url: string; width: number; workspace_id: string; format?: string; hash?: string; is_private?: boolean; }',
    markdown:
      "## create\n\n`client.uploads.create(file: string, file_name: string, custom_id?: string, folder?: string, metadata?: string, random_prefix?: string, tags?: string, transform?: string, webhook_url?: string): { id: string; created_at: string; custom_id: string; extension: string; file_no: string; folder_no: string; height: number; is_duplicate: boolean; metadata: object; mime_type: string; name: string; path: string; size: number; tags: string[]; thumbnail: string; upload_source: string; url: string; width: number; workspace_id: string; format?: string; hash?: string; is_private?: boolean; }`\n\n**post** `/api/v1/uploads`\n\nUpload a file from your backend server using multipart/form-data.\n\n### Parameters\n\n- `file: string`\n  File to upload.\n\n- `file_name: string`\n  File name (e.g. product.jpg)\n\n- `custom_id?: string`\n  Custom identifier\n\n- `folder?: string`\n  Optional folder path\n\n- `metadata?: string`\n  JSON string of metadata\n\n- `random_prefix?: string`\n  true/false to append random suffix\n\n- `tags?: string`\n  Comma-separated tags\n\n- `transform?: string`\n  Transform string (w_300,h_300,c_crop,...)\n\n- `webhook_url?: string`\n  URL to notify on success\n\n### Returns\n\n- `{ id: string; created_at: string; custom_id: string; extension: string; file_no: string; folder_no: string; height: number; is_duplicate: boolean; metadata: object; mime_type: string; name: string; path: string; size: number; tags: string[]; thumbnail: string; upload_source: string; url: string; width: number; workspace_id: string; format?: string; hash?: string; is_private?: boolean; }`\n  Upload created\n\n  - `id: string`\n  - `created_at: string`\n  - `custom_id: string`\n  - `extension: string`\n  - `file_no: string`\n  - `folder_no: string`\n  - `height: number`\n  - `is_duplicate: boolean`\n  - `metadata: object`\n  - `mime_type: string`\n  - `name: string`\n  - `path: string`\n  - `size: number`\n  - `tags: string[]`\n  - `thumbnail: string`\n  - `upload_source: string`\n  - `url: string`\n  - `width: number`\n  - `workspace_id: string`\n  - `format?: string`\n  - `hash?: string`\n  - `is_private?: boolean`\n\n### Example\n\n```typescript\nimport Autorender from '@autorender/nodejs';\n\nconst client = new Autorender();\n\nconst upload = await client.uploads.create({ file: fs.createReadStream('path/to/file'), file_name: 'product.jpg' });\n\nconsole.log(upload);\n```",
    perLanguage: {
      typescript: {
        method: 'client.uploads.create',
        example:
          "import fs from 'fs';\nimport Autorender from '@autorender/nodejs';\n\nconst client = new Autorender({\n  apiKey: process.env['AUTORENDER_API_KEY'], // This is the default and can be omitted\n});\n\nconst upload = await client.uploads.create({\n  file: fs.createReadStream('path/to/file'),\n  file_name: 'product.jpg',\n});\n\nconsole.log(upload.id);",
      },
      python: {
        method: 'uploads.create',
        example:
          'import os\nfrom autorender import Autorender\n\nclient = Autorender(\n    api_key=os.environ.get("AUTORENDER_API_KEY"),  # This is the default and can be omitted\n)\nupload = client.uploads.create(\n    file=b"Example data",\n    file_name="product.jpg",\n)\nprint(upload.id)',
      },
      java: {
        method: 'uploads().create',
        example:
          'package io.autorender.example;\n\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\nimport io.autorender.models.uploads.UploadCreateParams;\nimport io.autorender.models.uploads.UploadCreateResponse;\nimport java.io.ByteArrayInputStream;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        AutorenderClient client = AutorenderOkHttpClient.fromEnv();\n\n        UploadCreateParams params = UploadCreateParams.builder()\n            .file(new ByteArrayInputStream("Example data".getBytes()))\n            .fileName("product.jpg")\n            .build();\n        UploadCreateResponse upload = client.uploads().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'uploads().create',
        example:
          'package com.autorenderhq.api.example\n\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\nimport com.autorenderhq.api.models.uploads.UploadCreateParams\nimport com.autorenderhq.api.models.uploads.UploadCreateResponse\nimport java.io.ByteArrayInputStream\n\nfun main() {\n    val client: AutorenderClient = AutorenderOkHttpClient.fromEnv()\n\n    val params: UploadCreateParams = UploadCreateParams.builder()\n        .file("Example data".byteInputStream())\n        .fileName("product.jpg")\n        .build()\n    val upload: UploadCreateResponse = client.uploads().create(params)\n}',
      },
      go: {
        method: 'client.Uploads.New',
        example:
          'package main\n\nimport (\n\t"bytes"\n\t"context"\n\t"fmt"\n\t"io"\n\n\t"github.com/stainless-sdks/autorenderhq-go"\n\t"github.com/stainless-sdks/autorenderhq-go/option"\n)\n\nfunc main() {\n\tclient := autorenderhq.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tupload, err := client.Uploads.New(context.TODO(), autorenderhq.UploadNewParams{\n\t\tFile:     io.Reader(bytes.NewBuffer([]byte("Example data"))),\n\t\tFileName: "product.jpg",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", upload.ID)\n}\n',
      },
      ruby: {
        method: 'uploads.create',
        example:
          'require "autorender"\n\nautorender = Autorender::Client.new(api_key: "My API Key")\n\nupload = autorender.uploads.create(file: StringIO.new("Example data"), file_name: "product.jpg")\n\nputs(upload)',
      },
      cli: {
        method: 'uploads create',
        example:
          "autorenderhq uploads create \\\n  --api-key 'My API Key' \\\n  --file 'Example data' \\\n  --file-name product.jpg",
      },
      php: {
        method: 'uploads->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$upload = $client->uploads->create(\n  file: FileParam::fromString('Example data', filename: uniqid('file-upload-', true)),\n  fileName: 'product.jpg',\n  customID: 'sku123',\n  folder: 'products/sku123',\n  metadata: '{\"productId\":\"123\"}',\n  randomPrefix: 'random_prefix',\n  tags: 'product,thumbnail',\n  transform: 'transform',\n  webhookURL: 'webhook_url',\n);\n\nvar_dump($upload);",
      },
      csharp: {
        method: 'Uploads.Create',
        example:
          'UploadCreateParams parameters = new()\n{\n    File = Encoding.UTF8.GetBytes("Example data"),\n    FileName = "product.jpg",\n};\n\nvar upload = await client.Uploads.Create(parameters);\n\nConsole.WriteLine(upload);',
      },
      http: {
        example:
          'curl https://upload.autorender.io/api/v1/uploads \\\n    -H \'Content-Type: multipart/form-data\' \\\n    -H "x-api-key: $AUTORENDER_API_KEY" \\\n    -F \'file=@/path/to/file\' \\\n    -F file_name=product.jpg \\\n    -F custom_id=sku123 \\\n    -F folder=products/sku123 \\\n    -F metadata=\'{"productId":"123"}\' \\\n    -F tags=product,thumbnail',
      },
    },
  },
  {
    name: 'create_from_url',
    endpoint: '/api/v1/uploads/remote',
    httpMethod: 'post',
    summary: 'Remote URL upload',
    description: 'Download a file from a remote URL and store it in AutoRender.',
    stainlessPath: '(resource) uploads > (method) create_from_url',
    qualified: 'client.uploads.createFromURL',
    params: [
      'remote_url: string;',
      'custom_id?: string;',
      'file_name?: string;',
      'folder?: string;',
      'metadata?: string;',
      'random_prefix?: string;',
      'tags?: string;',
      'webhook_url?: string;',
    ],
    response:
      '{ id: string; created_at: string; custom_id: string; extension: string; file_no: string; folder_no: string; height: number; is_duplicate: boolean; metadata: object; mime_type: string; name: string; path: string; size: number; tags: string[]; thumbnail: string; upload_source: string; url: string; width: number; workspace_id: string; format?: string; hash?: string; is_private?: boolean; }',
    markdown:
      "## create_from_url\n\n`client.uploads.createFromURL(remote_url: string, custom_id?: string, file_name?: string, folder?: string, metadata?: string, random_prefix?: string, tags?: string, webhook_url?: string): { id: string; created_at: string; custom_id: string; extension: string; file_no: string; folder_no: string; height: number; is_duplicate: boolean; metadata: object; mime_type: string; name: string; path: string; size: number; tags: string[]; thumbnail: string; upload_source: string; url: string; width: number; workspace_id: string; format?: string; hash?: string; is_private?: boolean; }`\n\n**post** `/api/v1/uploads/remote`\n\nDownload a file from a remote URL and store it in AutoRender.\n\n### Parameters\n\n- `remote_url: string`\n  HTTP/HTTPS URL to fetch\n\n- `custom_id?: string`\n\n- `file_name?: string`\n  Override file name\n\n- `folder?: string`\n  Destination folder path\n\n- `metadata?: string`\n  JSON string of metadata object\n\n- `random_prefix?: string`\n  true/false to append random suffix\n\n- `tags?: string`\n  Comma-separated tags\n\n- `webhook_url?: string`\n\n### Returns\n\n- `{ id: string; created_at: string; custom_id: string; extension: string; file_no: string; folder_no: string; height: number; is_duplicate: boolean; metadata: object; mime_type: string; name: string; path: string; size: number; tags: string[]; thumbnail: string; upload_source: string; url: string; width: number; workspace_id: string; format?: string; hash?: string; is_private?: boolean; }`\n  Upload created\n\n  - `id: string`\n  - `created_at: string`\n  - `custom_id: string`\n  - `extension: string`\n  - `file_no: string`\n  - `folder_no: string`\n  - `height: number`\n  - `is_duplicate: boolean`\n  - `metadata: object`\n  - `mime_type: string`\n  - `name: string`\n  - `path: string`\n  - `size: number`\n  - `tags: string[]`\n  - `thumbnail: string`\n  - `upload_source: string`\n  - `url: string`\n  - `width: number`\n  - `workspace_id: string`\n  - `format?: string`\n  - `hash?: string`\n  - `is_private?: boolean`\n\n### Example\n\n```typescript\nimport Autorender from '@autorender/nodejs';\n\nconst client = new Autorender();\n\nconst response = await client.uploads.createFromURL({ remote_url: 'https://example.com' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.uploads.createFromURL',
        example:
          "import Autorender from '@autorender/nodejs';\n\nconst client = new Autorender({\n  apiKey: process.env['AUTORENDER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.uploads.createFromURL({ remote_url: 'https://example.com' });\n\nconsole.log(response.id);",
      },
      python: {
        method: 'uploads.create_from_url',
        example:
          'import os\nfrom autorender import Autorender\n\nclient = Autorender(\n    api_key=os.environ.get("AUTORENDER_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.uploads.create_from_url(\n    remote_url="https://example.com",\n)\nprint(response.id)',
      },
      java: {
        method: 'uploads().createFromUrl',
        example:
          'package io.autorender.example;\n\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\nimport io.autorender.models.uploads.UploadCreateFromUrlParams;\nimport io.autorender.models.uploads.UploadCreateFromUrlResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        AutorenderClient client = AutorenderOkHttpClient.fromEnv();\n\n        UploadCreateFromUrlParams params = UploadCreateFromUrlParams.builder()\n            .remoteUrl("https://example.com")\n            .build();\n        UploadCreateFromUrlResponse response = client.uploads().createFromUrl(params);\n    }\n}',
      },
      kotlin: {
        method: 'uploads().createFromUrl',
        example:
          'package com.autorenderhq.api.example\n\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\nimport com.autorenderhq.api.models.uploads.UploadCreateFromUrlParams\nimport com.autorenderhq.api.models.uploads.UploadCreateFromUrlResponse\n\nfun main() {\n    val client: AutorenderClient = AutorenderOkHttpClient.fromEnv()\n\n    val params: UploadCreateFromUrlParams = UploadCreateFromUrlParams.builder()\n        .remoteUrl("https://example.com")\n        .build()\n    val response: UploadCreateFromUrlResponse = client.uploads().createFromUrl(params)\n}',
      },
      go: {
        method: 'client.Uploads.NewFromURL',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/autorenderhq-go"\n\t"github.com/stainless-sdks/autorenderhq-go/option"\n)\n\nfunc main() {\n\tclient := autorenderhq.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Uploads.NewFromURL(context.TODO(), autorenderhq.UploadNewFromURLParams{\n\t\tRemoteURL: "https://example.com",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      ruby: {
        method: 'uploads.create_from_url',
        example:
          'require "autorender"\n\nautorender = Autorender::Client.new(api_key: "My API Key")\n\nresponse = autorender.uploads.create_from_url(remote_url: "https://example.com")\n\nputs(response)',
      },
      cli: {
        method: 'uploads create_from_url',
        example:
          "autorenderhq uploads create-from-url \\\n  --api-key 'My API Key' \\\n  --remote-url https://example.com",
      },
      php: {
        method: 'uploads->createFromURL',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->uploads->createFromURL(\n  remoteURL: 'https://example.com',\n  customID: 'custom_id',\n  fileName: 'file_name',\n  folder: 'folder',\n  metadata: 'metadata',\n  randomPrefix: 'random_prefix',\n  tags: 'tags',\n  webhookURL: 'https://example.com',\n);\n\nvar_dump($response);",
      },
      csharp: {
        method: 'Uploads.CreateFromUrl',
        example:
          'UploadCreateFromUrlParams parameters = new()\n{\n    RemoteUrl = "https://example.com"\n};\n\nvar response = await client.Uploads.CreateFromUrl(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://upload.autorender.io/api/v1/uploads/remote \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $AUTORENDER_API_KEY" \\\n    -d \'{\n          "remote_url": "https://example.com"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/files',
    httpMethod: 'get',
    summary: 'List files',
    description: 'List/search files with pagination, filtering, and sorting.',
    stainlessPath: '(resource) files > (method) list',
    qualified: 'client.files.list',
    params: [
      'folder_no?: string;',
      'limit?: number;',
      'page?: number;',
      'search?: string;',
      "sort?: 'name_asc' | 'name_desc' | 'size_asc' | 'size_desc' | 'created_at_asc' | 'created_at_desc';",
    ],
    response:
      '{ files: { id: string; created_at: string; file_no: string; folder_name: string; folder_no: string; format: string; height: number; metadata: object; mime_type: string; name: string; path: string; size: number; source: string; tags: string[]; updated_at: string; url: string; width: number; }[]; meta: { hasNext: boolean; hasPrev: boolean; limit: number; page: number; total: number; }; }',
    markdown:
      "## list\n\n`client.files.list(folder_no?: string, limit?: number, page?: number, search?: string, sort?: 'name_asc' | 'name_desc' | 'size_asc' | 'size_desc' | 'created_at_asc' | 'created_at_desc'): { files: object[]; meta: object; }`\n\n**get** `/api/v1/files`\n\nList/search files with pagination, filtering, and sorting.\n\n### Parameters\n\n- `folder_no?: string`\n  Filter by folder number\n\n- `limit?: number`\n\n- `page?: number`\n\n- `search?: string`\n  Partial name match (case-insensitive)\n\n- `sort?: 'name_asc' | 'name_desc' | 'size_asc' | 'size_desc' | 'created_at_asc' | 'created_at_desc'`\n\n### Returns\n\n- `{ files: { id: string; created_at: string; file_no: string; folder_name: string; folder_no: string; format: string; height: number; metadata: object; mime_type: string; name: string; path: string; size: number; source: string; tags: string[]; updated_at: string; url: string; width: number; }[]; meta: { hasNext: boolean; hasPrev: boolean; limit: number; page: number; total: number; }; }`\n  Files list\n\n  - `files: { id: string; created_at: string; file_no: string; folder_name: string; folder_no: string; format: string; height: number; metadata: object; mime_type: string; name: string; path: string; size: number; source: string; tags: string[]; updated_at: string; url: string; width: number; }[]`\n  - `meta: { hasNext: boolean; hasPrev: boolean; limit: number; page: number; total: number; }`\n\n### Example\n\n```typescript\nimport Autorender from '@autorender/nodejs';\n\nconst client = new Autorender();\n\nconst files = await client.files.list();\n\nconsole.log(files);\n```",
    perLanguage: {
      typescript: {
        method: 'client.files.list',
        example:
          "import Autorender from '@autorender/nodejs';\n\nconst client = new Autorender({\n  apiKey: process.env['AUTORENDER_API_KEY'], // This is the default and can be omitted\n});\n\nconst files = await client.files.list();\n\nconsole.log(files.files);",
      },
      python: {
        method: 'files.list',
        example:
          'import os\nfrom autorender import Autorender\n\nclient = Autorender(\n    api_key=os.environ.get("AUTORENDER_API_KEY"),  # This is the default and can be omitted\n)\nfiles = client.files.list()\nprint(files.files)',
      },
      java: {
        method: 'files().list',
        example:
          'package io.autorender.example;\n\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\nimport io.autorender.models.files.FileListParams;\nimport io.autorender.models.files.FileListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        AutorenderClient client = AutorenderOkHttpClient.fromEnv();\n\n        FileListResponse files = client.files().list();\n    }\n}',
      },
      kotlin: {
        method: 'files().list',
        example:
          'package com.autorenderhq.api.example\n\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\nimport com.autorenderhq.api.models.files.FileListParams\nimport com.autorenderhq.api.models.files.FileListResponse\n\nfun main() {\n    val client: AutorenderClient = AutorenderOkHttpClient.fromEnv()\n\n    val files: FileListResponse = client.files().list()\n}',
      },
      go: {
        method: 'client.Files.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/autorenderhq-go"\n\t"github.com/stainless-sdks/autorenderhq-go/option"\n)\n\nfunc main() {\n\tclient := autorenderhq.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfiles, err := client.Files.List(context.TODO(), autorenderhq.FileListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", files.Files)\n}\n',
      },
      ruby: {
        method: 'files.list',
        example:
          'require "autorender"\n\nautorender = Autorender::Client.new(api_key: "My API Key")\n\nfiles = autorender.files.list\n\nputs(files)',
      },
      cli: {
        method: 'files list',
        example: "autorenderhq files list \\\n  --api-key 'My API Key'",
      },
      php: {
        method: 'files->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$files = $client->files->list(\n  folderNo: 'folder_no', limit: 1, page: 1, search: 'search', sort: 'name_asc'\n);\n\nvar_dump($files);",
      },
      csharp: {
        method: 'Files.List',
        example:
          'FileListParams parameters = new();\n\nvar files = await client.Files.List(parameters);\n\nConsole.WriteLine(files);',
      },
      http: {
        example: 'curl https://upload.autorender.io/api/v1/files \\\n    -H "x-api-key: $AUTORENDER_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/v1/files/{fileNo}',
    httpMethod: 'get',
    summary: 'Get file details',
    description: 'Get file details',
    stainlessPath: '(resource) files > (method) retrieve',
    qualified: 'client.files.retrieve',
    params: ['fileNo: string;'],
    response:
      '{ data: { id: string; created_at: string; file_no: string; folder_name: string; folder_no: string; format: string; height: number; metadata: object; mime_type: string; name: string; path: string; size: number; source: string; tags: string[]; updated_at: string; url: string; width: number; }; success: true; }',
    markdown:
      "## retrieve\n\n`client.files.retrieve(fileNo: string): { data: object; success: true; }`\n\n**get** `/api/v1/files/{fileNo}`\n\nGet file details\n\n### Parameters\n\n- `fileNo: string`\n\n### Returns\n\n- `{ data: { id: string; created_at: string; file_no: string; folder_name: string; folder_no: string; format: string; height: number; metadata: object; mime_type: string; name: string; path: string; size: number; source: string; tags: string[]; updated_at: string; url: string; width: number; }; success: true; }`\n  File details\n\n  - `data: { id: string; created_at: string; file_no: string; folder_name: string; folder_no: string; format: string; height: number; metadata: object; mime_type: string; name: string; path: string; size: number; source: string; tags: string[]; updated_at: string; url: string; width: number; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Autorender from '@autorender/nodejs';\n\nconst client = new Autorender();\n\nconst file = await client.files.retrieve('fileNo');\n\nconsole.log(file);\n```",
    perLanguage: {
      typescript: {
        method: 'client.files.retrieve',
        example:
          "import Autorender from '@autorender/nodejs';\n\nconst client = new Autorender({\n  apiKey: process.env['AUTORENDER_API_KEY'], // This is the default and can be omitted\n});\n\nconst file = await client.files.retrieve('fileNo');\n\nconsole.log(file.data);",
      },
      python: {
        method: 'files.retrieve',
        example:
          'import os\nfrom autorender import Autorender\n\nclient = Autorender(\n    api_key=os.environ.get("AUTORENDER_API_KEY"),  # This is the default and can be omitted\n)\nfile = client.files.retrieve(\n    "fileNo",\n)\nprint(file.data)',
      },
      java: {
        method: 'files().retrieve',
        example:
          'package io.autorender.example;\n\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\nimport io.autorender.models.files.FileRetrieveParams;\nimport io.autorender.models.files.FileRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        AutorenderClient client = AutorenderOkHttpClient.fromEnv();\n\n        FileRetrieveResponse file = client.files().retrieve("fileNo");\n    }\n}',
      },
      kotlin: {
        method: 'files().retrieve',
        example:
          'package com.autorenderhq.api.example\n\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\nimport com.autorenderhq.api.models.files.FileRetrieveParams\nimport com.autorenderhq.api.models.files.FileRetrieveResponse\n\nfun main() {\n    val client: AutorenderClient = AutorenderOkHttpClient.fromEnv()\n\n    val file: FileRetrieveResponse = client.files().retrieve("fileNo")\n}',
      },
      go: {
        method: 'client.Files.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/autorenderhq-go"\n\t"github.com/stainless-sdks/autorenderhq-go/option"\n)\n\nfunc main() {\n\tclient := autorenderhq.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfile, err := client.Files.Get(context.TODO(), "fileNo")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", file.Data)\n}\n',
      },
      ruby: {
        method: 'files.retrieve',
        example:
          'require "autorender"\n\nautorender = Autorender::Client.new(api_key: "My API Key")\n\nfile = autorender.files.retrieve("fileNo")\n\nputs(file)',
      },
      cli: {
        method: 'files retrieve',
        example: "autorenderhq files retrieve \\\n  --api-key 'My API Key' \\\n  --file-no fileNo",
      },
      php: {
        method: 'files->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$file = $client->files->retrieve('fileNo');\n\nvar_dump($file);",
      },
      csharp: {
        method: 'Files.Retrieve',
        example:
          'FileRetrieveParams parameters = new() { FileNo = "fileNo" };\n\nvar file = await client.Files.Retrieve(parameters);\n\nConsole.WriteLine(file);',
      },
      http: {
        example:
          'curl https://upload.autorender.io/api/v1/files/$FILE_NO \\\n    -H "x-api-key: $AUTORENDER_API_KEY"',
      },
    },
  },
  {
    name: 'rename',
    endpoint: '/api/v1/files/{fileNo}/rename',
    httpMethod: 'patch',
    summary: 'Rename file',
    description: 'Rename file',
    stainlessPath: '(resource) files > (method) rename',
    qualified: 'client.files.rename',
    params: ['fileNo: string;', 'name: string;'],
    response:
      '{ data: { id: string; created_at: string; file_no: string; folder_name: string; folder_no: string; format: string; height: number; metadata: object; mime_type: string; name: string; path: string; size: number; source: string; tags: string[]; updated_at: string; url: string; width: number; }; success: true; }',
    markdown:
      "## rename\n\n`client.files.rename(fileNo: string, name: string): { data: object; success: true; }`\n\n**patch** `/api/v1/files/{fileNo}/rename`\n\nRename file\n\n### Parameters\n\n- `fileNo: string`\n\n- `name: string`\n  New file name without extension or path separators\n\n### Returns\n\n- `{ data: { id: string; created_at: string; file_no: string; folder_name: string; folder_no: string; format: string; height: number; metadata: object; mime_type: string; name: string; path: string; size: number; source: string; tags: string[]; updated_at: string; url: string; width: number; }; success: true; }`\n  Renamed file\n\n  - `data: { id: string; created_at: string; file_no: string; folder_name: string; folder_no: string; format: string; height: number; metadata: object; mime_type: string; name: string; path: string; size: number; source: string; tags: string[]; updated_at: string; url: string; width: number; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Autorender from '@autorender/nodejs';\n\nconst client = new Autorender();\n\nconst response = await client.files.rename('fileNo', { name: 'name' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.files.rename',
        example:
          "import Autorender from '@autorender/nodejs';\n\nconst client = new Autorender({\n  apiKey: process.env['AUTORENDER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.files.rename('fileNo', { name: 'name' });\n\nconsole.log(response.data);",
      },
      python: {
        method: 'files.rename',
        example:
          'import os\nfrom autorender import Autorender\n\nclient = Autorender(\n    api_key=os.environ.get("AUTORENDER_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.files.rename(\n    file_no="fileNo",\n    name="name",\n)\nprint(response.data)',
      },
      java: {
        method: 'files().rename',
        example:
          'package io.autorender.example;\n\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\nimport io.autorender.models.files.FileRenameParams;\nimport io.autorender.models.files.FileRenameResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        AutorenderClient client = AutorenderOkHttpClient.fromEnv();\n\n        FileRenameParams params = FileRenameParams.builder()\n            .fileNo("fileNo")\n            .name("name")\n            .build();\n        FileRenameResponse response = client.files().rename(params);\n    }\n}',
      },
      kotlin: {
        method: 'files().rename',
        example:
          'package com.autorenderhq.api.example\n\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\nimport com.autorenderhq.api.models.files.FileRenameParams\nimport com.autorenderhq.api.models.files.FileRenameResponse\n\nfun main() {\n    val client: AutorenderClient = AutorenderOkHttpClient.fromEnv()\n\n    val params: FileRenameParams = FileRenameParams.builder()\n        .fileNo("fileNo")\n        .name("name")\n        .build()\n    val response: FileRenameResponse = client.files().rename(params)\n}',
      },
      go: {
        method: 'client.Files.Rename',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/autorenderhq-go"\n\t"github.com/stainless-sdks/autorenderhq-go/option"\n)\n\nfunc main() {\n\tclient := autorenderhq.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Files.Rename(\n\t\tcontext.TODO(),\n\t\t"fileNo",\n\t\tautorenderhq.FileRenameParams{\n\t\t\tName: "name",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      ruby: {
        method: 'files.rename',
        example:
          'require "autorender"\n\nautorender = Autorender::Client.new(api_key: "My API Key")\n\nresponse = autorender.files.rename("fileNo", name: "name")\n\nputs(response)',
      },
      cli: {
        method: 'files rename',
        example:
          "autorenderhq files rename \\\n  --api-key 'My API Key' \\\n  --file-no fileNo \\\n  --name name",
      },
      php: {
        method: 'files->rename',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->files->rename('fileNo', name: 'name');\n\nvar_dump($response);",
      },
      csharp: {
        method: 'Files.Rename',
        example:
          'FileRenameParams parameters = new()\n{\n    FileNo = "fileNo",\n    Name = "name",\n};\n\nvar response = await client.Files.Rename(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://upload.autorender.io/api/v1/files/$FILE_NO/rename \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $AUTORENDER_API_KEY" \\\n    -d \'{\n          "name": "name"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/files/{fileNo}',
    httpMethod: 'delete',
    summary: 'Delete file',
    description: 'Delete file',
    stainlessPath: '(resource) files > (method) delete',
    qualified: 'client.files.delete',
    params: ['fileNo: string;'],
    markdown:
      "## delete\n\n`client.files.delete(fileNo: string): void`\n\n**delete** `/api/v1/files/{fileNo}`\n\nDelete file\n\n### Parameters\n\n- `fileNo: string`\n\n### Example\n\n```typescript\nimport Autorender from '@autorender/nodejs';\n\nconst client = new Autorender();\n\nawait client.files.delete('fileNo')\n```",
    perLanguage: {
      typescript: {
        method: 'client.files.delete',
        example:
          "import Autorender from '@autorender/nodejs';\n\nconst client = new Autorender({\n  apiKey: process.env['AUTORENDER_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.files.delete('fileNo');",
      },
      python: {
        method: 'files.delete',
        example:
          'import os\nfrom autorender import Autorender\n\nclient = Autorender(\n    api_key=os.environ.get("AUTORENDER_API_KEY"),  # This is the default and can be omitted\n)\nclient.files.delete(\n    "fileNo",\n)',
      },
      java: {
        method: 'files().delete',
        example:
          'package io.autorender.example;\n\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\nimport io.autorender.models.files.FileDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        AutorenderClient client = AutorenderOkHttpClient.fromEnv();\n\n        client.files().delete("fileNo");\n    }\n}',
      },
      kotlin: {
        method: 'files().delete',
        example:
          'package com.autorenderhq.api.example\n\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\nimport com.autorenderhq.api.models.files.FileDeleteParams\n\nfun main() {\n    val client: AutorenderClient = AutorenderOkHttpClient.fromEnv()\n\n    client.files().delete("fileNo")\n}',
      },
      go: {
        method: 'client.Files.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/autorenderhq-go"\n\t"github.com/stainless-sdks/autorenderhq-go/option"\n)\n\nfunc main() {\n\tclient := autorenderhq.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Files.Delete(context.TODO(), "fileNo")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      ruby: {
        method: 'files.delete',
        example:
          'require "autorender"\n\nautorender = Autorender::Client.new(api_key: "My API Key")\n\nresult = autorender.files.delete("fileNo")\n\nputs(result)',
      },
      cli: {
        method: 'files delete',
        example: "autorenderhq files delete \\\n  --api-key 'My API Key' \\\n  --file-no fileNo",
      },
      php: {
        method: 'files->delete',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->files->delete('fileNo');\n\nvar_dump($result);",
      },
      csharp: {
        method: 'Files.Delete',
        example:
          'FileDeleteParams parameters = new() { FileNo = "fileNo" };\n\nawait client.Files.Delete(parameters);',
      },
      http: {
        example:
          'curl https://upload.autorender.io/api/v1/files/$FILE_NO \\\n    -X DELETE \\\n    -H "x-api-key: $AUTORENDER_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/folders',
    httpMethod: 'get',
    summary: 'List folders',
    description: 'List folders',
    stainlessPath: '(resource) folders > (method) list',
    qualified: 'client.folders.list',
    params: [
      'parent_folder_no?: string;',
      'search?: string;',
      "sort?: 'name_asc' | 'name_desc' | 'created_at_asc' | 'created_at_desc';",
    ],
    response:
      '{ folders: { id: string; created_at: string; folder_no: string; name: string; parent_folder_no: string; path: string; updated_at: string; }[]; }',
    markdown:
      "## list\n\n`client.folders.list(parent_folder_no?: string, search?: string, sort?: 'name_asc' | 'name_desc' | 'created_at_asc' | 'created_at_desc'): { folders: object[]; }`\n\n**get** `/api/v1/folders`\n\nList folders\n\n### Parameters\n\n- `parent_folder_no?: string`\n  Filter by parent folder number\n\n- `search?: string`\n  Partial name match (case-insensitive)\n\n- `sort?: 'name_asc' | 'name_desc' | 'created_at_asc' | 'created_at_desc'`\n\n### Returns\n\n- `{ folders: { id: string; created_at: string; folder_no: string; name: string; parent_folder_no: string; path: string; updated_at: string; }[]; }`\n  List of folders\n\n  - `folders: { id: string; created_at: string; folder_no: string; name: string; parent_folder_no: string; path: string; updated_at: string; }[]`\n\n### Example\n\n```typescript\nimport Autorender from '@autorender/nodejs';\n\nconst client = new Autorender();\n\nconst folders = await client.folders.list();\n\nconsole.log(folders);\n```",
    perLanguage: {
      typescript: {
        method: 'client.folders.list',
        example:
          "import Autorender from '@autorender/nodejs';\n\nconst client = new Autorender({\n  apiKey: process.env['AUTORENDER_API_KEY'], // This is the default and can be omitted\n});\n\nconst folders = await client.folders.list();\n\nconsole.log(folders.folders);",
      },
      python: {
        method: 'folders.list',
        example:
          'import os\nfrom autorender import Autorender\n\nclient = Autorender(\n    api_key=os.environ.get("AUTORENDER_API_KEY"),  # This is the default and can be omitted\n)\nfolders = client.folders.list()\nprint(folders.folders)',
      },
      java: {
        method: 'folders().list',
        example:
          'package io.autorender.example;\n\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\nimport io.autorender.models.folders.FolderListParams;\nimport io.autorender.models.folders.FolderListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        AutorenderClient client = AutorenderOkHttpClient.fromEnv();\n\n        FolderListResponse folders = client.folders().list();\n    }\n}',
      },
      kotlin: {
        method: 'folders().list',
        example:
          'package com.autorenderhq.api.example\n\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\nimport com.autorenderhq.api.models.folders.FolderListParams\nimport com.autorenderhq.api.models.folders.FolderListResponse\n\nfun main() {\n    val client: AutorenderClient = AutorenderOkHttpClient.fromEnv()\n\n    val folders: FolderListResponse = client.folders().list()\n}',
      },
      go: {
        method: 'client.Folders.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/autorenderhq-go"\n\t"github.com/stainless-sdks/autorenderhq-go/option"\n)\n\nfunc main() {\n\tclient := autorenderhq.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfolders, err := client.Folders.List(context.TODO(), autorenderhq.FolderListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", folders.Folders)\n}\n',
      },
      ruby: {
        method: 'folders.list',
        example:
          'require "autorender"\n\nautorender = Autorender::Client.new(api_key: "My API Key")\n\nfolders = autorender.folders.list\n\nputs(folders)',
      },
      cli: {
        method: 'folders list',
        example: "autorenderhq folders list \\\n  --api-key 'My API Key'",
      },
      php: {
        method: 'folders->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$folders = $client->folders->list(\n  parentFolderNo: 'parent_folder_no', search: 'search', sort: 'name_asc'\n);\n\nvar_dump($folders);",
      },
      csharp: {
        method: 'Folders.List',
        example:
          'FolderListParams parameters = new();\n\nvar folders = await client.Folders.List(parameters);\n\nConsole.WriteLine(folders);',
      },
      http: {
        example:
          'curl https://upload.autorender.io/api/v1/folders \\\n    -H "x-api-key: $AUTORENDER_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/folders',
    httpMethod: 'post',
    summary: 'Create folder',
    description: 'Create folder',
    stainlessPath: '(resource) folders > (method) create',
    qualified: 'client.folders.create',
    params: ['name: string;', 'parent_folder_no?: string;'],
    response:
      '{ id: string; created_at: string; folder_no: string; name: string; parent_folder_no: string; path: string; updated_at: string; }',
    markdown:
      "## create\n\n`client.folders.create(name: string, parent_folder_no?: string): { id: string; created_at: string; folder_no: string; name: string; parent_folder_no: string; path: string; updated_at: string; }`\n\n**post** `/api/v1/folders`\n\nCreate folder\n\n### Parameters\n\n- `name: string`\n  Folder name without slashes\n\n- `parent_folder_no?: string`\n  Parent folder number\n\n### Returns\n\n- `{ id: string; created_at: string; folder_no: string; name: string; parent_folder_no: string; path: string; updated_at: string; }`\n  Folder created\n\n  - `id: string`\n  - `created_at: string`\n  - `folder_no: string`\n  - `name: string`\n  - `parent_folder_no: string`\n  - `path: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Autorender from '@autorender/nodejs';\n\nconst client = new Autorender();\n\nconst folder = await client.folders.create({ name: 'x' });\n\nconsole.log(folder);\n```",
    perLanguage: {
      typescript: {
        method: 'client.folders.create',
        example:
          "import Autorender from '@autorender/nodejs';\n\nconst client = new Autorender({\n  apiKey: process.env['AUTORENDER_API_KEY'], // This is the default and can be omitted\n});\n\nconst folder = await client.folders.create({ name: 'x' });\n\nconsole.log(folder.id);",
      },
      python: {
        method: 'folders.create',
        example:
          'import os\nfrom autorender import Autorender\n\nclient = Autorender(\n    api_key=os.environ.get("AUTORENDER_API_KEY"),  # This is the default and can be omitted\n)\nfolder = client.folders.create(\n    name="x",\n)\nprint(folder.id)',
      },
      java: {
        method: 'folders().create',
        example:
          'package io.autorender.example;\n\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\nimport io.autorender.models.folders.FolderCreateParams;\nimport io.autorender.models.folders.FolderCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        AutorenderClient client = AutorenderOkHttpClient.fromEnv();\n\n        FolderCreateParams params = FolderCreateParams.builder()\n            .name("x")\n            .build();\n        FolderCreateResponse folder = client.folders().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'folders().create',
        example:
          'package com.autorenderhq.api.example\n\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\nimport com.autorenderhq.api.models.folders.FolderCreateParams\nimport com.autorenderhq.api.models.folders.FolderCreateResponse\n\nfun main() {\n    val client: AutorenderClient = AutorenderOkHttpClient.fromEnv()\n\n    val params: FolderCreateParams = FolderCreateParams.builder()\n        .name("x")\n        .build()\n    val folder: FolderCreateResponse = client.folders().create(params)\n}',
      },
      go: {
        method: 'client.Folders.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/autorenderhq-go"\n\t"github.com/stainless-sdks/autorenderhq-go/option"\n)\n\nfunc main() {\n\tclient := autorenderhq.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfolder, err := client.Folders.New(context.TODO(), autorenderhq.FolderNewParams{\n\t\tName: "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", folder.ID)\n}\n',
      },
      ruby: {
        method: 'folders.create',
        example:
          'require "autorender"\n\nautorender = Autorender::Client.new(api_key: "My API Key")\n\nfolder = autorender.folders.create(name: "x")\n\nputs(folder)',
      },
      cli: {
        method: 'folders create',
        example: "autorenderhq folders create \\\n  --api-key 'My API Key' \\\n  --name x",
      },
      php: {
        method: 'folders->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$folder = $client->folders->create(\n  name: 'x', parentFolderNo: 'parent_folder_no'\n);\n\nvar_dump($folder);",
      },
      csharp: {
        method: 'Folders.Create',
        example:
          'FolderCreateParams parameters = new() { Name = "x" };\n\nvar folder = await client.Folders.Create(parameters);\n\nConsole.WriteLine(folder);',
      },
      http: {
        example:
          'curl https://upload.autorender.io/api/v1/folders \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $AUTORENDER_API_KEY" \\\n    -d \'{\n          "name": "x"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/folders/{folderNo}',
    httpMethod: 'delete',
    summary: 'Delete folder',
    description: 'Delete folder',
    stainlessPath: '(resource) folders > (method) delete',
    qualified: 'client.folders.delete',
    params: ['folderNo: string;'],
    markdown:
      "## delete\n\n`client.folders.delete(folderNo: string): void`\n\n**delete** `/api/v1/folders/{folderNo}`\n\nDelete folder\n\n### Parameters\n\n- `folderNo: string`\n\n### Example\n\n```typescript\nimport Autorender from '@autorender/nodejs';\n\nconst client = new Autorender();\n\nawait client.folders.delete('folderNo')\n```",
    perLanguage: {
      typescript: {
        method: 'client.folders.delete',
        example:
          "import Autorender from '@autorender/nodejs';\n\nconst client = new Autorender({\n  apiKey: process.env['AUTORENDER_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.folders.delete('folderNo');",
      },
      python: {
        method: 'folders.delete',
        example:
          'import os\nfrom autorender import Autorender\n\nclient = Autorender(\n    api_key=os.environ.get("AUTORENDER_API_KEY"),  # This is the default and can be omitted\n)\nclient.folders.delete(\n    "folderNo",\n)',
      },
      java: {
        method: 'folders().delete',
        example:
          'package io.autorender.example;\n\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\nimport io.autorender.models.folders.FolderDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        AutorenderClient client = AutorenderOkHttpClient.fromEnv();\n\n        client.folders().delete("folderNo");\n    }\n}',
      },
      kotlin: {
        method: 'folders().delete',
        example:
          'package com.autorenderhq.api.example\n\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\nimport com.autorenderhq.api.models.folders.FolderDeleteParams\n\nfun main() {\n    val client: AutorenderClient = AutorenderOkHttpClient.fromEnv()\n\n    client.folders().delete("folderNo")\n}',
      },
      go: {
        method: 'client.Folders.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/autorenderhq-go"\n\t"github.com/stainless-sdks/autorenderhq-go/option"\n)\n\nfunc main() {\n\tclient := autorenderhq.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Folders.Delete(context.TODO(), "folderNo")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      ruby: {
        method: 'folders.delete',
        example:
          'require "autorender"\n\nautorender = Autorender::Client.new(api_key: "My API Key")\n\nresult = autorender.folders.delete("folderNo")\n\nputs(result)',
      },
      cli: {
        method: 'folders delete',
        example: "autorenderhq folders delete \\\n  --api-key 'My API Key' \\\n  --folder-no folderNo",
      },
      php: {
        method: 'folders->delete',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->folders->delete('folderNo');\n\nvar_dump($result);",
      },
      csharp: {
        method: 'Folders.Delete',
        example:
          'FolderDeleteParams parameters = new() { FolderNo = "folderNo" };\n\nawait client.Folders.Delete(parameters);',
      },
      http: {
        example:
          'curl https://upload.autorender.io/api/v1/folders/$FOLDER_NO \\\n    -X DELETE \\\n    -H "x-api-key: $AUTORENDER_API_KEY"',
      },
    },
  },
  {
    name: 'rename',
    endpoint: '/api/v1/folders/rename/{folderNo}',
    httpMethod: 'post',
    summary: 'Rename folder',
    description: 'Rename folder',
    stainlessPath: '(resource) folders > (method) rename',
    qualified: 'client.folders.rename',
    params: ['folderNo: string;', 'name: string;'],
    response:
      '{ id: string; created_at: string; folder_no: string; name: string; parent_folder_no: string; path: string; updated_at: string; }',
    markdown:
      "## rename\n\n`client.folders.rename(folderNo: string, name: string): { id: string; created_at: string; folder_no: string; name: string; parent_folder_no: string; path: string; updated_at: string; }`\n\n**post** `/api/v1/folders/rename/{folderNo}`\n\nRename folder\n\n### Parameters\n\n- `folderNo: string`\n\n- `name: string`\n  New folder name without slashes\n\n### Returns\n\n- `{ id: string; created_at: string; folder_no: string; name: string; parent_folder_no: string; path: string; updated_at: string; }`\n  Renamed folder\n\n  - `id: string`\n  - `created_at: string`\n  - `folder_no: string`\n  - `name: string`\n  - `parent_folder_no: string`\n  - `path: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Autorender from '@autorender/nodejs';\n\nconst client = new Autorender();\n\nconst response = await client.folders.rename('folderNo', { name: 'name' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.folders.rename',
        example:
          "import Autorender from '@autorender/nodejs';\n\nconst client = new Autorender({\n  apiKey: process.env['AUTORENDER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.folders.rename('folderNo', { name: 'name' });\n\nconsole.log(response.id);",
      },
      python: {
        method: 'folders.rename',
        example:
          'import os\nfrom autorender import Autorender\n\nclient = Autorender(\n    api_key=os.environ.get("AUTORENDER_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.folders.rename(\n    folder_no="folderNo",\n    name="name",\n)\nprint(response.id)',
      },
      java: {
        method: 'folders().rename',
        example:
          'package io.autorender.example;\n\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\nimport io.autorender.models.folders.FolderRenameParams;\nimport io.autorender.models.folders.FolderRenameResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        AutorenderClient client = AutorenderOkHttpClient.fromEnv();\n\n        FolderRenameParams params = FolderRenameParams.builder()\n            .folderNo("folderNo")\n            .name("name")\n            .build();\n        FolderRenameResponse response = client.folders().rename(params);\n    }\n}',
      },
      kotlin: {
        method: 'folders().rename',
        example:
          'package com.autorenderhq.api.example\n\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\nimport com.autorenderhq.api.models.folders.FolderRenameParams\nimport com.autorenderhq.api.models.folders.FolderRenameResponse\n\nfun main() {\n    val client: AutorenderClient = AutorenderOkHttpClient.fromEnv()\n\n    val params: FolderRenameParams = FolderRenameParams.builder()\n        .folderNo("folderNo")\n        .name("name")\n        .build()\n    val response: FolderRenameResponse = client.folders().rename(params)\n}',
      },
      go: {
        method: 'client.Folders.Rename',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/autorenderhq-go"\n\t"github.com/stainless-sdks/autorenderhq-go/option"\n)\n\nfunc main() {\n\tclient := autorenderhq.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Folders.Rename(\n\t\tcontext.TODO(),\n\t\t"folderNo",\n\t\tautorenderhq.FolderRenameParams{\n\t\t\tName: "name",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      ruby: {
        method: 'folders.rename',
        example:
          'require "autorender"\n\nautorender = Autorender::Client.new(api_key: "My API Key")\n\nresponse = autorender.folders.rename("folderNo", name: "name")\n\nputs(response)',
      },
      cli: {
        method: 'folders rename',
        example:
          "autorenderhq folders rename \\\n  --api-key 'My API Key' \\\n  --folder-no folderNo \\\n  --name name",
      },
      php: {
        method: 'folders->rename',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->folders->rename('folderNo', name: 'name');\n\nvar_dump($response);",
      },
      csharp: {
        method: 'Folders.Rename',
        example:
          'FolderRenameParams parameters = new()\n{\n    FolderNo = "folderNo",\n    Name = "name",\n};\n\nvar response = await client.Folders.Rename(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://upload.autorender.io/api/v1/folders/rename/$FOLDER_NO \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $AUTORENDER_API_KEY" \\\n    -d \'{\n          "name": "name"\n        }\'',
      },
    },
  },
  {
    name: 'start',
    endpoint: '/api/v1/multipart/start',
    httpMethod: 'post',
    summary: 'Start multipart upload',
    description: 'Initialise a multipart upload session and receive pre-signed part URLs.',
    stainlessPath: '(resource) multipart_uploads > (method) start',
    qualified: 'client.multipartUploads.start',
    params: [
      'file_name: string;',
      'format: string;',
      'size: number;',
      'custom_id?: string;',
      'folder?: string;',
      'metadata?: object;',
      'random_prefix?: boolean;',
      'tags?: string[] | string;',
      'ttl_seconds?: number;',
    ],
    response:
      '{ expire_at: number; min_part_size: number; part_size: number; parts: string[]; policy: { folder: string; format: string; size: number; tags: string[]; }; public_key: string; session_id: string; uuid: string; workspace_id: string; }',
    markdown:
      "## start\n\n`client.multipartUploads.start(file_name: string, format: string, size: number, custom_id?: string, folder?: string, metadata?: object, random_prefix?: boolean, tags?: string[] | string, ttl_seconds?: number): { expire_at: number; min_part_size: number; part_size: number; parts: string[]; policy: object; public_key: string; session_id: string; uuid: string; workspace_id: string; }`\n\n**post** `/api/v1/multipart/start`\n\nInitialise a multipart upload session and receive pre-signed part URLs.\n\n### Parameters\n\n- `file_name: string`\n\n- `format: string`\n\n- `size: number`\n\n- `custom_id?: string`\n\n- `folder?: string`\n\n- `metadata?: object`\n\n- `random_prefix?: boolean`\n\n- `tags?: string[] | string`\n\n- `ttl_seconds?: number`\n\n### Returns\n\n- `{ expire_at: number; min_part_size: number; part_size: number; parts: string[]; policy: { folder: string; format: string; size: number; tags: string[]; }; public_key: string; session_id: string; uuid: string; workspace_id: string; }`\n  Session created\n\n  - `expire_at: number`\n  - `min_part_size: number`\n  - `part_size: number`\n  - `parts: string[]`\n  - `policy: { folder: string; format: string; size: number; tags: string[]; }`\n  - `public_key: string`\n  - `session_id: string`\n  - `uuid: string`\n  - `workspace_id: string`\n\n### Example\n\n```typescript\nimport Autorender from '@autorender/nodejs';\n\nconst client = new Autorender();\n\nconst response = await client.multipartUploads.start({\n  file_name: 'x',\n  format: 'x',\n  size: 1,\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.multipartUploads.start',
        example:
          "import Autorender from '@autorender/nodejs';\n\nconst client = new Autorender({\n  apiKey: process.env['AUTORENDER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.multipartUploads.start({\n  file_name: 'x',\n  format: 'x',\n  size: 1,\n});\n\nconsole.log(response.session_id);",
      },
      python: {
        method: 'multipart_uploads.start',
        example:
          'import os\nfrom autorender import Autorender\n\nclient = Autorender(\n    api_key=os.environ.get("AUTORENDER_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.multipart_uploads.start(\n    file_name="x",\n    format="x",\n    size=1,\n)\nprint(response.session_id)',
      },
      java: {
        method: 'multipartUploads().start',
        example:
          'package io.autorender.example;\n\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\nimport io.autorender.models.multipartuploads.MultipartUploadStartParams;\nimport io.autorender.models.multipartuploads.MultipartUploadStartResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        AutorenderClient client = AutorenderOkHttpClient.fromEnv();\n\n        MultipartUploadStartParams params = MultipartUploadStartParams.builder()\n            .fileName("x")\n            .format("x")\n            .size(1L)\n            .build();\n        MultipartUploadStartResponse response = client.multipartUploads().start(params);\n    }\n}',
      },
      kotlin: {
        method: 'multipartUploads().start',
        example:
          'package com.autorenderhq.api.example\n\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\nimport com.autorenderhq.api.models.multipartuploads.MultipartUploadStartParams\nimport com.autorenderhq.api.models.multipartuploads.MultipartUploadStartResponse\n\nfun main() {\n    val client: AutorenderClient = AutorenderOkHttpClient.fromEnv()\n\n    val params: MultipartUploadStartParams = MultipartUploadStartParams.builder()\n        .fileName("x")\n        .format("x")\n        .size(1L)\n        .build()\n    val response: MultipartUploadStartResponse = client.multipartUploads().start(params)\n}',
      },
      go: {
        method: 'client.MultipartUploads.Start',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/autorenderhq-go"\n\t"github.com/stainless-sdks/autorenderhq-go/option"\n)\n\nfunc main() {\n\tclient := autorenderhq.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.MultipartUploads.Start(context.TODO(), autorenderhq.MultipartUploadStartParams{\n\t\tFileName: "x",\n\t\tFormat:   "x",\n\t\tSize:     1,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.SessionID)\n}\n',
      },
      ruby: {
        method: 'multipart_uploads.start',
        example:
          'require "autorender"\n\nautorender = Autorender::Client.new(api_key: "My API Key")\n\nresponse = autorender.multipart_uploads.start(file_name: "x", format_: "x", size: 1)\n\nputs(response)',
      },
      cli: {
        method: 'multipart_uploads start',
        example:
          "autorenderhq multipart-uploads start \\\n  --api-key 'My API Key' \\\n  --file-name x \\\n  --format x \\\n  --size 1",
      },
      php: {
        method: 'multipartUploads->start',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->multipartUploads->start(\n  fileName: 'x',\n  format: 'x',\n  size: 1,\n  customID: 'custom_id',\n  folder: 'folder',\n  metadata: ['foo' => 'bar'],\n  randomPrefix: true,\n  tags: ['string'],\n  ttlSeconds: 1,\n);\n\nvar_dump($response);",
      },
      csharp: {
        method: 'MultipartUploads.Start',
        example:
          'MultipartUploadStartParams parameters = new()\n{\n    FileName = "x",\n    Format = "x",\n    Size = 1,\n};\n\nvar response = await client.MultipartUploads.Start(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://upload.autorender.io/api/v1/multipart/start \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $AUTORENDER_API_KEY" \\\n    -d \'{\n          "file_name": "x",\n          "format": "x",\n          "size": 1\n        }\'',
      },
    },
  },
  {
    name: 'complete',
    endpoint: '/api/v1/multipart/complete',
    httpMethod: 'post',
    summary: 'Complete multipart upload',
    description: 'Finalise a multipart upload session and return the stored file record.',
    stainlessPath: '(resource) multipart_uploads > (method) complete',
    qualified: 'client.multipartUploads.complete',
    params: ['session_id: string;', 'uuid?: string;'],
    response:
      '{ id: string; created_at: string; custom_id: string; extension: string; file_no: string; folder_no: string; height: number; is_duplicate: boolean; metadata: object; mime_type: string; name: string; path: string; size: number; tags: string[]; thumbnail: string; upload_source: string; url: string; width: number; workspace_id: string; format?: string; hash?: string; is_private?: boolean; }',
    markdown:
      "## complete\n\n`client.multipartUploads.complete(session_id: string, uuid?: string): { id: string; created_at: string; custom_id: string; extension: string; file_no: string; folder_no: string; height: number; is_duplicate: boolean; metadata: object; mime_type: string; name: string; path: string; size: number; tags: string[]; thumbnail: string; upload_source: string; url: string; width: number; workspace_id: string; format?: string; hash?: string; is_private?: boolean; }`\n\n**post** `/api/v1/multipart/complete`\n\nFinalise a multipart upload session and return the stored file record.\n\n### Parameters\n\n- `session_id: string`\n\n- `uuid?: string`\n\n### Returns\n\n- `{ id: string; created_at: string; custom_id: string; extension: string; file_no: string; folder_no: string; height: number; is_duplicate: boolean; metadata: object; mime_type: string; name: string; path: string; size: number; tags: string[]; thumbnail: string; upload_source: string; url: string; width: number; workspace_id: string; format?: string; hash?: string; is_private?: boolean; }`\n  Upload completed\n\n  - `id: string`\n  - `created_at: string`\n  - `custom_id: string`\n  - `extension: string`\n  - `file_no: string`\n  - `folder_no: string`\n  - `height: number`\n  - `is_duplicate: boolean`\n  - `metadata: object`\n  - `mime_type: string`\n  - `name: string`\n  - `path: string`\n  - `size: number`\n  - `tags: string[]`\n  - `thumbnail: string`\n  - `upload_source: string`\n  - `url: string`\n  - `width: number`\n  - `workspace_id: string`\n  - `format?: string`\n  - `hash?: string`\n  - `is_private?: boolean`\n\n### Example\n\n```typescript\nimport Autorender from '@autorender/nodejs';\n\nconst client = new Autorender();\n\nconst response = await client.multipartUploads.complete({ session_id: 'x' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.multipartUploads.complete',
        example:
          "import Autorender from '@autorender/nodejs';\n\nconst client = new Autorender({\n  apiKey: process.env['AUTORENDER_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.multipartUploads.complete({ session_id: 'x' });\n\nconsole.log(response.id);",
      },
      python: {
        method: 'multipart_uploads.complete',
        example:
          'import os\nfrom autorender import Autorender\n\nclient = Autorender(\n    api_key=os.environ.get("AUTORENDER_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.multipart_uploads.complete(\n    session_id="x",\n)\nprint(response.id)',
      },
      java: {
        method: 'multipartUploads().complete',
        example:
          'package io.autorender.example;\n\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\nimport io.autorender.models.multipartuploads.MultipartUploadCompleteParams;\nimport io.autorender.models.multipartuploads.MultipartUploadCompleteResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        AutorenderClient client = AutorenderOkHttpClient.fromEnv();\n\n        MultipartUploadCompleteParams params = MultipartUploadCompleteParams.builder()\n            .sessionId("x")\n            .build();\n        MultipartUploadCompleteResponse response = client.multipartUploads().complete(params);\n    }\n}',
      },
      kotlin: {
        method: 'multipartUploads().complete',
        example:
          'package com.autorenderhq.api.example\n\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\nimport com.autorenderhq.api.models.multipartuploads.MultipartUploadCompleteParams\nimport com.autorenderhq.api.models.multipartuploads.MultipartUploadCompleteResponse\n\nfun main() {\n    val client: AutorenderClient = AutorenderOkHttpClient.fromEnv()\n\n    val params: MultipartUploadCompleteParams = MultipartUploadCompleteParams.builder()\n        .sessionId("x")\n        .build()\n    val response: MultipartUploadCompleteResponse = client.multipartUploads().complete(params)\n}',
      },
      go: {
        method: 'client.MultipartUploads.Complete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/autorenderhq-go"\n\t"github.com/stainless-sdks/autorenderhq-go/option"\n)\n\nfunc main() {\n\tclient := autorenderhq.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.MultipartUploads.Complete(context.TODO(), autorenderhq.MultipartUploadCompleteParams{\n\t\tSessionID: "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      ruby: {
        method: 'multipart_uploads.complete',
        example:
          'require "autorender"\n\nautorender = Autorender::Client.new(api_key: "My API Key")\n\nresponse = autorender.multipart_uploads.complete(session_id: "x")\n\nputs(response)',
      },
      cli: {
        method: 'multipart_uploads complete',
        example: "autorenderhq multipart-uploads complete \\\n  --api-key 'My API Key' \\\n  --session-id x",
      },
      php: {
        method: 'multipartUploads->complete',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->multipartUploads->complete(sessionID: 'x', uuid: 'uuid');\n\nvar_dump($response);",
      },
      csharp: {
        method: 'MultipartUploads.Complete',
        example:
          'MultipartUploadCompleteParams parameters = new() { SessionID = "x" };\n\nvar response = await client.MultipartUploads.Complete(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://upload.autorender.io/api/v1/multipart/complete \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $AUTORENDER_API_KEY" \\\n    -d \'{\n          "session_id": "x"\n        }\'',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'cli',
    content:
      "# Autorender CLI\n\nThe official CLI for the [Autorender REST API](https://autorender.mintlify.app/).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## Installation\n\n### Installing with Go\n\nTo test or install the CLI locally, you need [Go](https://go.dev/doc/install) version 1.22 or later installed.\n\n~~~sh\ngo install 'github.com/stainless-sdks/autorenderhq-cli/cmd/autorenderhq@latest'\n~~~\n\nOnce you have run `go install`, the binary is placed in your Go bin directory:\n\n- **Default location**: `$HOME/go/bin` (or `$GOPATH/bin` if GOPATH is set)\n- **Check your path**: Run `go env GOPATH` to see the base directory\n\nIf commands aren't found after installation, add the Go bin directory to your PATH:\n\n~~~sh\n# Add to your shell profile (.zshrc, .bashrc, etc.)\nexport PATH=\"$PATH:$(go env GOPATH)/bin\"\n~~~\n\n### Running Locally\n\nAfter cloning the git repository for this project, you can use the\n`scripts/run` script to run the tool locally:\n\n~~~sh\n./scripts/run args...\n~~~\n\n## Usage\n\nThe CLI follows a resource-based command structure:\n\n~~~sh\nautorenderhq [resource] <command> [flags...]\n~~~\n\n~~~sh\nautorenderhq files list \\\n  --api-key 'My API Key' \\\n  --limit 10\n~~~\n\nFor details about specific commands, use the `--help` flag.\n\n### Environment variables\n\n| Environment variable | Required | Default value |\n| -------------------- | -------- | ------------- |\n| `AUTORENDER_API_KEY` | no       | `null`        |\n\n### Global flags\n\n- `--api-key` (can also be set with `AUTORENDER_API_KEY` env var)\n- `--help` - Show command line usage\n- `--debug` - Enable debug logging (includes HTTP request/response details)\n- `--version`, `-v` - Show the CLI version\n- `--base-url` - Use a custom API backend URL\n- `--format` - Change the output format (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--format-error` - Change the output format for errors (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--transform` - Transform the data output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n- `--transform-error` - Transform the error output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n\n### Passing files as arguments\n\nTo pass files to your API, you can use the `@myfile.ext` syntax:\n\n~~~bash\nautorenderhq <command> --arg @abe.jpg\n~~~\n\nFiles can also be passed inside JSON or YAML blobs:\n\n~~~bash\nautorenderhq <command> --arg '{image: \"@abe.jpg\"}'\n# Equivalent:\nautorenderhq <command> <<YAML\narg:\n  image: \"@abe.jpg\"\nYAML\n~~~\n\nIf you need to pass a string literal that begins with an `@` sign, you can\nescape the `@` sign to avoid accidentally passing a file.\n\n~~~bash\nautorenderhq <command> --username '\\@abe'\n~~~\n\n#### Explicit encoding\n\nFor JSON endpoints, the CLI tool does filetype sniffing to determine whether the\nfile contents should be sent as a string literal (for plain text files) or as a\nbase64-encoded string literal (for binary files). If you need to explicitly send\nthe file as either plain text or base64-encoded data, you can use\n`@file://myfile.txt` (for string encoding) or `@data://myfile.dat` (for\nbase64-encoding). Note that absolute paths will begin with `@file://` or\n`@data://`, followed by a third `/` (for example, `@file:///tmp/file.txt`).\n\n~~~bash\nautorenderhq <command> --arg @data://file.txt\n~~~\n\n## Linking different Go SDK versions\n\nYou can link the CLI against a different version of the Autorender Go SDK\nfor development purposes using the `./scripts/link` script.\n\nTo link to a specific version from a repository (version can be a branch,\ngit tag, or commit hash):\n\n~~~bash\n./scripts/link github.com/org/repo@version\n~~~\n\nTo link to a local copy of the SDK:\n\n~~~bash\n./scripts/link ../path/to/autorenderhq-go\n~~~\n\nIf you run the link script without any arguments, it will default to `../autorenderhq-go`.\n",
  },
  {
    language: 'csharp',
    content:
      '# Autorender C# API Library\n\nThe Autorender C# SDK provides convenient access to the [Autorender REST API](https://autorender.mintlify.app/) from applications written in   C#.\n\n## Installation\n\nInstall the package from [NuGet](https://www.nuget.org/packages/Autorender):\n\n```bash\ndotnet add package Autorender\n```\n\n## Requirements\n\nThis library requires .NET Standard 2.0 or later.\n\n## Usage\n\nSee the [`examples`](examples) directory for complete and runnable examples.\n\n```csharp\nAutorenderClient client = new();\n\nFileListParams parameters = new() { Limit = 10 };\n\nvar files = await client.Files.List(parameters);\n\nConsole.WriteLine(files);\n```',
  },
  {
    language: 'go',
    content:
      '# Autorender Go API Library\n\n<a href="https://pkg.go.dev/github.com/stainless-sdks/autorenderhq-go"><img src="https://pkg.go.dev/badge/github.com/stainless-sdks/autorenderhq-go.svg" alt="Go Reference"></a>\n\nThe Autorender Go library provides convenient access to the [Autorender REST API](https://autorender.mintlify.app/)\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Autorender MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40autorender%2Fnodejs-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBhdXRvcmVuZGVyL25vZGVqcy1tY3AiXSwiZW52Ijp7IkFVVE9SRU5ERVJfQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40autorender%2Fnodejs-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40autorender%2Fnodejs-mcp%22%5D%2C%22env%22%3A%7B%22AUTORENDER_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n\n\n```go\nimport (\n\t"github.com/stainless-sdks/autorenderhq-go" // imported as SDK_PackageName\n)\n```\n\n\n\nOr to pin the version:\n\n\n\n```sh\ngo get -u \'github.com/stainless-sdks/autorenderhq-go@v0.0.1\'\n```\n\n\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/autorenderhq-go"\n\t"github.com/stainless-sdks/autorenderhq-go/option"\n)\n\nfunc main() {\n\tclient := autorenderhq.NewClient(\n\t\toption.WithAPIKey("My API Key"), // defaults to os.LookupEnv("AUTORENDER_API_KEY")\n\t)\n\tfiles, err := client.Files.List(context.TODO(), autorenderhq.FileListParams{\n\t\tLimit: autorenderhq.Int(10),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", files.Files)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.Uploads.New(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/stainless-sdks/autorenderhq-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.Uploads.New(context.TODO(), autorenderhq.UploadNewParams{\n\tFile:     io.Reader(bytes.NewBuffer([]byte("<binary>"))),\n\tFileName: "photo.jpg",\n})\nif err != nil {\n\tvar apierr *autorenderhq.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/api/v1/uploads": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.Uploads.New(\n\tctx,\n\tautorenderhq.UploadNewParams{\n\t\tFile:     io.Reader(bytes.NewBuffer([]byte("<binary>"))),\n\t\tFileName: "photo.jpg",\n\t},\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n```go\n// A file from the file system\nfile, err := os.Open("/path/to/file")\nautorenderhq.UploadNewParams{\n\tFile:     file,\n\tFileName: "product.jpg",\n}\n\n// A file from a string\nautorenderhq.UploadNewParams{\n\tFile:     strings.NewReader("my file contents"),\n\tFileName: "product.jpg",\n}\n\n// With a custom filename and contentType\nautorenderhq.UploadNewParams{\n\tFile:     autorenderhq.File(strings.NewReader(`{"hello": "foo"}`), "file.go", "application/json"),\n\tFileName: "product.jpg",\n}\n```\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := autorenderhq.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.Uploads.New(\n\tcontext.TODO(),\n\tautorenderhq.UploadNewParams{\n\t\tFile:     io.Reader(bytes.NewBuffer([]byte("<binary>"))),\n\t\tFileName: "photo.jpg",\n\t},\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\nupload, err := client.Uploads.New(\n\tcontext.TODO(),\n\tautorenderhq.UploadNewParams{\n\t\tFile:     io.Reader(bytes.NewBuffer([]byte("<binary>"))),\n\t\tFileName: "photo.jpg",\n\t},\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", upload)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/autorenderhq-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'java',
    content:
      '# Autorender Java API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/io.autorender/autorender-java)](https://central.sonatype.com/artifact/io.autorender/autorender-java/0.0.1)\n[![javadoc](https://javadoc.io/badge2/io.autorender/autorender-java/0.0.1/javadoc.svg)](https://javadoc.io/doc/io.autorender/autorender-java/0.0.1)\n<!-- x-release-please-end -->\n\nThe Autorender Java SDK provides convenient access to the [Autorender REST API](https://autorender.mintlify.app/)   from applications written in Java.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Autorender MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40autorender%2Fnodejs-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBhdXRvcmVuZGVyL25vZGVqcy1tY3AiXSwiZW52Ijp7IkFVVE9SRU5ERVJfQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40autorender%2Fnodejs-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40autorender%2Fnodejs-mcp%22%5D%2C%22env%22%3A%7B%22AUTORENDER_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nThe REST API documentation can be found on [autorender.mintlify.app](https://autorender.mintlify.app/). Javadocs are available on [javadoc.io](https://javadoc.io/doc/io.autorender/autorender-java/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("io.autorender:autorender-java:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>io.autorender</groupId>\n  <artifactId>autorender-java</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```java\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\nimport io.autorender.models.files.FileListParams;\nimport io.autorender.models.files.FileListResponse;\n\n// Configures using the `autorender.apiKey` and `autorender.baseUrl` system properties\n// Or configures using the `AUTORENDER_API_KEY` and `AUTORENDER_BASE_URL` environment variables\nAutorenderClient client = AutorenderOkHttpClient.fromEnv();\n\nFileListParams params = FileListParams.builder()\n    .limit(10L)\n    .build();\nFileListResponse files = client.files().list(params);\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```java\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\n\n// Configures using the `autorender.apiKey` and `autorender.baseUrl` system properties\n// Or configures using the `AUTORENDER_API_KEY` and `AUTORENDER_BASE_URL` environment variables\nAutorenderClient client = AutorenderOkHttpClient.fromEnv();\n```\n\nOr manually:\n\n```java\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\n\nAutorenderClient client = AutorenderOkHttpClient.builder()\n    .apiKey("My API Key")\n    .build();\n```\n\nOr using a combination of the two approaches:\n\n```java\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\n\nAutorenderClient client = AutorenderOkHttpClient.builder()\n    // Configures using the `autorender.apiKey` and `autorender.baseUrl` system properties\n    // Or configures using the `AUTORENDER_API_KEY` and `AUTORENDER_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build();\n```\n\nSee this table for the available options:\n\n| Setter    | System property      | Environment variable  | Required | Default value                    |\n| --------- | -------------------- | --------------------- | -------- | -------------------------------- |\n| `apiKey`  | `autorender.apiKey`  | `AUTORENDER_API_KEY`  | false    | -                                |\n| `baseUrl` | `autorender.baseUrl` | `AUTORENDER_BASE_URL` | true     | `"https://upload.autorender.io"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```java\nimport io.autorender.client.AutorenderClient;\n\nAutorenderClient clientWithOptions = client.withOptions(optionsBuilder -> {\n    optionsBuilder.baseUrl("https://example.com");\n    optionsBuilder.maxRetries(42);\n});\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Autorender API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Java class.\n\nFor example, `client.files().list(...)` should be called with an instance of `FileListParams`, and it     will return an instance of `FileListResponse`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```java\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\nimport io.autorender.models.files.FileListParams;\nimport io.autorender.models.files.FileListResponse;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `autorender.apiKey` and `autorender.baseUrl` system properties\n// Or configures using the `AUTORENDER_API_KEY` and `AUTORENDER_BASE_URL` environment variables\nAutorenderClient client = AutorenderOkHttpClient.fromEnv();\n\nFileListParams params = FileListParams.builder()\n    .limit(10L)\n    .build();\nCompletableFuture<FileListResponse> files = client.async().files().list(params);\n```\n\nOr create an asynchronous client from the beginning:\n\n```java\nimport io.autorender.client.AutorenderClientAsync;\nimport io.autorender.client.okhttp.AutorenderOkHttpClientAsync;\nimport io.autorender.models.files.FileListParams;\nimport io.autorender.models.files.FileListResponse;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `autorender.apiKey` and `autorender.baseUrl` system properties\n// Or configures using the `AUTORENDER_API_KEY` and `AUTORENDER_BASE_URL` environment variables\nAutorenderClientAsync client = AutorenderOkHttpClientAsync.fromEnv();\n\nFileListParams params = FileListParams.builder()\n    .limit(10L)\n    .build();\nCompletableFuture<FileListResponse> files = client.files().list(params);\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods return `CompletableFuture`s.\n\n\n\n## File uploads\n\nThe SDK defines methods that accept files.\n\nTo upload a file, pass a [`Path`](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html):\n\n```java\nimport io.autorender.models.uploads.UploadCreateParams;\nimport io.autorender.models.uploads.UploadCreateResponse;\nimport java.nio.file.Paths;\n\nUploadCreateParams params = UploadCreateParams.builder()\n    .fileName("product.jpg")\n    .file(Paths.get("/path/to/file"))\n    .build();\nUploadCreateResponse upload = client.uploads().create(params);\n```\n\nOr an arbitrary [`InputStream`](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html):\n\n```java\nimport io.autorender.models.uploads.UploadCreateParams;\nimport io.autorender.models.uploads.UploadCreateResponse;\nimport java.net.URL;\n\nUploadCreateParams params = UploadCreateParams.builder()\n    .fileName("product.jpg")\n    .file(new URL("https://example.com//path/to/file").openStream())\n    .build();\nUploadCreateResponse upload = client.uploads().create(params);\n```\n\nOr a `byte[]` array:\n\n```java\nimport io.autorender.models.uploads.UploadCreateParams;\nimport io.autorender.models.uploads.UploadCreateResponse;\n\nUploadCreateParams params = UploadCreateParams.builder()\n    .fileName("product.jpg")\n    .file("content".getBytes())\n    .build();\nUploadCreateResponse upload = client.uploads().create(params);\n```\n\nNote that when passing a non-`Path` its filename is unknown so it will not be included in the request.     To manually set a filename, pass a [`MultipartField`](autorender-java-core/src/main/kotlin/io/autorender/core/Values.kt):\n\n```java\nimport io.autorender.core.MultipartField;\nimport io.autorender.models.uploads.UploadCreateParams;\nimport io.autorender.models.uploads.UploadCreateResponse;\nimport java.io.InputStream;\nimport java.net.URL;\n\nUploadCreateParams params = UploadCreateParams.builder()\n    .fileName("product.jpg")\n    .file(MultipartField.<InputStream>builder()\n        .value(new URL("https://example.com//path/to/file").openStream())\n        .filename("/path/to/file")\n        .build())\n    .build();\nUploadCreateResponse upload = client.uploads().create(params);\n```\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Java classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```java\nimport io.autorender.core.http.Headers;\nimport io.autorender.core.http.HttpResponseFor;\nimport io.autorender.models.uploads.UploadCreateParams;\nimport io.autorender.models.uploads.UploadCreateResponse;\nimport java.io.ByteArrayInputStream;\n\nUploadCreateParams params = UploadCreateParams.builder()\n    .file(new ByteArrayInputStream("<binary>".getBytes()))\n    .fileName("photo.jpg")\n    .build();\nHttpResponseFor<UploadCreateResponse> upload = client.uploads().withRawResponse().create(params);\n\nint statusCode = upload.statusCode();\nHeaders headers = upload.headers();\n```\n\nYou can still deserialize the response into an instance of a Java class if needed:\n\n```java\nimport io.autorender.models.uploads.UploadCreateResponse;\n\nUploadCreateResponse parsedUpload = upload.parse();\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`AutorenderServiceException`](autorender-java-core/src/main/kotlin/io/autorender/errors/AutorenderServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](autorender-java-core/src/main/kotlin/io/autorender/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](autorender-java-core/src/main/kotlin/io/autorender/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](autorender-java-core/src/main/kotlin/io/autorender/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](autorender-java-core/src/main/kotlin/io/autorender/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](autorender-java-core/src/main/kotlin/io/autorender/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](autorender-java-core/src/main/kotlin/io/autorender/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](autorender-java-core/src/main/kotlin/io/autorender/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](autorender-java-core/src/main/kotlin/io/autorender/errors/UnexpectedStatusCodeException.kt) |\n\n- [`AutorenderIoException`](autorender-java-core/src/main/kotlin/io/autorender/errors/AutorenderIoException.kt): I/O networking errors.\n\n- [`AutorenderRetryableException`](autorender-java-core/src/main/kotlin/io/autorender/errors/AutorenderRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`AutorenderInvalidDataException`](autorender-java-core/src/main/kotlin/io/autorender/errors/AutorenderInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`AutorenderException`](autorender-java-core/src/main/kotlin/io/autorender/errors/AutorenderException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n\n\n## Logging\n\nEnable logging by setting the `AUTORENDER_LOG` environment variable to   `info`:\n\n```sh\nexport AUTORENDER_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport AUTORENDER_LOG=debug\n```\n\nOr configure the client manually using the `logLevel` method:\n\n```java\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\nimport io.autorender.core.LogLevel;\n\nAutorenderClient client = AutorenderOkHttpClient.builder()\n    .fromEnv()\n    .logLevel(LogLevel.INFO)\n    .build();\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `autorender-java-core` is published with a     [configuration file](autorender-java-core/src/main/resources/META-INF/proguard/autorender-java-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`AutorenderOkHttpClient`](autorender-java-client-okhttp/src/main/kotlin/io/autorender/client/okhttp/AutorenderOkHttpClient.kt) or     [`AutorenderOkHttpClientAsync`](autorender-java-client-okhttp/src/main/kotlin/io/autorender/client/okhttp/AutorenderOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```java\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\n\nAutorenderClient client = AutorenderOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build();\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```java\nimport io.autorender.models.uploads.UploadCreateResponse;\n\nUploadCreateResponse upload = client.uploads().create(\n  params, RequestOptions.builder().timeout(Duration.ofSeconds(30)).build()\n);\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\nimport java.time.Duration;\n\nAutorenderClient client = AutorenderOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build();\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```java\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\nimport java.net.InetSocketAddress;\nimport java.net.Proxy;\n\nAutorenderClient client = AutorenderOkHttpClient.builder()\n    .fromEnv()\n    .proxy(new Proxy(\n      Proxy.Type.HTTP, new InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build();\n```\n\nIf the proxy responds with `407 Proxy Authentication Required`, supply credentials by also   configuring `proxyAuthenticator`:\n\n```java\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\nimport io.autorender.core.http.ProxyAuthenticator;\n\nAutorenderClient client = AutorenderOkHttpClient.builder()\n    .fromEnv()\n    .proxy(...)\n    // Or a custom implementation of `ProxyAuthenticator`.\n    .proxyAuthenticator(ProxyAuthenticator.basic("username", "password"))\n    .build();\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```java\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\nimport java.time.Duration;\n\nAutorenderClient client = AutorenderOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build();\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```java\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\n\nAutorenderClient client = AutorenderOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build();\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `autorender-java-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`AutorenderClient`](autorender-java-core/src/main/kotlin/io/autorender/client/AutorenderClient.kt), [`AutorenderClientAsync`](autorender-java-core/src/main/kotlin/io/autorender/client/AutorenderClientAsync.kt),             [`AutorenderClientImpl`](autorender-java-core/src/main/kotlin/io/autorender/client/AutorenderClientImpl.kt), and [`AutorenderClientAsyncImpl`](autorender-java-core/src/main/kotlin/io/autorender/client/AutorenderClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `autorender-java-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`AutorenderOkHttpClient`](autorender-java-client-okhttp/src/main/kotlin/io/autorender/client/okhttp/AutorenderOkHttpClient.kt) and [`AutorenderOkHttpClientAsync`](autorender-java-client-okhttp/src/main/kotlin/io/autorender/client/okhttp/AutorenderOkHttpClientAsync.kt), which             provide a way to construct [`AutorenderClientImpl`](autorender-java-core/src/main/kotlin/io/autorender/client/AutorenderClientImpl.kt) and             [`AutorenderClientAsyncImpl`](autorender-java-core/src/main/kotlin/io/autorender/client/AutorenderClientAsyncImpl.kt), respectively, using OkHttp\n- `autorender-java`\n  - Depends on and exposes the APIs of both `autorender-java-core` and `autorender-java-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`autorender-java` dependency](#installation) with `autorender-java-core`\n2. Copy `autorender-java-client-okhttp`\'s [`OkHttpClient`](autorender-java-client-okhttp/src/main/kotlin/io/autorender/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`AutorenderClientImpl`](autorender-java-core/src/main/kotlin/io/autorender/client/AutorenderClientImpl.kt) or [`AutorenderClientAsyncImpl`](autorender-java-core/src/main/kotlin/io/autorender/client/AutorenderClientAsyncImpl.kt), similarly to        [`AutorenderOkHttpClient`](autorender-java-client-okhttp/src/main/kotlin/io/autorender/client/okhttp/AutorenderOkHttpClient.kt) or [`AutorenderOkHttpClientAsync`](autorender-java-client-okhttp/src/main/kotlin/io/autorender/client/okhttp/AutorenderOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`autorender-java` dependency](#installation) with `autorender-java-core`\n2. Write a class that implements the [`HttpClient`](autorender-java-core/src/main/kotlin/io/autorender/core/http/HttpClient.kt) interface\n3. Construct [`AutorenderClientImpl`](autorender-java-core/src/main/kotlin/io/autorender/client/AutorenderClientImpl.kt) or [`AutorenderClientAsyncImpl`](autorender-java-core/src/main/kotlin/io/autorender/client/AutorenderClientAsyncImpl.kt), similarly to        [`AutorenderOkHttpClient`](autorender-java-client-okhttp/src/main/kotlin/io/autorender/client/okhttp/AutorenderOkHttpClient.kt) or [`AutorenderOkHttpClientAsync`](autorender-java-client-okhttp/src/main/kotlin/io/autorender/client/okhttp/AutorenderOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```java\nimport io.autorender.core.JsonValue;\nimport io.autorender.models.files.FileListParams;\n\nFileListParams params = FileListParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build();\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](autorender-java-core/src/main/kotlin/io/autorender/core/Values.kt) object to its setter:\n\n```java\nimport io.autorender.models.files.FileListParams;\n\nFileListParams params = FileListParams.builder()\n    .limit(10L)\n    .build();\n```\n\nThe most straightforward way to create a [`JsonValue`](autorender-java-core/src/main/kotlin/io/autorender/core/Values.kt) is using its       `from(...)` method:\n\n```java\nimport io.autorender.core.JsonValue;\nimport java.util.List;\nimport java.util.Map;\n\n// Create primitive JSON values\nJsonValue nullValue = JsonValue.from(null);\nJsonValue booleanValue = JsonValue.from(true);\nJsonValue numberValue = JsonValue.from(42);\nJsonValue stringValue = JsonValue.from("Hello World!");\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nJsonValue arrayValue = JsonValue.from(List.of(\n  "Hello", "World"\n));\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nJsonValue objectValue = JsonValue.from(Map.of(\n  "a", 1,\n  "b", 2\n));\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nJsonValue complexValue = JsonValue.from(Map.of(\n  "a", List.of(\n    1, 2\n  ),\n  "b", List.of(\n    3, 4\n  )\n));\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](autorender-java-core/src/main/kotlin/io/autorender/core/Values.kt):\n\n```java\nimport io.autorender.core.JsonMissing;\nimport io.autorender.models.files.FileListParams;\nimport io.autorender.models.uploads.UploadCreateParams;\n\nFileListParams params = UploadCreateParams.builder()\n    .fileName("product.jpg")\n    .file(JsonMissing.of())\n    .build();\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```java\nimport io.autorender.core.JsonValue;\nimport java.util.Map;\n\nMap<String, JsonValue> additionalProperties = client.files().list(params)._additionalProperties();\nJsonValue secretPropertyValue = additionalProperties.get("secretProperty");\n\nString result = secretPropertyValue.accept(new JsonValue.Visitor<>() {\n    @Override\n    public String visitNull() {\n        return "It\'s null!";\n    }\n\n    @Override\n    public String visitBoolean(boolean value) {\n        return "It\'s a boolean!";\n    }\n\n    @Override\n    public String visitNumber(Number value) {\n        return "It\'s a number!";\n    }\n\n    // Other methods include `visitMissing`, `visitString`, `visitArray`, and `visitObject`\n    // The default implementation of each unimplemented method delegates to `visitDefault`, which throws by default, but can also be overridden\n});\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```java\nimport io.autorender.core.JsonField;\nimport java.util.Optional;\n\nJsonField<Object> field = client.files().list(params)._field();\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  Optional<String> jsonString = field.asString();\n\n  // Try to deserialize into a custom type\n  MyClass myObject = field.asUnknown().orElseThrow().convert(MyClass.class);\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`AutorenderInvalidDataException`](autorender-java-core/src/main/kotlin/io/autorender/errors/AutorenderInvalidDataException.kt) only if you directly access the property.\n\nValidating the response is _not_ forwards compatible with new types from the API for existing fields.\n\nIf you would still prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```java\nimport io.autorender.models.files.FileListResponse;\n\nFileListResponse files = client.files().list(params).validate();\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```java\nimport io.autorender.models.files.FileListResponse;\n\nFileListResponse files = client.files().list(RequestOptions.builder().responseValidation(true).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport io.autorender.client.AutorenderClient;\nimport io.autorender.client.okhttp.AutorenderOkHttpClient;\n\nAutorenderClient client = AutorenderOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build();\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nJava `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/autorenderhq/autorender-java/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'kotlin',
    content:
      '# Autorender Kotlin API Library\n\n\n[![Maven Central](https://img.shields.io/maven-central/v/com.autorenderhq.api/autorender-kotlin)](https://central.sonatype.com/artifact/com.autorenderhq.api/autorender-kotlin/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.autorenderhq.api/autorender-kotlin/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.autorenderhq.api/autorender-kotlin/0.0.1)\n\n\nThe Autorender Kotlin SDK provides convenient access to the [Autorender REST API](https://autorender.mintlify.app/)   from applications written in Kotlin.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Autorender MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40autorender%2Fnodejs-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBhdXRvcmVuZGVyL25vZGVqcy1tY3AiXSwiZW52Ijp7IkFVVE9SRU5ERVJfQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40autorender%2Fnodejs-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40autorender%2Fnodejs-mcp%22%5D%2C%22env%22%3A%7B%22AUTORENDER_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\nThe REST API documentation can be found on [autorender.mintlify.app](https://autorender.mintlify.app/). KDocs are available on [javadoc.io](https://javadoc.io/doc/com.autorenderhq.api/autorender-kotlin/0.0.1).\n\n## Installation\n\n### Gradle\n\n~~~kotlin\nimplementation("com.autorenderhq.api:autorender-kotlin:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.autorenderhq.api</groupId>\n  <artifactId>autorender-kotlin</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```kotlin\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\nimport com.autorenderhq.api.models.files.FileListParams\nimport com.autorenderhq.api.models.files.FileListResponse\n\n// Configures using the `autorender.apiKey` and `autorender.baseUrl` system properties\n// Or configures using the `AUTORENDER_API_KEY` and `AUTORENDER_BASE_URL` environment variables\nval client: AutorenderClient = AutorenderOkHttpClient.fromEnv()\n\nval params: FileListParams = FileListParams.builder()\n    .limit(10L)\n    .build()\nval files: FileListResponse = client.files().list(params)\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```kotlin\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\n\n// Configures using the `autorender.apiKey` and `autorender.baseUrl` system properties\n// Or configures using the `AUTORENDER_API_KEY` and `AUTORENDER_BASE_URL` environment variables\nval client: AutorenderClient = AutorenderOkHttpClient.fromEnv()\n```\n\nOr manually:\n\n```kotlin\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\n\nval client: AutorenderClient = AutorenderOkHttpClient.builder()\n    .apiKey("My API Key")\n    .build()\n```\n\nOr using a combination of the two approaches:\n\n```kotlin\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\n\nval client: AutorenderClient = AutorenderOkHttpClient.builder()\n    // Configures using the `autorender.apiKey` and `autorender.baseUrl` system properties\n    // Or configures using the `AUTORENDER_API_KEY` and `AUTORENDER_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build()\n```\n\nSee this table for the available options:\n\n| Setter    | System property      | Environment variable  | Required | Default value                    |\n| --------- | -------------------- | --------------------- | -------- | -------------------------------- |\n| `apiKey`  | `autorender.apiKey`  | `AUTORENDER_API_KEY`  | false    | -                                |\n| `baseUrl` | `autorender.baseUrl` | `AUTORENDER_BASE_URL` | true     | `"https://upload.autorender.io"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```kotlin\nimport com.autorenderhq.api.client.AutorenderClient\n\nval clientWithOptions: AutorenderClient = client.withOptions {\n    it.baseUrl("https://example.com")\n    it.maxRetries(42)\n}\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Autorender API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Kotlin class.\n\nFor example, `client.files().list(...)` should be called with an instance of `FileListParams`, and it     will return an instance of `FileListResponse`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```kotlin\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\nimport com.autorenderhq.api.models.files.FileListParams\nimport com.autorenderhq.api.models.files.FileListResponse\n\n// Configures using the `autorender.apiKey` and `autorender.baseUrl` system properties\n// Or configures using the `AUTORENDER_API_KEY` and `AUTORENDER_BASE_URL` environment variables\nval client: AutorenderClient = AutorenderOkHttpClient.fromEnv()\n\nval params: FileListParams = FileListParams.builder()\n    .limit(10L)\n    .build()\nval files: FileListResponse = client.async().files().list(params)\n```\n\nOr create an asynchronous client from the beginning:\n\n```kotlin\nimport com.autorenderhq.api.client.AutorenderClientAsync\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClientAsync\nimport com.autorenderhq.api.models.files.FileListParams\nimport com.autorenderhq.api.models.files.FileListResponse\n\n// Configures using the `autorender.apiKey` and `autorender.baseUrl` system properties\n// Or configures using the `AUTORENDER_API_KEY` and `AUTORENDER_BASE_URL` environment variables\nval client: AutorenderClientAsync = AutorenderOkHttpClientAsync.fromEnv()\n\nval params: FileListParams = FileListParams.builder()\n    .limit(10L)\n    .build()\nval files: FileListResponse = client.files().list(params)\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods are [suspending](https://kotlinlang.org/docs/coroutines-guide.html).\n\n\n\n## File uploads\n\nThe SDK defines methods that accept files.\n\nTo upload a file, pass a [`Path`](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html):\n\n```kotlin\nimport com.autorenderhq.api.models.uploads.UploadCreateParams\nimport com.autorenderhq.api.models.uploads.UploadCreateResponse\nimport java.nio.file.Paths\n\nval params: UploadCreateParams = UploadCreateParams.builder()\n    .fileName("product.jpg")\n    .file(Paths.get("/path/to/file"))\n    .build()\nval upload: UploadCreateResponse = client.uploads().create(params)\n```\n\nOr an arbitrary [`InputStream`](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html):\n\n```kotlin\nimport com.autorenderhq.api.models.uploads.UploadCreateParams\nimport com.autorenderhq.api.models.uploads.UploadCreateResponse\nimport java.net.URL\n\nval params: UploadCreateParams = UploadCreateParams.builder()\n    .fileName("product.jpg")\n    .file(URL("https://example.com//path/to/file").openStream())\n    .build()\nval upload: UploadCreateResponse = client.uploads().create(params)\n```\n\nOr a `ByteArray`:\n\n```kotlin\nimport com.autorenderhq.api.models.uploads.UploadCreateParams\nimport com.autorenderhq.api.models.uploads.UploadCreateResponse\n\nval params: UploadCreateParams = UploadCreateParams.builder()\n    .fileName("product.jpg")\n    .file("content".toByteArray())\n    .build()\nval upload: UploadCreateResponse = client.uploads().create(params)\n```\n\nNote that when passing a non-`Path` its filename is unknown so it will not be included in the request.     To manually set a filename, pass a [`MultipartField`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/core/Values.kt):\n\n```kotlin\nimport com.autorenderhq.api.core.MultipartField\nimport com.autorenderhq.api.models.uploads.UploadCreateParams\nimport com.autorenderhq.api.models.uploads.UploadCreateResponse\nimport java.io.InputStream\nimport java.net.URL\n\nval params: UploadCreateParams = UploadCreateParams.builder()\n    .fileName("product.jpg")\n    .file(MultipartField.builder<InputStream>()\n        .value(URL("https://example.com//path/to/file").openStream())\n        .filename("/path/to/file")\n        .build())\n    .build()\nval upload: UploadCreateResponse = client.uploads().create(params)\n```\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Kotlin classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```kotlin\nimport com.autorenderhq.api.core.http.Headers\nimport com.autorenderhq.api.core.http.HttpResponseFor\nimport com.autorenderhq.api.models.uploads.UploadCreateParams\nimport com.autorenderhq.api.models.uploads.UploadCreateResponse\nimport java.io.ByteArrayInputStream\n\nval params: UploadCreateParams = UploadCreateParams.builder()\n    .file("<binary>".byteInputStream())\n    .fileName("photo.jpg")\n    .build()\nval upload: HttpResponseFor<UploadCreateResponse> = client.uploads().withRawResponse().create(params)\n\nval statusCode: Int = upload.statusCode()\nval headers: Headers = upload.headers()\n```\n\nYou can still deserialize the response into an instance of a Kotlin class if needed:\n\n```kotlin\nimport com.autorenderhq.api.models.uploads.UploadCreateResponse\n\nval parsedUpload: UploadCreateResponse = upload.parse()\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`AutorenderServiceException`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/errors/AutorenderServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`AutorenderIoException`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/errors/AutorenderIoException.kt): I/O networking errors.\n\n- [`AutorenderRetryableException`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/errors/AutorenderRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`AutorenderInvalidDataException`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/errors/AutorenderInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`AutorenderException`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/errors/AutorenderException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n\n\n## Logging\n\nEnable logging by setting the `AUTORENDER_LOG` environment variable to   `info`:\n\n```sh\nexport AUTORENDER_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport AUTORENDER_LOG=debug\n```\n\nOr configure the client manually using the `logLevel` method:\n\n```kotlin\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\nimport com.autorenderhq.api.core.LogLevel\n\nval client: AutorenderClient = AutorenderOkHttpClient.builder()\n    .fromEnv()\n    .logLevel(LogLevel.INFO)\n    .build()\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `autorender-kotlin-core` is published with a     [configuration file](autorender-kotlin-core/src/main/resources/META-INF/proguard/autorender-kotlin-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`AutorenderOkHttpClient`](autorender-kotlin-client-okhttp/src/main/kotlin/com/autorenderhq/api/client/okhttp/AutorenderOkHttpClient.kt) or     [`AutorenderOkHttpClientAsync`](autorender-kotlin-client-okhttp/src/main/kotlin/com/autorenderhq/api/client/okhttp/AutorenderOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```kotlin\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\n\nval client: AutorenderClient = AutorenderOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build()\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```kotlin\nimport com.autorenderhq.api.models.uploads.UploadCreateResponse\n\nval upload: UploadCreateResponse = client.uploads().create(\n  params, RequestOptions.builder().timeout(Duration.ofSeconds(30)).build()\n)\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\nimport java.time.Duration\n\nval client: AutorenderClient = AutorenderOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build()\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```kotlin\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\nimport java.net.InetSocketAddress\nimport java.net.Proxy\n\nval client: AutorenderClient = AutorenderOkHttpClient.builder()\n    .fromEnv()\n    .proxy(Proxy(\n      Proxy.Type.HTTP, InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build()\n```\n\nIf the proxy responds with `407 Proxy Authentication Required`, supply credentials by also   configuring `proxyAuthenticator`:\n\n```kotlin\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\nimport com.autorenderhq.api.core.http.ProxyAuthenticator\n\nval client: AutorenderClient = AutorenderOkHttpClient.builder()\n    .fromEnv()\n    .proxy(...)\n    // Or a custom implementation of `ProxyAuthenticator`.\n    .proxyAuthenticator(ProxyAuthenticator.basic("username", "password"))\n    .build()\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```kotlin\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\nimport java.time.Duration\n\nval client: AutorenderClient = AutorenderOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build()\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```kotlin\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\n\nval client: AutorenderClient = AutorenderOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build()\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `autorender-kotlin-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`AutorenderClient`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/client/AutorenderClient.kt), [`AutorenderClientAsync`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/client/AutorenderClientAsync.kt),             [`AutorenderClientImpl`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/client/AutorenderClientImpl.kt), and [`AutorenderClientAsyncImpl`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/client/AutorenderClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `autorender-kotlin-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`AutorenderOkHttpClient`](autorender-kotlin-client-okhttp/src/main/kotlin/com/autorenderhq/api/client/okhttp/AutorenderOkHttpClient.kt) and [`AutorenderOkHttpClientAsync`](autorender-kotlin-client-okhttp/src/main/kotlin/com/autorenderhq/api/client/okhttp/AutorenderOkHttpClientAsync.kt), which             provide a way to construct [`AutorenderClientImpl`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/client/AutorenderClientImpl.kt) and             [`AutorenderClientAsyncImpl`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/client/AutorenderClientAsyncImpl.kt), respectively, using OkHttp\n- `autorender-kotlin`\n  - Depends on and exposes the APIs of both `autorender-kotlin-core` and `autorender-kotlin-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`autorender-kotlin` dependency](#installation) with `autorender-kotlin-core`\n2. Copy `autorender-kotlin-client-okhttp`\'s [`OkHttpClient`](autorender-kotlin-client-okhttp/src/main/kotlin/com/autorenderhq/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`AutorenderClientImpl`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/client/AutorenderClientImpl.kt) or [`AutorenderClientAsyncImpl`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/client/AutorenderClientAsyncImpl.kt), similarly to        [`AutorenderOkHttpClient`](autorender-kotlin-client-okhttp/src/main/kotlin/com/autorenderhq/api/client/okhttp/AutorenderOkHttpClient.kt) or [`AutorenderOkHttpClientAsync`](autorender-kotlin-client-okhttp/src/main/kotlin/com/autorenderhq/api/client/okhttp/AutorenderOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`autorender-kotlin` dependency](#installation) with `autorender-kotlin-core`\n2. Write a class that implements the [`HttpClient`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/core/http/HttpClient.kt) interface\n3. Construct [`AutorenderClientImpl`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/client/AutorenderClientImpl.kt) or [`AutorenderClientAsyncImpl`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/client/AutorenderClientAsyncImpl.kt), similarly to        [`AutorenderOkHttpClient`](autorender-kotlin-client-okhttp/src/main/kotlin/com/autorenderhq/api/client/okhttp/AutorenderOkHttpClient.kt) or [`AutorenderOkHttpClientAsync`](autorender-kotlin-client-okhttp/src/main/kotlin/com/autorenderhq/api/client/okhttp/AutorenderOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```kotlin\nimport com.autorenderhq.api.core.JsonValue\nimport com.autorenderhq.api.models.files.FileListParams\n\nval params: FileListParams = FileListParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build()\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/core/Values.kt) object to its setter:\n\n```kotlin\nimport com.autorenderhq.api.models.files.FileListParams\n\nval params: FileListParams = FileListParams.builder()\n    .limit(10L)\n    .build()\n```\n\nThe most straightforward way to create a [`JsonValue`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/core/Values.kt) is using its       `from(...)` method:\n\n```kotlin\nimport com.autorenderhq.api.core.JsonValue\n\n// Create primitive JSON values\nval nullValue: JsonValue = JsonValue.from(null)\nval booleanValue: JsonValue = JsonValue.from(true)\nval numberValue: JsonValue = JsonValue.from(42)\nval stringValue: JsonValue = JsonValue.from("Hello World!")\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nval arrayValue: JsonValue = JsonValue.from(listOf(\n  "Hello", "World"\n))\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nval objectValue: JsonValue = JsonValue.from(mapOf(\n  "a" to 1, "b" to 2\n))\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nval complexValue: JsonValue = JsonValue.from(mapOf(\n  "a" to listOf(\n    1, 2\n  ), "b" to listOf(\n    3, 4\n  )\n))\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/core/Values.kt):\n\n```kotlin\nimport com.autorenderhq.api.core.JsonMissing\nimport com.autorenderhq.api.models.files.FileListParams\nimport com.autorenderhq.api.models.uploads.UploadCreateParams\n\nval params: FileListParams = UploadCreateParams.builder()\n    .fileName("product.jpg")\n    .file(JsonMissing.of())\n    .build()\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```kotlin\nimport com.autorenderhq.api.core.JsonBoolean\nimport com.autorenderhq.api.core.JsonNull\nimport com.autorenderhq.api.core.JsonNumber\nimport com.autorenderhq.api.core.JsonValue\n\nval additionalProperties: Map<String, JsonValue> = client.files().list(params)._additionalProperties()\nval secretPropertyValue: JsonValue = additionalProperties.get("secretProperty")\n\nval result = when (secretPropertyValue) {\n    is JsonNull -> "It\'s null!"\n    is JsonBoolean -> "It\'s a boolean!"\n    is JsonNumber -> "It\'s a number!"\n    // Other types include `JsonMissing`, `JsonString`, `JsonArray`, and `JsonObject`\n    else -> "It\'s something else!"\n}\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```kotlin\nimport com.autorenderhq.api.core.JsonField\n\nval field: JsonField<Any> = client.files().list(params)._field()\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  val jsonString: String? = field.asString();\n\n  // Try to deserialize into a custom type\n  val myObject: MyClass = field.asUnknown()!!.convert(MyClass::class.java)\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`AutorenderInvalidDataException`](autorender-kotlin-core/src/main/kotlin/com/autorenderhq/api/errors/AutorenderInvalidDataException.kt) only if you directly access the property.\n\nValidating the response is _not_ forwards compatible with new types from the API for existing fields.\n\nIf you would still prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```kotlin\nimport com.autorenderhq.api.models.files.FileListResponse\n\nval files: FileListResponse = client.files().list(params).validate()\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```kotlin\nimport com.autorenderhq.api.models.files.FileListResponse\n\nval files: FileListResponse = client.files().list(RequestOptions.builder().responseValidation(true).build())\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.autorenderhq.api.client.AutorenderClient\nimport com.autorenderhq.api.client.okhttp.AutorenderOkHttpClient\n\nval client: AutorenderClient = AutorenderOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build()\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nKotlin `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/autorenderhq-kotlin/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'php',
    content:
      '# Autorender PHP API Library\n\nThe Autorender PHP library provides convenient access to the Autorender REST API from any PHP 8.1.0+ application.\n\n## Installation\n\nTo use this package, install via Composer by adding the following to your application\'s `composer.json`:\n\n```json\n{\n  "repositories": [\n    {\n      "type": "vcs",\n      "url": "git@github.com:stainless-sdks/autorenderhq-php.git"\n    }\n  ],\n  "require": {\n    "org-placeholder/autorenderhq": "dev-main"\n  }\n}\n```\n\n## Usage\n\n```php\n<?php\n\n$client = new Client(apiKey: getenv(\'AUTORENDER_API_KEY\') ?: \'My API Key\');\n\n$files = $client->files->list(limit: 10);\n\nvar_dump($files->files);\n```',
  },
  {
    language: 'python',
    content:
      '# Autorender Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/autorender-python.svg?label=pypi%20(stable))](https://pypi.org/project/autorender-python/)\n\nThe Autorender Python library provides convenient access to the Autorender REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Autorender MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40autorender%2Fnodejs-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBhdXRvcmVuZGVyL25vZGVqcy1tY3AiXSwiZW52Ijp7IkFVVE9SRU5ERVJfQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40autorender%2Fnodejs-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40autorender%2Fnodejs-mcp%22%5D%2C%22env%22%3A%7B%22AUTORENDER_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [autorender.mintlify.app](https://autorender.mintlify.app/). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install autorender-python\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom autorender import Autorender\n\nclient = Autorender(\n    api_key=os.environ.get("AUTORENDER_API_KEY"),  # This is the default and can be omitted\n)\n\nfiles = client.files.list(\n    limit=10,\n)\nprint(files.files)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `AUTORENDER_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncAutorender` instead of `Autorender` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom autorender import AsyncAutorender\n\nclient = AsyncAutorender(\n    api_key=os.environ.get("AUTORENDER_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  files = await client.files.list(\n      limit=10,\n  )\n  print(files.files)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install autorender-python[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom autorender import DefaultAioHttpClient\nfrom autorender import AsyncAutorender\n\nasync def main() -> None:\n  async with AsyncAutorender(\n    api_key=os.environ.get("AUTORENDER_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    files = await client.files.list(\n        limit=10,\n    )\n    print(files.files)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed as `bytes`, or a [`PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) instance or a tuple of `(filename, contents, media type)`.\n\n```python\nfrom pathlib import Path\nfrom autorender import Autorender\n\nclient = Autorender()\n\nclient.uploads.create(\n    file=Path("/path/to/file"),\n    file_name="product.jpg",\n)\n```\n\nThe async client uses the exact same interface. If you pass a [`PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) instance, the file contents will be read asynchronously automatically.\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `autorender.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `autorender.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `autorender.APIError`.\n\n```python\nimport autorender\nfrom autorender import Autorender\n\nclient = Autorender()\n\ntry:\n    client.uploads.create(\n        file=b"<binary>",\n        file_name="photo.jpg",\n    )\nexcept autorender.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept autorender.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept autorender.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom autorender import Autorender\n\n# Configure the default for all requests:\nclient = Autorender(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).uploads.create(\n    file=b"<binary>",\n    file_name="photo.jpg",\n)\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom autorender import Autorender\n\n# Configure the default for all requests:\nclient = Autorender(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Autorender(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).uploads.create(\n    file=b"<binary>",\n    file_name="photo.jpg",\n)\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `AUTORENDER_LOG` to `info`.\n\n```shell\n$ export AUTORENDER_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom autorender import Autorender\n\nclient = Autorender()\nresponse = client.uploads.with_raw_response.create(\n    file=b"<binary>",\n    file_name="photo.jpg",\n)\nprint(response.headers.get(\'X-My-Header\'))\n\nupload = response.parse()  # get the object that `uploads.create()` would have returned\nprint(upload.id)\n```\n\nThese methods return an [`APIResponse`](https://github.com/autorenderhq/autorender-python/tree/main/src/autorender/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/autorenderhq/autorender-python/tree/main/src/autorender/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.uploads.with_streaming_response.create(\n    file=b"<binary>",\n    file_name="photo.jpg",\n) as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom autorender import Autorender, DefaultHttpxClient\n\nclient = Autorender(\n    # Or use the `AUTORENDER_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom autorender import Autorender\n\nwith Autorender() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/autorenderhq/autorender-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport autorender\nprint(autorender.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'ruby',
    content:
      '# Autorender Ruby API library\n\nThe Autorender Ruby library provides convenient access to the Autorender REST API from any Ruby 3.2.0+ application. It ships with comprehensive types & docstrings in Yard, RBS, and RBI – [see below](https://github.com/autorenderhq/autorender-ruby#Sorbet) for usage with Sorbet. The standard library\'s `net/http` is used as the HTTP transport, with connection pooling via the `connection_pool` gem.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Autorender MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40autorender%2Fnodejs-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBhdXRvcmVuZGVyL25vZGVqcy1tY3AiXSwiZW52Ijp7IkFVVE9SRU5ERVJfQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40autorender%2Fnodejs-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40autorender%2Fnodejs-mcp%22%5D%2C%22env%22%3A%7B%22AUTORENDER_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nDocumentation for releases of this gem can be found [on RubyDoc](https://gemdocs.org/gems/autorender).\n\nThe REST API documentation can be found on [autorender.mintlify.app](https://autorender.mintlify.app/).\n\n## Installation\n\nTo use this gem, install via Bundler by adding the following to your application\'s `Gemfile`:\n\n<!-- x-release-please-start-version -->\n\n```ruby\ngem "autorender", "~> 0.0.1"\n```\n\n<!-- x-release-please-end -->\n\n## Usage\n\n```ruby\nrequire "bundler/setup"\nrequire "autorender"\n\nautorender = Autorender::Client.new(\n  api_key: ENV["AUTORENDER_API_KEY"] # This is the default and can be omitted\n)\n\nfiles = autorender.files.list(limit: 10)\n\nputs(files.files)\n```\n\n\n\n\n\n### File uploads\n\nRequest parameters that correspond to file uploads can be passed as raw contents, a [`Pathname`](https://rubyapi.org/3.2/o/pathname) instance, [`StringIO`](https://rubyapi.org/3.2/o/stringio), or more.\n\n```ruby\nrequire "pathname"\n\n# Use `Pathname` to send the filename and/or avoid paging a large file into memory:\nupload = autorender.uploads.create(file: Pathname("/path/to/file"))\n\n# Alternatively, pass file contents or a `StringIO` directly:\nupload = autorender.uploads.create(file: File.read("/path/to/file"))\n\n# Or, to control the filename and/or content type:\nfile = Autorender::FilePart.new(File.read("/path/to/file"), filename: "/path/to/file", content_type: "…")\nupload = autorender.uploads.create(file: file)\n\nputs(upload.id)\n```\n\nNote that you can also pass a raw `IO` descriptor, but this disables retries, as the library can\'t be sure if the descriptor is a file or pipe (which cannot be rewound).\n\n### Handling errors\n\nWhen the library is unable to connect to the API, or if the API returns a non-success status code (i.e., 4xx or 5xx response), a subclass of `Autorender::Errors::APIError` will be thrown:\n\n```ruby\nbegin\n  upload = autorender.uploads.create(file: StringIO.new("<binary>"), file_name: "photo.jpg")\nrescue Autorender::Errors::APIConnectionError => e\n  puts("The server could not be reached")\n  puts(e.cause)  # an underlying Exception, likely raised within `net/http`\nrescue Autorender::Errors::RateLimitError => e\n  puts("A 429 status code was received; we should back off a bit.")\nrescue Autorender::Errors::APIStatusError => e\n  puts("Another non-200-range status code was received")\n  puts(e.status)\nend\n```\n\nError codes are as follows:\n\n| Cause            | Error Type                 |\n| ---------------- | -------------------------- |\n| HTTP 400         | `BadRequestError`          |\n| HTTP 401         | `AuthenticationError`      |\n| HTTP 403         | `PermissionDeniedError`    |\n| HTTP 404         | `NotFoundError`            |\n| HTTP 409         | `ConflictError`            |\n| HTTP 422         | `UnprocessableEntityError` |\n| HTTP 429         | `RateLimitError`           |\n| HTTP >= 500      | `InternalServerError`      |\n| Other HTTP error | `APIStatusError`           |\n| Timeout          | `APITimeoutError`          |\n| Network error    | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\n\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict, 429 Rate Limit, >=500 Internal errors, and timeouts will all be retried by default.\n\nYou can use the `max_retries` option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nautorender = Autorender::Client.new(\n  max_retries: 0 # default is 2\n)\n\n# Or, configure per-request:\nautorender.uploads.create(\n  file: StringIO.new("<binary>"),\n  file_name: "photo.jpg",\n  request_options: {max_retries: 5}\n)\n```\n\n### Timeouts\n\nBy default, requests will time out after 60 seconds. You can use the timeout option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nautorender = Autorender::Client.new(\n  timeout: nil # default is 60\n)\n\n# Or, configure per-request:\nautorender.uploads.create(\n  file: StringIO.new("<binary>"),\n  file_name: "photo.jpg",\n  request_options: {timeout: 5}\n)\n```\n\nOn timeout, `Autorender::Errors::APITimeoutError` is raised.\n\nNote that requests that time out are retried by default.\n\n## Advanced concepts\n\n### BaseModel\n\nAll parameter and response objects inherit from `Autorender::Internal::Type::BaseModel`, which provides several conveniences, including:\n\n1. All fields, including unknown ones, are accessible with `obj[:prop]` syntax, and can be destructured with `obj => {prop: prop}` or pattern-matching syntax.\n\n2. Structural equivalence for equality; if two API calls return the same values, comparing the responses with == will return true.\n\n3. Both instances and the classes themselves can be pretty-printed.\n\n4. Helpers such as `#to_h`, `#deep_to_h`, `#to_json`, and `#to_yaml`.\n\n### Making custom or undocumented requests\n\n#### Undocumented properties\n\nYou can send undocumented parameters to any endpoint, and read undocumented response properties, like so:\n\nNote: the `extra_` parameters of the same name overrides the documented parameters.\n\n```ruby\nupload =\n  autorender.uploads.create(\n    file: StringIO.new("<binary>"),\n    file_name: "photo.jpg",\n    request_options: {\n      extra_query: {my_query_parameter: value},\n      extra_body: {my_body_parameter: value},\n      extra_headers: {"my-header": value}\n    }\n  )\n\nputs(upload[:my_undocumented_property])\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` under the `request_options:` parameter when making a request, as seen in the examples above.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints while retaining the benefit of auth, retries, and so on, you can make requests using `client.request`, like so:\n\n```ruby\nresponse = client.request(\n  method: :post,\n  path: \'/undocumented/endpoint\',\n  query: {"dog": "woof"},\n  headers: {"useful-header": "interesting-value"},\n  body: {"hello": "world"}\n)\n```\n\n### Concurrency & connection pooling\n\nThe `Autorender::Client` instances are threadsafe, but are only are fork-safe when there are no in-flight HTTP requests.\n\nEach instance of `Autorender::Client` has its own HTTP connection pool with a default size of 99. As such, we recommend instantiating the client once per application in most settings.\n\nWhen all available connections from the pool are checked out, requests wait for a new connection to become available, with queue time counting towards the request timeout.\n\nUnless otherwise specified, other classes in the SDK do not have locks protecting their underlying data structure.\n\n## Sorbet\n\nThis library provides comprehensive [RBI](https://sorbet.org/docs/rbi) definitions, and has no dependency on sorbet-runtime.\n\nYou can provide typesafe request parameters like so:\n\n```ruby\nautorender.files.list(limit: 10)\n```\n\nOr, equivalently:\n\n```ruby\n# Hashes work, but are not typesafe:\nautorender.files.list(limit: 10)\n\n# You can also splat a full Params class:\nparams = Autorender::FileListParams.new(limit: 10)\nautorender.files.list(**params)\n```\n\n### Enums\n\nSince this library does not depend on `sorbet-runtime`, it cannot provide [`T::Enum`](https://sorbet.org/docs/tenum) instances. Instead, we provide "tagged symbols" instead, which is always a primitive at runtime:\n\n```ruby\n# :name_asc\nputs(Autorender::FileListParams::Sort::NAME_ASC)\n\n# Revealed type: `T.all(Autorender::FileListParams::Sort, Symbol)`\nT.reveal_type(Autorender::FileListParams::Sort::NAME_ASC)\n```\n\nEnum parameters have a "relaxed" type, so you can either pass in enum constants or their literal value:\n\n```ruby\n# Using the enum constants preserves the tagged type information:\nautorender.files.list(\n  sort: Autorender::FileListParams::Sort::NAME_ASC,\n  # …\n)\n\n# Literal values are also permissible:\nautorender.files.list(\n  sort: :name_asc,\n  # …\n)\n```\n\n## Versioning\n\nThis package follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions. As the library is in initial development and has a major version of `0`, APIs may change at any time.\n\nThis package considers improvements to the (non-runtime) `*.rbi` and `*.rbs` type definitions to be non-breaking changes.\n\n## Requirements\n\nRuby 3.2.0 or higher.\n\n## Contributing\n\nSee [the contributing documentation](https://github.com/autorenderhq/autorender-ruby/tree/main/CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Autorender TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@autorender/nodejs.svg?label=npm%20(stable))](https://npmjs.org/package/@autorender/nodejs) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@autorender/nodejs)\n\nThis library provides convenient access to the Autorender REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [autorender.mintlify.app](https://autorender.mintlify.app/). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Autorender MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40autorender%2Fnodejs-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBhdXRvcmVuZGVyL25vZGVqcy1tY3AiXSwiZW52Ijp7IkFVVE9SRU5ERVJfQVBJX0tFWSI6Ik15IEFQSSBLZXkifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40autorender%2Fnodejs-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40autorender%2Fnodejs-mcp%22%5D%2C%22env%22%3A%7B%22AUTORENDER_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @autorender/nodejs\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Autorender from '@autorender/nodejs';\n\nconst client = new Autorender({\n  apiKey: process.env['AUTORENDER_API_KEY'], // This is the default and can be omitted\n});\n\nconst files = await client.files.list({ limit: 10 });\n\nconsole.log(files.files);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Autorender from '@autorender/nodejs';\n\nconst client = new Autorender({\n  apiKey: process.env['AUTORENDER_API_KEY'], // This is the default and can be omitted\n});\n\nconst params: Autorender.UploadCreateParams = {\n  file: fs.createReadStream('path/to/file'),\n  file_name: 'photo.jpg',\n};\nconst upload: Autorender.UploadCreateResponse = await client.uploads.create(params);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed in many different forms:\n- `File` (or an object with the same structure)\n- a `fetch` `Response` (or an object with the same structure)\n- an `fs.ReadStream`\n- the return value of our `toFile` helper\n\n```ts\nimport fs from 'fs';\nimport Autorender, { toFile } from '@autorender/nodejs';\n\nconst client = new Autorender();\n\n// If you have access to Node `fs` we recommend using `fs.createReadStream()`:\nawait client.uploads.create({\n  file: fs.createReadStream('/path/to/file'),\n  file_name: 'product.jpg',\n});\n\n// Or if you have the web `File` API you can pass a `File` instance:\nawait client.uploads.create({ file: new File(['my bytes'], 'file'), file_name: 'product.jpg' });\n\n// You can also pass a `fetch` `Response`:\nawait client.uploads.create({\n  file: await fetch('https://somesite/file'),\n  file_name: 'product.jpg',\n});\n\n// Finally, if none of the above are convenient, you can use our `toFile` helper:\nawait client.uploads.create({\n  file: await toFile(Buffer.from('my bytes'), 'file'),\n  file_name: 'product.jpg',\n});\nawait client.uploads.create({\n  file: await toFile(new Uint8Array([0, 1, 2]), 'file'),\n  file_name: 'product.jpg',\n});\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst upload = await client.uploads\n  .create({ file: fs.createReadStream('path/to/file'), file_name: 'photo.jpg' })\n  .catch(async (err) => {\n    if (err instanceof Autorender.APIError) {\n      console.log(err.status); // 400\n      console.log(err.name); // BadRequestError\n      console.log(err.headers); // {server: 'nginx', ...}\n    } else {\n      throw err;\n    }\n  });\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Autorender({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.uploads.create({ file: fs.createReadStream('path/to/file'), file_name: 'photo.jpg' }, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Autorender({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.uploads.create({ file: fs.createReadStream('path/to/file'), file_name: 'photo.jpg' }, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Autorender();\n\nconst response = await client.uploads\n  .create({ file: fs.createReadStream('path/to/file'), file_name: 'photo.jpg' })\n  .asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: upload, response: raw } = await client.uploads\n  .create({ file: fs.createReadStream('path/to/file'), file_name: 'photo.jpg' })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(upload.id);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `AUTORENDER_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Autorender from '@autorender/nodejs';\n\nconst client = new Autorender({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Autorender from '@autorender/nodejs';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Autorender({\n  logger: logger.child({ name: 'Autorender' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.files.list({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Autorender from '@autorender/nodejs';\nimport fetch from 'my-fetch';\n\nconst client = new Autorender({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Autorender from '@autorender/nodejs';\n\nconst client = new Autorender({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Autorender from '@autorender/nodejs';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Autorender({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Autorender from '@autorender/nodejs';\n\nconst client = new Autorender({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Autorender from 'npm:@autorender/nodejs';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Autorender({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/autorenderhq/autorender-nodejs/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}

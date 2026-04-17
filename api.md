# Uploads

Types:

- <code><a href="./src/resources/uploads.ts">Upload</a></code>
- <code><a href="./src/resources/uploads.ts">UploadData</a></code>
- <code><a href="./src/resources/uploads.ts">UploadGenerateTokenResponse</a></code>

Methods:

- <code title="post /api/v1/uploads">client.uploads.<a href="./src/resources/uploads.ts">create</a>({ ...params }) -> Upload</code>
- <code title="post /api/v1/uploads/remote">client.uploads.<a href="./src/resources/uploads.ts">createFromURL</a>({ ...params }) -> Upload</code>
- <code title="post /api/v1/uploads/{token}">client.uploads.<a href="./src/resources/uploads.ts">createWithToken</a>(token, body) -> Upload</code>
- <code title="post /api/v1/generate-token">client.uploads.<a href="./src/resources/uploads.ts">generateToken</a>({ ...params }) -> UploadGenerateTokenResponse</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">FileListItem</a></code>
- <code><a href="./src/resources/files.ts">FileObject</a></code>
- <code><a href="./src/resources/files.ts">FileUpdateResponse</a></code>
- <code><a href="./src/resources/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/files.ts">FileDeleteResponse</a></code>
- <code><a href="./src/resources/files.ts">FileRenameResponse</a></code>

Methods:

- <code title="get /api/v1/files/{fileNo}">client.files.<a href="./src/resources/files.ts">retrieve</a>(fileNo) -> FileObject</code>
- <code title="patch /api/v1/files/{fileNo}">client.files.<a href="./src/resources/files.ts">update</a>(fileNo, { ...params }) -> FileUpdateResponse</code>
- <code title="get /api/v1/files">client.files.<a href="./src/resources/files.ts">list</a>({ ...params }) -> FileListResponse</code>
- <code title="delete /api/v1/files/{fileNo}">client.files.<a href="./src/resources/files.ts">delete</a>(fileNo) -> FileDeleteResponse</code>
- <code title="patch /api/v1/files/{fileNo}/rename">client.files.<a href="./src/resources/files.ts">rename</a>(fileNo, { ...params }) -> FileRenameResponse</code>

# Folders

Types:

- <code><a href="./src/resources/folders.ts">Folder</a></code>
- <code><a href="./src/resources/folders.ts">FolderListItem</a></code>
- <code><a href="./src/resources/folders.ts">FolderCreateResponse</a></code>
- <code><a href="./src/resources/folders.ts">FolderListResponse</a></code>
- <code><a href="./src/resources/folders.ts">FolderDeleteResponse</a></code>

Methods:

- <code title="post /api/v1/folders">client.folders.<a href="./src/resources/folders.ts">create</a>({ ...params }) -> FolderCreateResponse</code>
- <code title="get /api/v1/folders">client.folders.<a href="./src/resources/folders.ts">list</a>({ ...params }) -> FolderListResponse</code>
- <code title="delete /api/v1/folders/{folderNo}">client.folders.<a href="./src/resources/folders.ts">delete</a>(folderNo) -> FolderDeleteResponse</code>
- <code title="post /api/v1/folders/rename/{folderNo}">client.folders.<a href="./src/resources/folders.ts">rename</a>(folderNo, { ...params }) -> Folder</code>

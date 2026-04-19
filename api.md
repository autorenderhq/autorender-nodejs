# Uploads

Types:

- <code><a href="./src/resources/uploads.ts">UploadCreateResponse</a></code>
- <code><a href="./src/resources/uploads.ts">UploadCreateFromURLResponse</a></code>

Methods:

- <code title="post /api/v1/uploads">client.uploads.<a href="./src/resources/uploads.ts">create</a>({ ...params }) -> UploadCreateResponse</code>
- <code title="post /api/v1/uploads/remote">client.uploads.<a href="./src/resources/uploads.ts">createFromURL</a>({ ...params }) -> UploadCreateFromURLResponse</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">FileRetrieveResponse</a></code>
- <code><a href="./src/resources/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/files.ts">FileRenameResponse</a></code>

Methods:

- <code title="get /api/v1/files/{fileNo}">client.files.<a href="./src/resources/files.ts">retrieve</a>(fileNo) -> FileRetrieveResponse</code>
- <code title="get /api/v1/files">client.files.<a href="./src/resources/files.ts">list</a>({ ...params }) -> FileListResponse</code>
- <code title="delete /api/v1/files/{fileNo}">client.files.<a href="./src/resources/files.ts">delete</a>(fileNo) -> void</code>
- <code title="patch /api/v1/files/{fileNo}/rename">client.files.<a href="./src/resources/files.ts">rename</a>(fileNo, { ...params }) -> FileRenameResponse</code>

# Folders

Types:

- <code><a href="./src/resources/folders.ts">FolderCreateResponse</a></code>
- <code><a href="./src/resources/folders.ts">FolderRenameResponse</a></code>

Methods:

- <code title="post /api/v1/folders">client.folders.<a href="./src/resources/folders.ts">create</a>({ ...params }) -> FolderCreateResponse</code>
- <code title="delete /api/v1/folders/{folderNo}">client.folders.<a href="./src/resources/folders.ts">delete</a>(folderNo) -> void</code>
- <code title="post /api/v1/folders/rename/{folderNo}">client.folders.<a href="./src/resources/folders.ts">rename</a>(folderNo, { ...params }) -> FolderRenameResponse</code>

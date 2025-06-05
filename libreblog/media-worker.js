const saveFile = async function(filename, filedata, messageId) {
  try {
    const opfsRoot = await navigator.storage.getDirectory();
    const mediaFolder = await opfsRoot.getDirectoryHandle("media", {create: true});
    const fileHandle = await mediaFolder.getFileHandle(filename, {create: true});    
    const accessHandle = await fileHandle.createSyncAccessHandle();

    accessHandle.write(filedata, {at: 0});
    accessHandle.flush();
    accessHandle.close();
    
    postMessage({messageId: messageId, result: "ok", type: "response"});
  } catch(e) {
    postMessage({messageId: messageId, result: e, type: "error"});
  }
}

const deleteFile = async function(filename, messageId) {
  try {
    const opfsRoot = await navigator.storage.getDirectory();
    const mediaFolder = await opfsRoot.getDirectoryHandle("media");
    await mediaFolder.removeEntry(filename);
    
    postMessage({messageId: messageId, result: "ok", type: "response"});
  } catch(e) {
    postMessage({messageId: messageId, result: e, type: "error"});
  }  
}

const listFiles = async function(messageId) {
  try {
    const opfsRoot = await navigator.storage.getDirectory();
    const mediaFolder = await opfsRoot.getDirectoryHandle("media", {create: true});

    let result = [];
    for await (let [name, fileHandle] of mediaFolder) {
      const file = await fileHandle.getFile();
      const objectUrl = URL.createObjectURL(file);
      result.push({name: name, url: objectUrl});
    }
    
    postMessage({messageId: messageId, result: result, type: "response"});
  } catch(e) {
    postMessage({messageId: messageId, result: e, type: "error"});
  }  
}

const listFilesWithSize = async function(messageId) {
  try {
    const opfsRoot = await navigator.storage.getDirectory();
    const mediaFolder = await opfsRoot.getDirectoryHandle("media", {create: true});

    let result = [];
    for await (let [name, fileHandle] of mediaFolder) {
      const file = await fileHandle.getFile();
      const accessHandle = await fileHandle.createSyncAccessHandle();
      const fileSize = accessHandle.getSize();
      accessHandle.close();
      result.push({name: name, size: fileSize});
    }
    
    postMessage({messageId: messageId, result: result, type: "response"});
  } catch(e) {
    postMessage({messageId: messageId, result: e, type: "error"});
  }  
}

const listFilesWithData = async function(messageId) {
  try {
    const opfsRoot = await navigator.storage.getDirectory();
    const mediaFolder = await opfsRoot.getDirectoryHandle("media", {create: true});

    let result = [];
    for await (let [name, fileHandle] of mediaFolder) {
      const file = await fileHandle.getFile();
      const accessHandle = await fileHandle.createSyncAccessHandle();
      const fileSize = accessHandle.getSize();
      const dataView = new DataView(new ArrayBuffer(fileSize));
      accessHandle.read(dataView, { at: 0 });
      accessHandle.close();
      result.push({name: name, data: dataView.buffer});
    }
    
    postMessage({messageId: messageId, result: result, type: "response"});
  } catch(e) {
    postMessage({messageId: messageId, result: e, type: "error"});
  }  
}

const getFile = async function(filename, messageId) {
  try {
    const opfsRoot = await navigator.storage.getDirectory();
    const mediaFolder = await opfsRoot.getDirectoryHandle("media");
    const fileHandle = await mediaFolder.getFileHandle(filename);
    const file = await fileHandle.getFile();
    const objectUrl = URL.createObjectURL(file);
    const accessHandle = await fileHandle.createSyncAccessHandle();
    const fileSize = accessHandle.getSize();
    const dataView = new DataView(new ArrayBuffer(fileSize));
    accessHandle.read(dataView, { at: 0 });
    accessHandle.close();

    postMessage({messageId: messageId, result: {data: dataView.buffer, url: objectUrl}, type: "response"});
  } catch(e) {
    postMessage({messageId: messageId, result: e, type: "error"});
  } 
}

onmessage = function (msgEvent) {
  const msg = msgEvent.data;
  switch(msg.type) {
    case 'get-file':
      getFile(msg.filename, msg.messageId);
      break;
    case 'save-file':
      saveFile(msg.filename, msg.filedata, msg.messageId);
      break;
    case 'delete-file':
      deleteFile(msg.filename, msg.messageId);
      break;
    case 'list-files':
      listFiles(msg.messageId);
      break;
    case 'list-files-with-data':
      listFilesWithData(msg.messageId);
      break;
    case 'list-files-with-size':
      listFilesWithSize(msg.messageId);
      break;
    default:
  }
};
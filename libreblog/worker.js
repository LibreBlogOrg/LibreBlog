const startSqlite3 = async function(messageId, callback) {
  const {default: sqlite3InitModule} = await import ("../dependencies/sqlite3/sqlite3.mjs");
  try {
    self.sqlite3InitModule({
      print: self.console.log,
      printErr: self.console.error
    }).then((sqlite3) => callback(sqlite3));
  } catch (e) {
    self.postMessage({messageId: messageId, type: "error", result: e});
  }
}

const checkOpfs = function(sqlite3) {
  if (sqlite3.oo1.OpfsDb) {
    self.workerSqlite3 = sqlite3;
    self.postMessage({messageId: 'start-sqlite3', type: 'ok'});
  } else {
    self.postMessage({messageId: 'start-sqlite3', type: "error", result: "No Opfs"});
  }
}

const restoreDb = function(sqlite3, arrayBuffer) {
  try {
  sqlite3.oo1.OpfsDb.importDb('main.db', arrayBuffer);
  self.postMessage({messageId: 'restore-db', type: "ok"});
  } catch (e) {
    self.postMessage({messageId: messageId, type: "error", result: e});
  }
}

onmessage = function (msgEvent) {
  const msg = msgEvent.data;

  if (msg.messageId === 'restore-db') {
    startSqlite3(msg.messageId, (sqlite3) => restoreDb(sqlite3, msg.args.arrayBuffer));
  } else if (msg.messageId === 'start-sqlite3') {
    startSqlite3(msg.messageId, checkOpfs);
  } else if (msg.messageId === 'init-worker-api') {
    self.workerSqlite3.initWorker1API();
  }
};

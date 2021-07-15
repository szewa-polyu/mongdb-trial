module.exports.config = {
  database: {
    isDebug: false,
    connectionString:
      'mongodb+srv://<username>:<password>@cluster0.4g6ba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  },
  trial: {
    numOfRecordsPerRun: 30
  },
  log: {
    infoFile: 'log/info.txt',
    errorFile: 'log/error.txt',
    recordsFile: 'log/records.txt'
  }
};

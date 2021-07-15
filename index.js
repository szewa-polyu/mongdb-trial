const { createWriteStream } = require('fs');
const { EOL } = require('os');
const { config } = require('./config/config');
const { createAndSaveDummy } = require('./models/Dummy');
const { connectDbAsync } = require('./utils/dataAccess/connectDb');
const { disconnectDbAsync } = require('./utils/dataAccess/disconnectDb');
const { logErrorAsync } = require('./utils/logging/logError');
const { logInfoAsync } = require('./utils/logging/logInfo');

// https://github.com/udayakumarvdm/MongoDB-connection-using-Mongoose-and-Node-JS

const appendRecordsToFileAsync = (dummyMyIds, outputFile) =>
  new Promise((resolve, reject) => {
    const stream = createWriteStream(outputFile, {
      flags: 'a'
    });

    stream
      // https://nodejs.org/api/stream.html#stream_event_finish
      .on('finish', _ => {
        resolve();
      })
      // https://nodejs.org/api/stream.html#stream_event_finish
      .on('error', err => {
        reject(err);
      });

    for (let dummyMyId of dummyMyIds) {
      line = dummyMyId;
      stream.write(line + EOL);
    }

    stream.end();
  });

const startAsync = async _ => {
  try {
    const { isDebug, connectionString } = config.database;
    const { numOfRecordsPerRun } = config.trial;
    const { recordsFile } = config.log;

    const dummyMyIds = [];

    const logDelimiter = '--------------------------------';
    await logInfoAsync(logDelimiter);

    // Connect Database
    await connectDbAsync(connectionString, isDebug);

    for (let i = 0; i < numOfRecordsPerRun; i++) {
      const dummyMyId = await createAndSaveDummy();
      dummyMyIds.push(dummyMyId);
      console.log(`${i}: ${dummyMyId}`);
    }

    await appendRecordsToFileAsync(dummyMyIds, recordsFile);

    await disconnectDbAsync();

    await logInfoAsync(logDelimiter);
  } catch (err) {
    await logErrorAsync(err);
  }
};

startAsync();

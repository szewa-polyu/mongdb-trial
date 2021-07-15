const mongoose = require('mongoose');
const { logInfoAsync } = require('../logging/logInfo');
const { logErrorAsync } = require('../logging/logError');

const connectDbAsync = async (connStr, isDebug = false) => {
  if (isDebug) {
    mongoose.set('debug', true);
  }

  // https://mongoosejs.com/docs/connections.html
  mongoose.connection
    .on('connecting', async _ => {
      await logInfoAsync('[Mongoose] Connecting.');
    })
    .on('connected', async _ => {
      await logInfoAsync('[Mongoose] Connected.');
    })
    .on('disconnecting', async _ => {
      await logInfoAsync('[Mongoose] Disconnecting.');
    })
    .on('disconnected', async _ => {
      await logInfoAsync('[Mongoose] Disconnected.');
    })
    .on('close', async _ => {
      await logInfoAsync('[Mongoose] Close.');
    })
    .on('reconnected', async _ => {
      await logInfoAsync('[Mongoose] Reconnected.');
    })
    // https://mongoosejs.com/docs/
    .on('error', async err => {
      await logErrorAsync('[Mongoose] Connection error: ' + err);
    })
    .on('fullsetup', async _ => {
      await logInfoAsync('[Mongoose] Full setup.');
    })
    .on('all', async _ => {
      await logInfoAsync('[Mongoose] All.');
    })
    .on('reconnectFailed', async _ => {
      await logInfoAsync('[Mongoose] Reconnect failed.');
    });

  try {
    await mongoose.connect(connStr, {
      // DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
      // [MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
      useUnifiedTopology: true
      // // https://medium.com/cashpositive/the-hitchhikers-guide-to-mongodb-transactions-with-mongoose-5bf8a6e22033
      // replicaSet: 'rs'
    });
  } catch (err) {
    await logErrorAsync(err.message);
    process.exit(1);
  }
};

module.exports.connectDbAsync = connectDbAsync;

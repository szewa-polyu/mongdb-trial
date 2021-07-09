const mongoose = require('mongoose');

const connectDB = async (connStr, isDebug = false) => {
  try {
    if (isDebug) {
      mongoose.set('debug', true);
    }

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
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

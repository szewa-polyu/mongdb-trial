const { config } = require('./config/config');
const connectDB = require('./utils/dataAccess/connectDb');
const createDummy = require('./utils/mockData/createDummy');

// Connect Database
const { isDebug, connectionString } = config.database;
//connectDB(connectionString, isDebug);

createDummy();

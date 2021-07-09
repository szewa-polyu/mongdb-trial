const { config } = require('./config/config');
const connectDB = require('./utils/dataAccess/connectDb');
const { createAndSaveDummy } = require('./models/Dummy');

// https://github.com/udayakumarvdm/MongoDB-connection-using-Mongoose-and-Node-JS

const startAsync = async _ => {
  // Connect Database
  const { isDebug, connectionString } = config.database;
  connectDB(connectionString, isDebug);

  await createAndSaveDummy();
};

startAsync();

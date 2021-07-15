const mongoose = require('mongoose');

// https://mongoosejs.com/docs/api.html#mongoose_Mongoose-disconnect
const disconnectDbAsync = async _ => {
  await mongoose.disconnect();
};

module.exports.disconnectDbAsync = disconnectDbAsync;

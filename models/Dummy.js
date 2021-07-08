const { Schema } = require('mongoose');

const dummySchema = Schema({
  myId: {
    type: String
  },
  data: {
    ABCDE: {
      A: [String],
      B: [String],
      C: [String],
      D: [String],
      E: [String],
      F: [String],
      G: [String],
      H: [String],
      I: [String]
    },
    E: [String],
    F: [String],
    AG: {
      type: String
    },
    AH: {
      type: String
    },
    AI: {
      type: String
    },
    AP: {
      type: String
    },
    AX: {
      type: String
    },
    AY: {
      type: String
    },
    AZ: {
      type: String
    }
  },
  create: {
    type: String
  },
  update: {
    type: String
  }
});

module.exports.Dummy = mongoose.model('Dummy', dummySchema);

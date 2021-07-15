const mongoose = require('mongoose');
const dayjs = require('dayjs');

const dummySchema = mongoose.Schema({
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
    type: Date,
    default: Date.now
  },
  update: {
    type: Date,
    default: Date.now
  }
});

const Dummy = mongoose.model('dummy', dummySchema);

const createDummy = _ => {
  return new Dummy({
    myId: dayjs().format('YYYYMMDDTHHmmSSS'),
    data: {
      ABCDE: {
        A: ['11.1', '111'],
        B: ['11.1', '111'],
        C: ['11.1', '111'],
        D: ['11.1', '111'],
        E: ['11.1', '111'],
        F: ['11.1', '111'],
        G: ['11.1', '111'],
        H: ['11.1', '111'],
        I: ['11.1', '111']
      },
      E: ['11.1', '111'],
      F: ['11.1', '111'],
      AG: '12314.12',
      AH: '12314.12',
      AI: '12314.12',
      AP: '12314.12',
      AX: '12314.12',
      AY: '12314.12',
      AZ: '12314.12'
    }
  });
};

const createAndSaveDummy = async _ => {
  const newDummy = createDummy();
  await newDummy.save();
  return newDummy.myId;
};

module.exports.createAndSaveDummy = createAndSaveDummy;

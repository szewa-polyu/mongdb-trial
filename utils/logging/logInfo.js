const { writeFile } = require('fs/promises');
const { EOL } = require('os');
const dayjs = require('dayjs');
const { config } = require('../../config/config');

const logInfoFile = config.log.infoFile;

const logInfoAsync = async msg => {
  const timeStampedMsg = dayjs().format('YYYY-MM-DDTHH:mm:SSS') + ' -- ' + msg;
  console.log(timeStampedMsg);
  await writeFile(logInfoFile, timeStampedMsg + EOL, { flag: 'a' });
};

module.exports.logInfoAsync = logInfoAsync;

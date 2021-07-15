const { writeFile } = require('fs/promises');
const { EOL } = require('os');
const dayjs = require('dayjs');
const { config } = require('../../config/config');

const logErrorFile = config.log.errorFile;

const logErrorAsync = async err => {
  const timeStamp = dayjs().format('YYYY-MM-DDTHH:mm:SSS');
  const timeStampedMsg = timeStamp + ' -- ' + (err.stack || err);
  console.error(timeStampedMsg);
  await writeFile(logErrorFile, timeStampedMsg + EOL, { flag: 'a' });
};

module.exports.logErrorAsync = logErrorAsync;

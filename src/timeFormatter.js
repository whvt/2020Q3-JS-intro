const CustomError = require("../extensions/custom-error");

module.exports = function timeFornatter(sec) {
  //throw new CustomError('Not implemented');
  let minutes = Math.floor(sec / 60);
  let seconds = sec - minutes * 60;

  if (sec < 60) {
    return `${sec} sec`;
  } else if (sec % 60 == 0) {
    return `${sec / 60} min`;
  } else if (sec > 60 && sec % 60 !== 0) {
    return `${minutes} min ${seconds} sec`;
  } else {
    throw new Error("Error");
  }
};

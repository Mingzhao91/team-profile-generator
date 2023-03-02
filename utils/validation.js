function isValidString(str) {
  return typeof str === "string" || str instanceof String;
}

exports.isValidString = isValidString;

function isString(val) {
  return typeof val === "string" || val instanceof String;
}

function isInteger(val) {
  return Number.isInteger(val);
}

exports.isString = isString;
exports.isInteger = isInteger;

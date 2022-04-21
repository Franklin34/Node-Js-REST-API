"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect("mongodb://localhost/companydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log('Db is connected');
})["catch"](function (err) {
  return console.log(err);
});
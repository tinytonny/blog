var mongoose = require('mongoose');
var dbConfig = require('../dbConfig');
mongoose.connect(dbConfig.dbConnStr);
exports.Users = mongoose.model('users', new mongoose.Schema({
    username: String,
    password: String,
    email: String
}));
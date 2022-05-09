var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  transaction: {
    type: String,
    required: true
  },
  withdraw: {
    type: String,
    required: true
  },
  deposit: {
    type: String,
    required: true
  },
  balance:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
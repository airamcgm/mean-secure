var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DashboardSchema = new Schema({
  income: {
    type: Number,
    required: true
  },
  expenses: {
    type: Number,
    required: true
  },
  balance: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Dashboard', DashboardSchema);
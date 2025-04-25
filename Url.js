const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  fullUrl: String,
  shortId: String,
  clicks: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  expireAt: Date,
});

urlSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model('Url', urlSchema);

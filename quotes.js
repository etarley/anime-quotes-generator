import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true,
  },
  character: {
    type: String,
    required: true,
  },
  anime: {
    type: String,
    required: true,
  },
});

quoteSchema.pre('save', async function (next) {
  next();
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;

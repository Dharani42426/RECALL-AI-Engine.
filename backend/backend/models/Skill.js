const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String, // e.g., "Full-Stack Development"
    required: true
  },
  overallMastery: {
    type: Number,
    default: 0 // The AI will calculate this by averaging the nested topics
  }
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);

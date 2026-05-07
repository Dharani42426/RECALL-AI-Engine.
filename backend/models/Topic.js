const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  skillId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill', // This links the topic up to its parent Skill
    required: true
  },
  name: {
    type: String, // e.g., "React Hooks"
    required: true
  },
  masteryScore: {
    type: Number,
    default: 0 // e.g., 68% (Determined by AI Semantic Grading)
  },
  // This array stores the specific history so we can draw those micro-graphs!
  history: [{
    date: { type: Date, default: Date.now },
    score: Number,
    aiFeedback: String // e.g., "User understands state, but struggles with useEffect"
  }]
}, { timestamps: true });

module.exports = mongoose.model('Topic', topicSchema);

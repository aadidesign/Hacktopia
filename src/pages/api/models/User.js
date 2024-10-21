const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: /.+@pccoepune\.org$/, 
  },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['faculty', 'admin', 'HOD'],
    required: true
  },
  department_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  points: { type: Number, default: 0 }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  status: {
    type: String,
    enum: ["Active", "Pending Confirmation"]
  },
  confirmationCode:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  }
}, {
  versionKey: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;

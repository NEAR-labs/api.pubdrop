import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const user = new Schema({
  email: {
    type: String,
    index: true,
    unique: true,
    required: true,
  },
  confirmationCode: Number,
  isConfirmed: Boolean,
  sentAt: { type: Date, default: Date.now },
  confirmAttemptAt: Date,
  publicKey: String,
  secretKey: String,
});

export const User = model('User', user);

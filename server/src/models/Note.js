import { Schema, model } from 'mongoose';

const NoteSchema = new Schema({
  title: String,
  content: String,
  author: String,
  date: {
    type: Date,
    default: Date.now
  },
}, {
  timestamps: true,
  versionKey: false
});

export default model('Note', NoteSchema, 'notes');
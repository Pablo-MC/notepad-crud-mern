import { Schema, model } from 'mongoose';
import autopopulate from 'mongoose-autopopulate';

const NoteSchema = new Schema({
  title: String,
  content: String,
  author: {
    ref: 'User',
    type: Schema.Types.ObjectId,
    autopopulate: true
  },
  date: {
    type: Date,
    default: Date.now
  },
}, {
  timestamps: true,
  versionKey: false
});

NoteSchema.plugin(autopopulate);

export default model('Note', NoteSchema, 'notes');

// NotesSchema.plugin(require('mongoose-autopopulate'));
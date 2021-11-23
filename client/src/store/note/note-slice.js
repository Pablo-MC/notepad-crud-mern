import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
  name: 'note',
  initialState: {
    notes: [],
    note: null
  },
  reducers: {
    getNotes(state, action) {
      state.notes = action.payload.notes;
    },
    getNote(state, action) {
      state.note = action.payload.note;
    },
    create(state, action) {
      console.log(action.payload.note);
      state.notes.push({ ...action.payload.note });
    },
    delete(state, action) {
      state.notes = state.notes.filter(note => note._id !== action.payload.id);
    }
  }
})

export const noteActions = noteSlice.actions;

export default noteSlice;
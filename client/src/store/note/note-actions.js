import { noteActions } from './note-slice';

import clientAxios from '../../lib/axios';

export const getNotes = (userId) => {
  return async function (dispatch) {
    try {
      const res = await clientAxios.get(`/api/note/user/${userId}`);
      dispatch(noteActions.getNotes({ notes: res.data }));
    } catch (error) {
      console.log(error);
    }
  }
}

export const getNote = (noteId) => {
  return async function (dispath) {
    try {
      const res = await clientAxios.get(`/api/note/${noteId}`);
      dispath(noteActions.getNote({ note: res.data }));
    } catch (error) {
      console.log(error);
    }
  }
}

export const createNote = (note) => {
  return async function (dispatch) {
    try {
      console.log(note);
      const res = await clientAxios.post('/api/note/', note);
      console.log(res.data);
      dispatch(noteActions.create({ note: res.data }));
    } catch (error) {
      console.log(error);
    }
  }
}

export const deleteNote = (id) => {
  return async function (dispatch) {
    try {
      await clientAxios.delete(`/api/note/${id}`);
      dispatch(noteActions.delete({ id: id }));
    } catch (error) {
      console.log(error);
    }
  }
}

import Note from '../models/Note';

export const getAllNotes = async function (req, res) {
  try {
    const notes = await Note.find().sort({ _id: -1 });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getNotesByUser = async function (req, res) {
  try {
    const notes = await Note.find({ author: req.params.userId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getNote = async function (req, res) {
  try {
    const note = await Note.findById(req.params.id); // :id
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const createNote = async function (req, res) {
  try {
    const { title, content, author } = req.body;
    const newNote = new Note({
      title: title,
      content: content,
      author: author
    });
    await newNote.save();
    res.status(200).json(newNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateNote = async function (req, res) {
  try {
    await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: 'Note updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const deleteNote = async function (req, res) {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Note deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

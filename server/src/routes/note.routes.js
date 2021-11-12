import { Router } from 'express';
import * as noteCtrl from '../controllers/note.controller';

const router = Router();

router.get('/', noteCtrl.getAllNotes);
router.post('/', noteCtrl.createNote);

router.get('/:id', noteCtrl.getNote);
router.put('/:id', noteCtrl.updateNote);
router.delete('/:id', noteCtrl.deleteNote);


export default router;
import express from 'express';
import { createNotes, delteteNotes, getNotes, getNotesById, updateNotes } from '../Controller/NotesController.js'

const router = express.Router();
router.get('/',getNotes);
router.get('/:id',getNotesById);
router.post('/',createNotes);
router.put('/:id',updateNotes);
router.delete('/:id',delteteNotes);

export default router;
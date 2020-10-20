import express from 'express';
import {
  createMusic,
  deleteMusicById,
  getMusicById,
  listMusic,
  updateMusicById,
} from '../controllers/music.js';

const musicRouter = express.Router();

// CRUD

// READ

// RESTful pattern for API

// NOTE: Always routes called controllers

// List all music resources
musicRouter.get('/music', listMusic);
// List a music resource
musicRouter.get('/music/:id', getMusicById);
// Create
musicRouter.post('/music', createMusic);
// Update
musicRouter.put('/music/:id', updateMusicById);
// Delete
musicRouter.delete('/music/:id', deleteMusicById);

export default musicRouter;

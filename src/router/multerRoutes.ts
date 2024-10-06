import express from 'express';
import { upload } from '../config/multer.js';

const router = express.Router();

router.post('/upload-image', upload.single('imageFile'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    res.status(200).json({
      message: 'Image uploaded successfully!',
      filePath: req.file.path,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading image', error });
  }
});

export { router };
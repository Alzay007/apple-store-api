import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';

export const getBannerImages = (req: Request, res: Response): void => {
  const bannersDir = path.join(process.cwd(), 'src', 'uploads', 'banners');

  fs.readdir(bannersDir, (err, files) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading banners directory', error: err });
    }
    const images = files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/.test(file));
    const imagePaths = images.map(image => `uploads/banners/${image}`);

    res.status(200).json(imagePaths);
  });
}

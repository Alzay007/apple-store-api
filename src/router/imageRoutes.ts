import express from 'express';
import { getBannerImages } from '../controllers/imageController.js';

const router = express.Router();

router.get('/banners', getBannerImages);

export { router };

import express from 'express';
import {createProduct, getProductByIdService} from '../services/Product';

const router = express.Router();

router.post('/product', createProduct);
router.get('/videos/:video_id/product', getProductByIdService);

export default router;
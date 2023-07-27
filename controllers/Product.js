import { createProduct, getAllProductsService, getProductByIdService, getProductByVideoIdService } from "../services/Product.js";

export const createProduct = async (req, res) => {
    const {link, title, price} = req.body;
    
    const newProduct = await createProduct(link, title, price);

    res.status(201).json({newProduct});
;}

export const getAllProducts = async (req, res) => {
    const allProducts = getAllProductsService();
    
    res.json({allProducts});
};

export const getProduct = async (req, res) => {
    const {id} = req.params;
    
    const product = await getProductByIdService(id);

    res.json({product});
};

export const getProductByVideoId = async (req, res) => {
    const {video_id} = req.body;

    const videoProduct = await getProductByVideoIdService(video_id);

    res.json({data: videoProduct});
}
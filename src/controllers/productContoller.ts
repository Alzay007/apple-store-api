import { Request, Response } from 'express';
import Product from '../models/Product.js';

export class ProductController {
  static async getAllProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error: unknown) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  static async getProductById(req: Request, res: Response): Promise<void> {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }
      res.json(product);
    } catch (error: unknown) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  static async createProduct(req: Request, res: Response): Promise<void> {
    const newProduct = new Product(req.body);
    try {
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (error: unknown) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  static async updateProduct(req: Request, res: Response): Promise<void> {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedProduct) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }
      res.json(updatedProduct);
    } catch (error: unknown) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  static async deleteProduct(req: Request, res: Response): Promise<void> {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }
      res.status(204).send();
    } catch (error: unknown) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
}


import mongoose, { Document, Schema } from 'mongoose';

interface IProduct extends Document {
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  rating: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}

const productSchema: Schema<IProduct> = new Schema({
  category: { type: String, required: true },
  itemId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  fullPrice: { type: Number, required: true },
  rating: { type: Number, required: true },
  screen: { type: String, required: true },
  capacity: { type: String, required: true },
  color: { type: String, required: true },
  ram: { type: String, required: true },
  year: { type: Number, required: true },
  image: { type: String, required: true },
});

const Product = mongoose.model<IProduct>('Product', productSchema);

export default Product;
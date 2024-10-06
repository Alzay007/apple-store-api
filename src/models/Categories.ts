import mongoose, { Schema, Document } from 'mongoose';

interface IGood extends Document {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: {
    title: string;
    text: string[];
  }[];
}

interface ILaptop extends IGood {
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  cell: string[];
}

const laptopSchema = new Schema<ILaptop>({
  id: { type: String, required: true },
  namespaceId: { type: String, required: true },
  name: { type: String, required: true },
  capacityAvailable: { type: [String], required: true },
  capacity: { type: String, required: true },
  priceRegular: { type: Number, required: true },
  colorsAvailable: { type: [String], required: true },
  color: { type: String, required: true },
  images: { type: [String], required: true },
  description: [
    {
      title: { type: String, required: true },
      text: { type: [String], required: true }
    }
  ],
  screen: { type: String, required: true },
  resolution: { type: String, required: true },
  processor: { type: String, required: true },
  ram: { type: String, required: true },
  cell: { type: [String], required: true },
});

interface IWatch extends IGood { }

const WatchSchema: Schema<IWatch> = new Schema({
  id: { type: String, required: true, unique: true },
  namespaceId: { type: String, required: true },
  name: { type: String, required: true },
  capacityAvailable: { type: [String], required: true },
  capacity: { type: String, required: true },
  priceRegular: { type: Number, required: true },
  colorsAvailable: { type: [String], required: true },
  color: { type: String, required: true },
  images: { type: [String], required: true },
  description: [
    {
      title: { type: String, required: true },
      text: { type: [String], required: true }
    }
  ],
});

interface IIpad extends IGood {
  camera: string;
  zoom: string;
}

const IpadSchema: Schema<IIpad> = new Schema({
  id: { type: String, required: true, unique: true },
  namespaceId: { type: String, required: true },
  name: { type: String, required: true },
  capacityAvailable: { type: [String], required: true },
  capacity: { type: String, required: true },
  priceRegular: { type: Number, required: true },
  colorsAvailable: { type: [String], required: true },
  color: { type: String, required: true },
  images: { type: [String], required: true },
  description: [
    {
      title: { type: String, required: true },
      text: { type: [String], required: true }
    }
  ],
  camera: { type: String, required: true },
  zoom: { type: String, required: true },
}, { collection: 'tablets' });

interface IIphone extends IGood {
  camera: string;
  zoom: string;
}

const IphoneSchema: Schema<IIphone> = new Schema({
  id: { type: String, required: true, unique: true },
  namespaceId: { type: String, required: true },
  name: { type: String, required: true },
  capacityAvailable: { type: [String], required: true },
  capacity: { type: String, required: true },
  priceRegular: { type: Number, required: true },
  colorsAvailable: { type: [String], required: true },
  color: { type: String, required: true },
  images: { type: [String], required: true },
  description: [
    {
      title: { type: String, required: true },
      text: { type: [String], required: true }
    }
  ],
  camera: { type: String, required: true },
  zoom: { type: String, required: true },
}, { collection: 'phones' });

export const Phone = mongoose.model<IIphone>('Iphone', IphoneSchema);
export const Tablet = mongoose.model<IIpad>('Ipad', IpadSchema);
export const Watch = mongoose.model<IWatch>('Watch', WatchSchema);
export const Laptop = mongoose.model<ILaptop>('Laptop', laptopSchema);

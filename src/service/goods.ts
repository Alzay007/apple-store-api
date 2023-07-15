import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src', 'api', 'goods.json');
const goods = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

export function getAll() {
  return goods;
}

export function getById(productId: string) {
  return goods.find((product: { id: string }) => product.id === productId) || null;
}

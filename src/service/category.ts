import * as fs from 'fs';
import path from 'path';

function getProductsByCategory(category: string) {
  const filePath = path.resolve('src', 'api', `${category}.json`);
  const products = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return products;
}

export function getAllProducts(category: string) {
  return getProductsByCategory(category);
}

export function getProductById(category: string, productId: string) {
  const products = getProductsByCategory(category);
  const foundProduct = products.find((product: { id: string }) => product.id === productId);
  return foundProduct || null;
}

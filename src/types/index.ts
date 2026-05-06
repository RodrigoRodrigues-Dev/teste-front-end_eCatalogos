export interface SKU {
  id: number;
  size: string | number;
  stock: number;
  price: number;
  code: number;
  minQuantity: number;
  multipleQuantity: number;
}

export interface ProductImage {
  id: number;
  path: string;
  order: number;
}

export interface Product {
  id: number;
  name: string;
  hexCode: string;
  skus: SKU[];
  reference: string;
  type: 'NACIONAL' | 'IMPORTADO';
  gender: string;
  promptDelivery: boolean;
  description: string | null;
  categories: string;
  subcategories: string;
  images: ProductImage[];
}

export interface ProductsData {
  products: Product[];
}

// Map: productId -> skuId -> quantity
export type CartState = Record<number, Record<number, number>>;

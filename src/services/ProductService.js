import { Product } from '../models/Product.js';

export class ProductService {
    constructor(nextId = 1) {
        // Saber qual será o id do próximo produto criado - (ADAPTAÇÃO)
        this.nextId = nextId;
    }

    createProduct(name, price, stock) {
        const product = new Product(this.nextId, name, price, stock);
        this.nextId++;
        return product;
    }
}

// Módulo de Serviço para o Carrinho de Compras
import { Product } from '../models/Product.js';

export class CartService {
    constructor(cart) {
        this.cart = cart;
    }

    // Adicionar um item ao carrinho
    addItemToCart(product, quantity) {
        // Validar se o produto informado é realmente um produto válido
        if (!(product instanceof Product)) {
            throw new Error('Produto inválido');
        }

        // Validar o estoque desse produto com a quantidade pedida
        product.validateStock(quantity);

        // Adicionar esse item ao carrinho
        this.cart.addItem(product, quantity);
    }

    // Remover um item do carrinho
    removeItemFromCart(itemId) {
        this.cart.removeItem(itemId);
    }

    // Aumentar a quantidade de um item do carrinho
    addQuantityToCartItem(itemId) {
        this.cart.incrementItem(itemId);
    }

    // Diminuir a quantidade de um item do carrinho
    removeQuantityFromCartItem(itemId) {
        this.cart.decrementItem(itemId);
    }

    // Cálcular o preço total do carrinho
    calculateCartTotal() {
        return this.cart.calculateTotal();
    }

    // Retorna Carrinho
    getCart() {
        return this.cart;
    }
}

// Modelo para Entidade Carrinho
import { CartItem } from './CartItem.js';

export class Cart {
    constructor(id) {
        this.id = id;
        this.itens = [];

        // Saber qual será o id do próximo item do carrinho - (ADAPTAÇÃO)
        this.nextIdItem = 1;
    }

    // Adicionar um item ao carrinho
    addItem(product, quantity) {
        // Verificar se já existi esse produto no carrinho
        const existingItem = this.itens.find(
            (item) => item.product.id === product.id,
        );

        if (existingItem) {
            // SIM = Adicionar na quantidade atual
            existingItem.addQuantity(quantity);
        } else {
            // NÃO = Criar um novo item do carrinho com o produto e a quantidade
            const item = new CartItem(this.nextIdItem, product, quantity);
            this.nextIdItem++;
            this.itens.push(item);
        }
    }

    // Remover um item do carrinho
    removeItem(itemId) {
        const index = this.findItemIndex(itemId);

        // Remover apenas um item a partir do index encontrado
        this.itens.splice(index, 1);
    }

    // Incrementar 1 da quantidade de um item do carrinho
    incrementItem(itemId) {
        const index = this.findItemIndex(itemId);
        const item = this.itens[index];

        // Adicionar +1 produto
        item.incrementQuantity();
    }

    // Decrementar 1 da quantidade de um item do carrinho
    decrementItem(itemId) {
        const index = this.findItemIndex(itemId);
        const item = this.itens[index];

        if (item.quantity === 1) {
            // Apenas um produto = remover item do carrinho
            this.itens.splice(index, 1);
        } else {
            // + de um produto = decrementar 1 da quantidade de produtos
            item.decrementQuantity();
        }
    }

    // Calcular o preço total do carrinho
    calculateTotal() {
        return this.itens.reduce((total, item) => {
            return total + item.totalPrice();
        }, 0);
    }

    // Método auxiliar para encontra o index dos itens do carrinho
    findItemIndex(itemId) {
        // Encontrar o index do item que possui o mesmo id que o informado
        const index = this.itens.findIndex((item) => item.id === itemId);

        if (index === -1) {
            throw new Error('Item not found!');
        }

        return index;
    }
}

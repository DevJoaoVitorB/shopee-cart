// Modelo da Entidade Produto

export class Product {
    constructor(id, name, price, stock) {
        if (stock < 0) {
            throw new Error('Invalid stock!');
        }

        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    // Verificar estoque
    validateStock(quantity) {
        if (quantity <= 0) {
            throw new Error('Invalid quantity!');
        }

        if (quantity > this.stock) {
            throw new Error('Insufficient stock for this product.');
        }
    }

    // Função para adicionar ao estoque do produto
    addStock(quantity) {
        if (quantity <= 0) {
            throw new Error('Invalid quantity!');
        }

        this.stock += quantity;
    }

    // Função para remover do estoque do produto
    removeStock(quantity) {
        this.validateStock(quantity);
        this.stock -= quantity;
    }

    description() {
        return `[${this.id}] - ${this.name} | R$ ${this.price} | ${this.stock} un.`;
    }
}

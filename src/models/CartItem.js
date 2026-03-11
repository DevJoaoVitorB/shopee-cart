// Modelo para a Entidade Item do Carrinho

export class CartItem {
    constructor(id, product, quantity) {
        if (quantity <= 0) {
            throw new Error('Invalid quantity!');
        }

        this.id = id;
        this.product = product;
        this.quantity = quantity;
    }

    // Adicionar uma quantidade X à quantidade do produto do carrinho
    addQuantity(quantity) {
        if (quantity <= 0) {
            throw new Error('Invalid quantity!');
        }

        // Nova quantidade - quantidade atual + quantidade X
        const newQuantity = this.quantity + quantity;

        // Verificar estoque do produto com a nova quantidade
        this.product.validateStock(newQuantity);

        this.quantity = newQuantity;
    }

    // Remover uma quantidade X da quantidade do produto do carrinho
    removeQuantity(quantity) {
        if (quantity <= 0) {
            throw new Error('Invalid quantity!');
        }

        if (quantity > this.quantity) {
            throw new Error('Quantity exceeds the amount in the cart.');
        }

        this.quantity -= quantity;
    }

    // Incrementar 1 à quantidade do produto do carrinho
    incrementQuantity() {
        // Verificar estoque do produto com a nova quantidade
        this.product.validateStock(this.quantity + 1);
        this.quantity++;
    }

    // Decrementar 1 da quantidade do produto do carrinho
    decrementQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }

    // Cálculo do preço total do produto do carrinho
    totalPrice() {
        return this.product.price * this.quantity;
    }

    description() {
        return `[${this.id}] - ${this.product.name} | R$ ${this.product.price} un. | ${this.quantity} un. | R$ ${this.totalPrice().toFixed(2)}`;
    }
}

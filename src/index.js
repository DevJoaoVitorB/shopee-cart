// Arquivo principal do carrinho de compras da Shoppe
import { Cart } from './models/Cart.js';
import { CartService } from './services/CartService.js';
import { ProductService } from './services/ProductService.js';

// Carrinho
const cart = new Cart(1);

// Módulos de Serviços
const cartService = new CartService(cart);
const productService = new ProductService();

// Produtos para o carrinho
const p1 = productService.createProduct('Playstation 5 Slim', 3836.31, 20);
const p2 = productService.createProduct('Air Fryer 4.5L', 212.8, 36);
const p3 = productService.createProduct('Iphone 17 Pro Max', 11500, 47);
const p4 = productService.createProduct('Playstation 4 Slim', 1728.68, 15);
const p5 = productService.createProduct('Smart TV HQ 32"', 799.01, 53);

const displayCart = () => {
    console.log('\n======= Shopee Cart =======');

    cartService.getCart().itens.forEach((item, index) => {
        console.log(item.description());
    });

    console.log(`\nTotal: R$ ${cartService.calculateCartTotal().toFixed(2)}`);
    console.log('===========================');
};

(() => {
    console.log('🛒 Welcome to Shopee APP');

    // Tratamento de todo o sistema de carrinho
    try {
        // Itens adicionados ao carrinho
        cartService.addItemToCart(p1, 1);
        cartService.addItemToCart(p2, 4);
        cartService.addItemToCart(p3, 1);
        cartService.addItemToCart(p4, 2);
        cartService.addItemToCart(p5, 3);

        displayCart();

        // Remover unidades
        cartService.removeQuantityFromCartItem(2); // Produto ID = 2 (-1)
        cartService.removeQuantityFromCartItem(4); // Produto ID = 4 (-1)
        cartService.removeQuantityFromCartItem(5); // Produto ID = 5 (-1)

        // Adicionar unidades
        cartService.addQuantityToCartItem(1); // Produto ID = 1 (+1)
        cartService.addQuantityToCartItem(3); // Produto ID = 3 (+1)

        displayCart();

        // Remover itens do carrinho - Duas formas
        // 1ª Forma - Remoção total de todas as unidades
        cartService.removeItemFromCart(2);
        // 2ª Forma - Remoção da última unidade de um item
        cartService.removeQuantityFromCartItem(4);

        displayCart();
    } catch (e) {
        console.log(e.message);
    }
})();

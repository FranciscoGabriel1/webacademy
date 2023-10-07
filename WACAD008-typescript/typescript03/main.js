var _a;
class TV {
    constructor(model, manufacturer, price, resolution, sizeInInches) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.price = price;
        this.resolution = resolution;
        this.sizeInInches = sizeInInches;
    }
}
class CellPhone {
    constructor(model, manufacturer, price, memory) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.price = price;
        this.memory = memory;
    }
}
class Bicycle {
    constructor(model, manufacturer, price, wheelSize) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.price = price;
        this.wheelSize = wheelSize;
    }
}
class ShoppingCart {
    constructor() {
        this.cart = [];
    }
    addProduct(product) {
        this.cart.push(product);
        this.updateCart();
    }
    removeProduct(index) {
        this.cart.splice(index, 1);
        this.updateCart();
    }
    getTotalPrice() {
        return this.cart.reduce((total, product) => total + product.price, 0);
    }
    updateCart() {
        const cartList = document.getElementById('cartList');
        const cartTotal = document.getElementById('cartTotal');
        while (cartList.firstChild) {
            cartList.removeChild(cartList.firstChild);
        }
        this.cart.forEach((product, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.innerHTML = `${product.manufacturer} ${product.model} - R$ ${product.price.toFixed(2)} <button class="btn btn-danger btn-sm float-end" onclick="removeFromCart(${index})">Remover</button>`;
            cartList.appendChild(listItem);
        });
        cartTotal.textContent = `R$ ${this.getTotalPrice().toFixed(2)}`;
    }
}
const shoppingCart = new ShoppingCart();
function removeFromCart(index) {
    shoppingCart.removeProduct(index);
}
(_a = document.getElementById('productForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (e) => {
    e.preventDefault();
    const productType = document.getElementById('productType').value;
    const productModel = document.getElementById('productModel').value;
    const productManufacturer = document.getElementById('productManufacturer').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    let product; // Initialize as undefined
    if (!isNaN(productPrice)) {
        if (productType === 'TV') {
            const resolution = '';
            const sizeInInches = 0;
            product = new TV(productModel, productManufacturer, productPrice, resolution, sizeInInches);
        }
        else if (productType === 'Celular') {
            const memory = '';
            product = new CellPhone(productModel, productManufacturer, productPrice, memory);
        }
        else if (productType === 'Bicicleta') {
            const wheelSize = 0;
            product = new Bicycle(productModel, productManufacturer, productPrice, wheelSize);
        }
    }
    if (product) {
        shoppingCart.addProduct(product);
        document.getElementById('productModel').value = '';
        document.getElementById('productManufacturer').value = '';
        document.getElementById('productPrice').value = '';
    }
});

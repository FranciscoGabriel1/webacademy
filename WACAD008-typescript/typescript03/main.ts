    interface Product {
            model: string;
            manufacturer: string;
            price: number;
        }

        class TV implements Product {
            constructor(public model: string, public manufacturer: string, public price: number, public resolution: string, public sizeInInches: number) {}
        }

        class CellPhone implements Product {
            constructor(public model: string, public manufacturer: string, public price: number, public memory: string) {}
        }

        class Bicycle implements Product {
            constructor(public model: string, public manufacturer: string, public price: number, public wheelSize: number) {}
        }

        class ShoppingCart<T extends Product> {
            private cart: T[] = [];

            addProduct(product: T) {
                this.cart.push(product);
                this.updateCart();
            }

            removeProduct(index: number) {
                this.cart.splice(index, 1);
                this.updateCart();
            }

            getTotalPrice(): number {
                return this.cart.reduce((total, product) => total + product.price, 0);
            }

            private updateCart() {
                const cartList = document.getElementById('cartList') as HTMLUListElement;
                const cartTotal = document.getElementById('cartTotal') as HTMLSpanElement;

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

        const shoppingCart = new ShoppingCart<Product>();

        function removeFromCart(index: number) {
            shoppingCart.removeProduct(index);
        }

        document.getElementById('productForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            const productType = (document.getElementById('productType') as HTMLSelectElement).value;
            const productModel = (document.getElementById('productModel') as HTMLInputElement).value;
            const productManufacturer = (document.getElementById('productManufacturer') as HTMLInputElement).value;
            const productPrice = parseFloat((document.getElementById('productPrice') as HTMLInputElement).value);

            if (!isNaN(productPrice)) {
                let product: Product;

                if (productType === 'TV') {
                    const resolution = ''; // é possível adiconar a resolução aqui
                    const sizeInInches = 0; // é possível adiconar o tamanho em polegadas aqui
                    product = new TV(productModel, productManufacturer, productPrice, resolution, sizeInInches);
                } else if (productType === 'Celular') {
                    const memory = ''; // é possível adiconar a memória aqui
                    product = new CellPhone(productModel, productManufacturer, productPrice, memory);
                } else if (productType === 'Bicicleta') {
                    const wheelSize = 0; // é possível adiconar o tamanho do aro aqui
                    product = new Bicycle(productModel, productManufacturer, productPrice, wheelSize);
                }

                shoppingCart.addProduct(product);
                (document.getElementById('productModel') as HTMLInputElement).value = '';
                (document.getElementById('productManufacturer') as HTMLInputElement).value = '';
                (document.getElementById('productPrice') as HTMLInputElement).value = '';
            }
        });
const validations = require('../utils/validations');

describe('firstName()', () => {
  test('deve retornar o primeiro nome quando um nome completo é fornecido', () => {
    const result = validations.firstName('Francisco Gabriel');
    expect(result).toBe('Francisco');
  });

  test('deve retornar o nome completo quando não contém espaços em branco', () => {
    const result = validations.firstName('FranciscoGabriel');
    expect(result).toBe('FranciscoGabriel');
  });
});

describe('verifyStockAvailability()', () => {
  test('deve retornar verdadeiro quando a quantidade desejada está disponível em estoque', () => {
    const result = validations.verifyStockAvailability('laptop', 5);
    expect(result).toBe(true);
  });

  test('deve retornar falso quando a quantidade desejada não está disponível em estoque', () => {
    const result = validations.verifyStockAvailability('book', 1);
    expect(result).toBe(false);
  });
});

describe('calculateTotalPrice()', () => {
  test('deve calcular corretamente o preço total dos produtos', () => {
    const products = [
      { name: 'Product 1', price: 10, quantity: 2 },
      { name: 'Product 2', price: 15, quantity: 2 },
      { name: 'Product 3', price: 20, quantity: 1 }
    ];

    const totalPrice = validations.calculateTotalPrice(products);
      // a soma total do preco por unidade * quantidade de determinado produto
      //(10 * 2) + (15 * 2) + (20 * 1) = 20 + 30 + 20 = 70
    expect(totalPrice).toBe(70);
  });

  test('deve lançar um erro se o objeto do produto não tiver as propriedades preço e quantidade', () => {
    const invalidProduct = { name: 'Product 1' };
    // A mensagem de erro deve indicar que o objeto do produto deve ter as propriedades 'preço' e 'quantidade
    expect(() => validations.calculateTotalPrice([invalidProduct])).toThrowError('o objeto do produto deve ter as propriedades price e quantity.');
  });
});

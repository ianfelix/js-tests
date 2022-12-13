import Cart from './cart';

describe('Cart', () => {
  let cart;
  beforeEach(() => {
    cart = new Cart();
  });

  it('should return 0 when getTotal() is executed in a newly created', () => {
    expect(cart.getTotal()).toEqual(0);
  });

  it('should multiply quantity and price and receive the total amount', () => {
    const item = {
      product: {
        title: 'Iphone 13',
        price: 4400,
      },
      quantity: 2,
    };

    cart.add(item);

    expect(cart.getTotal(item)).toEqual(8800);
  });
});

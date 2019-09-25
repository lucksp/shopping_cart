export const getCartItems = state => {
  const { cart } = state.products;
  const products = state.products.data;

  const cartData = Object.keys(cart).map(cartItem => {
    const foundItem = products.find(
      product => product.id === parseInt(cartItem)
    );
    if (foundItem) {
      var temp = {
        title: foundItem.title,
        quantity: cart[cartItem],
        price: foundItem.price,
        id: foundItem.id,
      };
      return temp;
    }
  });
  return cartData;
};

import React from 'react';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { handleOpenModal } from '../features/modal/modalReducer';
// import { clearcart } from '../features/cart/cartReducer';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((state) => state.cart);

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>Your Cart</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      <header>
        <h2>Your Cart</h2>
      </header>
      <div>
        {cartItems &&
          cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => dispatch(handleOpenModal())}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;

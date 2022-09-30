import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartContainer from './components/CartContainer';
import {
  calculateCartTotal,
  handleFetchCartItems,
} from './features/cart/cartReducer';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isModalOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  // call useEffect
  useEffect(() => {
    dispatch(calculateCartTotal());
  }, [cartItems]);

  // call useEffect
  useEffect(() => {
    dispatch(handleFetchCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isModalOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;

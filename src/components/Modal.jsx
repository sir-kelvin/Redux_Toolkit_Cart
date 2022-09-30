import React from 'react';
import { handleCloseModal } from '../features/modal/modalReducer';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cart/cartReducer';

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>Remove all items from your Shopping cart?</h4>
        <div className='btn-container'>
          <button
            type='button'
            className='btn confirm-btn'
            onClick={() => {
              dispatch(handleCloseModal());
              dispatch(clearCart());
            }}
          >
            confirm
          </button>
          <button
            type='button'
            className='btn clear-btn'
            onClick={() => dispatch(handleCloseModal())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;

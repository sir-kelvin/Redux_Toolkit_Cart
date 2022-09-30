import React from 'react';
import { ChevronDown, ChevronUp } from '../icons';
import { removeItem, increase, decrease } from '../features/cart/cartReducer';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, title, img, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='cart-price'>${price}</h4>
        {/* remove button */}
        <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className='amount-btn'
          onClick={() =>
            dispatch(
              increase({
                id: id,
              })
            )
          }
        >
          <ChevronUp />
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button
          className='amount-btn'
          onClick={() => {
            if (amount <= 1) {
              dispatch(removeItem({ id }));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;

import React from "react";
import Link from "next/link";
import useCartInfo from "@/hooks/use-cart-info";
import { useState } from "react";

const CartCheckout = () => {
  const {total} = useCartInfo();
  const [shipCost,setShipCost] = useState(0);
  // handle shipping cost 
  const handleShippingCost = (value) => {
    if(value === 'free'){
      setShipCost(0)
    }
    else {
      setShipCost(value)
    }
  }
  return (
    <div className="tp-cart-checkout-wrapper">
      <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between">
        <span className="tp-cart-checkout-top-title">Товары</span>
        <span className="tp-cart-checkout-top-price">{total}₽</span>
      </div>
      <div className="tp-cart-checkout-shipping">
        <h4 className="tp-cart-checkout-shipping-title">Доставка</h4>
        <div className="tp-cart-checkout-shipping-option-wrapper">
          <div className="tp-cart-checkout-shipping-option">
            <input id="flat_rate" type="radio" name="shipping" onClick={()=> handleShippingCost(500)} />
            <label htmlFor="flat_rate">
              До двери: <span>500₽</span>
            </label>
          </div>
          <div className="tp-cart-checkout-shipping-option">
            <input id="local_pickup" type="radio" name="shipping" onClick={()=> handleShippingCost(0)} />
            <label htmlFor="local_pickup">
              В пункт выдачи: <span> 0₽</span>
            </label>
          </div>
        </div>
      </div>
      
      <div className="tp-cart-checkout-total d-flex align-items-center justify-content-between">
        <span>Итого</span>
        <span>{(total + shipCost).toFixed(2)}₽</span>
      </div>
      <div className="tp-cart-checkout-proceed">
        <Link href="/checkout" className="tp-cart-checkout-btn w-100">
          Оплатить
        </Link>
      </div>
    </div>
  );
};

export default CartCheckout;

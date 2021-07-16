import { useContext, useEffect, useState } from "react";
import { ContextApi, CartDataProps } from "contextApi";
import { ProductsProps } from "./useProducts";

function useCart() {
  const { handleCartData, cartData } = useContext(ContextApi);
  //
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [shippingValue, setShippingValue] = useState(0);

  useEffect(() => {
    let subtotalValue = 0;

    cartData.forEach((item) => {
      subtotalValue += item.price * item.quantity;
    });

    setSubtotal(subtotalValue);

    const shipping = subtotalValue >= 250 ? 0 : 10 * cartData.length;

    setShippingValue(shipping);

    setTotal(subtotalValue + shipping);
  }, [cartData]);

  function addCart(product: ProductsProps) {
    const existProduct = cartData.find((item) => {
      return item.id === product.id;
    });

    if (existProduct) {
      const newCartData = cartData.map((item) => {
        if (item.id === existProduct.id) {
          item.quantity += 1;
        }
        return item;
      });

      handleCartData(newCartData);
    } else {
      handleCartData([...cartData, { ...product, quantity: 1 }]);
    }
  }

  function removeCart(product: CartDataProps) {
    product.quantity -= 1;

    if (product.quantity <= 0) {
      const newCartData = cartData.filter((item) => {
        return item.id !== product.id;
      });

      handleCartData(newCartData);
    } else {
      const newCartData = cartData.map((item) => {
        if (item.id === product.id) {
          item = product;
        }
        return item;
      });

      handleCartData(newCartData);
    }
  }

  return { addCart, removeCart, subtotal, total, shippingValue };
}

export { useCart };

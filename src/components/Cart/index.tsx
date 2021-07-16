import { useContext } from "react";
import { ContextApi } from "contextApi";
import { CartContainer } from "./Cart.styles";
import Image from "next/image";
import { CartItem } from "components/CartItem";
import { useCart } from "data/hooks/useCart";

function Cart() {
  const { isOpenCart, handleIsOpenCart, cartData, handleIsOpenModal } =
    useContext(ContextApi);
  const { addCart, removeCart, total, subtotal, shippingValue } = useCart();

  return (
    <CartContainer active={isOpenCart}>
      <div className="header">
        <button className="backButton" onClick={() => handleIsOpenCart(false)}>
          <Image
            className="backIcon"
            src="/assets/arrow-down-icon.svg"
            alt="cart icon"
            width={30}
            height={30}
          />
        </button>
        <h1>Carrinho</h1>
      </div>

      <div className="content">
        {cartData.map((cartItem) => {
          return (
            <CartItem
              key={cartItem.id}
              image={`/assets/${cartItem.image}`}
              name={cartItem.name}
              price={cartItem.price}
              quantity={cartItem.quantity}
              onAdd={() => addCart(cartItem)}
              onRemove={() => removeCart(cartItem)}
            />
          );
        })}
      </div>

      <div className="footer">
        <div className="shipping">
          <span>Frete:</span>
          <span>R$ {shippingValue.toFixed(2).replace(".", ",")}</span>
        </div>

        <div className="subtotal">
          <span>Subtotal:</span>

          <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
        </div>

        <div className="total">
          <h2>Total:</h2>

          <h2>R$ {total.toFixed(2).replace(".", ",")}</h2>
        </div>

        {cartData.length !== 0 && (
          <button
            className="buy"
            onClick={() => {
              handleIsOpenCart(false);
              handleIsOpenModal(true);
            }}
          >
            Comprar
          </button>
        )}
      </div>
    </CartContainer>
  );
}

export { Cart };

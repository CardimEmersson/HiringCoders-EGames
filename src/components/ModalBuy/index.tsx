import { ContextApi } from "contextApi";
import { useCart } from "data/hooks/useCart";
import { useContext } from "react";
import { ModalBuyContainer } from "./ModalBuy.styles";

function ModalBuy() {
  const { isOpenModal, handleIsOpenModal, cartData, handleCartData } =
    useContext(ContextApi);
  const { total, subtotal, shippingValue } = useCart();
  return (
    <ModalBuyContainer active={isOpenModal}>
      <div className="content">
        <button
          className="closeButton"
          onClick={() => {
            handleCartData([]);
            handleIsOpenModal(false);
          }}
        >
          x
        </button>

        <div className="container">
          <h1>Compra finalizada</h1>

          <div className="values">
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
          </div>

          <div className="products">
            {cartData.map((item) => {
              return (
                <div key={item.id}>
                  {/* eslint-disable-next-line */}
                  <img src={`/assets/${item.image}`} alt="" />
                  <h3>{item.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ModalBuyContainer>
  );
}

export { ModalBuy };

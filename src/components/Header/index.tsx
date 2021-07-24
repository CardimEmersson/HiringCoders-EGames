import { useContext } from "react";
import { ContextApi } from "contextApi";
import { HeaderContainer } from "./Header.styles";
import Image from "next/image";

function Header() {
  const { handleIsOpenCart, cartData, handleIsOpenModalRegister } =
    useContext(ContextApi);

  return (
    <HeaderContainer>
      <h1>E-Games</h1>

      <div className="rightArea">
        <button
          className="register"
          onClick={() => handleIsOpenModalRegister(true)}
        >
          Cadastre-se
        </button>

        <button className="cart" onClick={() => handleIsOpenCart(true)}>
          <Image
            src="/assets/cart-icon.svg"
            alt="cart icon"
            width={40}
            height={40}
          />
          {cartData.length > 0 && (
            <span className="dotItems">{cartData.length}</span>
          )}
        </button>
      </div>
    </HeaderContainer>
  );
}

export { Header };

import { useContext } from "react";
import { ContextApi } from "contextApi";
import { HeaderContainer, ButtonAdministrativeArea } from "./Header.styles";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

function Header() {
  const {
    handleIsOpenCart,
    cartData,
    handleIsOpenModalRegister,
    handleIsOpenModalRegisterProducts,
  } = useContext(ContextApi);

  const router = useRouter();

  return (
    <HeaderContainer>
      <Link href="/">
        <a>
          <h1>E-Games</h1>
        </a>
      </Link>

      <div className="rightArea">
        {router.pathname === "/" && (
          <>
            <button
              className="register"
              onClick={() => handleIsOpenModalRegister(true)}
            >
              Cadastre-se
            </button>

            <Link href="/administrative-area" passHref={true}>
              <ButtonAdministrativeArea>
                Acessar Sistema
              </ButtonAdministrativeArea>
            </Link>

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
          </>
        )}
        {router.pathname === "/administrative-area" && (
          <ButtonAdministrativeArea
            onClick={() => handleIsOpenModalRegisterProducts(true)}
          >
            Cadastrar Produtos
          </ButtonAdministrativeArea>
        )}
      </div>
    </HeaderContainer>
  );
}

export { Header };

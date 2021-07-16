import { FilterSelect } from "components/FilterSelect";
import { MainContainer } from "./Main.styles";
import { CardProduct } from "components/CardProduct";
import { Cart } from "components/Cart";
import { useCart } from "data/hooks/useCart";
import { useContext, useState } from "react";
import { ContextApi } from "contextApi";
import { useProducts } from "data/hooks/useProducts";

function Main() {
  const { products } = useProducts();
  const { addCart } = useCart();
  const { filter } = useContext(ContextApi);

  const [typeFilter, setTypeFilter] = useState("alphabeticalOrder");

  const [email, setEmail] = useState("");

  const handleEmail = () => {
    localStorage.setItem("email", JSON.stringify({ email: email }));
    setEmail("");
  };

  return (
    <MainContainer>
      <div className="blackFridayContainer">
        <div className="leftContent">
          <h1>Aproveite as ofertas</h1>
          <h2>
            Produtos com até <strong>80%</strong> de desconto
          </h2>
          <p>Corra que já está acabando</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/black2.png" alt="" />

        <div className="rightContent">
          <h2>Cadastre seu e-mail para receber promoções</h2>

          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              handleEmail();
            }}
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Enviar</button>
          </form>
          <p>Receba todas as novidades da nossa loja por e-mail</p>
        </div>
      </div>

      <div className="filterContainer">
        <FilterSelect
          onChange={(e) => {
            setTypeFilter(e.currentTarget.value);
          }}
          defaultValue="alphabeticalOrder"
        >
          <option value="" disabled>
            Ordernar por
          </option>
          <option value="biggestPrice">Maior preço</option>

          <option value="lowestPrice">Menor preço</option>
          <option value="morePopular">Mais populares</option>
          <option value="lessPopular">Menos populares</option>
          <option value="alphabeticalOrder">Ordem alfabética</option>
        </FilterSelect>
      </div>

      <div className="grid">
        {products
          .sort((productA, productB) => filter(typeFilter, productA, productB))
          .map((product) => {
            return (
              <CardProduct
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                score={product.score}
                onAdd={() => addCart(product)}
              />
            );
          })}
      </div>

      <Cart />
    </MainContainer>
  );
}

export { Main };

import { CardProduct } from "components/CardProduct";
import { FilterSelect } from "components/FilterSelect";
import { ContextApi } from "contextApi";
import { useProducts } from "data/hooks/useProducts";
import { useContext, useEffect, useState } from "react";
import { MainAdministrativeContainer } from "./MainAdministrative.styles";

function MainAdministrative() {
  const { products, setProducts } = useProducts();
  const [typeFilter, setTypeFilter] = useState("alphabeticalOrder");
  const { filter } = useContext(ContextApi);

  const [newProducts, setNewProducts] = useState();

  useEffect(() => {
    let storageProducts = localStorage.getItem("registerProduct");
    if (storageProducts !== null) {
      storageProducts = JSON.parse(storageProducts);
      setProducts([
        ...products,
        // @ts-ignore: Object is possibly 'null'.
        ...storageProducts,
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainAdministrativeContainer>
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
              />
            );
          })}
      </div>
    </MainAdministrativeContainer>
  );
}

export { MainAdministrative };

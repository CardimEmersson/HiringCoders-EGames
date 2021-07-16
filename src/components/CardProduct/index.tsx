import { CardProductContainer } from "./CardProduct.styles";

interface CardProductProps {
  name: string;
  price: number;
  score: number;
  image: string;
  onAdd: () => void;
}

function CardProduct({ image, name, price, score, onAdd }: CardProductProps) {
  return (
    <CardProductContainer>
      {/* eslint-disable-next-line */}
      <img className="product" src={`/assets/${image}`} alt={`${name} image`} />

      <div className="cardBottom">
        <h2 className="title">{name}</h2>
        <h3 className="price">
          Preço: R$ {price.toFixed(2).replace(".", ",")}
        </h3>
        <span className="score">
          <strong>Popularidade: </strong> {score}
        </span>

        <button className="add" onClick={onAdd}>
          <span>Adicionar</span>
        </button>
      </div>
    </CardProductContainer>
  );
}

export { CardProduct };

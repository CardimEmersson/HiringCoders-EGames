import { CartItemContainer } from "./CartItem.styles";

interface CartItemProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

function CartItem({
  image,
  name,
  price,
  quantity,
  onAdd,
  onRemove,
}: CartItemProps) {
  return (
    <CartItemContainer>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" width={100} height={100} />

      <div className="content">
        <h2>{name}</h2>

        <div className="container">
          <div className="buttonsContainer">
            <button onClick={onRemove}>-</button>
            <span>{quantity}</span>
            <button onClick={onAdd}>+</button>
          </div>
          <span>
            <strong>Preço: </strong>R${" "}
            {(price * quantity).toFixed(2).replace(".", ",")}
          </span>
        </div>
      </div>
    </CartItemContainer>
  );
}

export { CartItem };

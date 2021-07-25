import { ContextApi } from "contextApi";
import { FormEvent, useContext, useState } from "react";
import { toast } from "react-toastify";
import { ModalBuyContainer as ModalRegisterProductsContainer } from "../ModalBuy/ModalBuy.styles";
import {
  FormRegister,
  Input,
  InputCurrency,
} from "../ModalRegister/ModalRegister.styles";
import { NumberFormatValues } from "react-number-format";
import { useProducts } from "data/hooks/useProducts";
import { Router, useRouter } from "next/dist/client/router";

function ModalRegisterProducts() {
  const { products, setProducts } = useProducts();
  const { handleIsOpenModalRegisterProducts, isOpenModalRegisterProducts } =
    useContext(ContextApi);
  const router = useRouter();

  const [id, setId] = useState<number>(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [image, setImage] = useState("");
  const [nameImage, setNameImage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let storageProducts = localStorage.getItem("registerProduct");

    if (storageProducts !== null) {
      storageProducts = JSON.parse(storageProducts);
      localStorage.clear();
      const newStorageProducts = [
        // @ts-ignore: Object is possibly 'null'.
        ...storageProducts,
        {
          id,
          name,
          price,
          score,
          image,
        },
      ];

      localStorage.setItem(
        `registerProduct`,
        JSON.stringify(newStorageProducts)
      );

      setProducts([...products, ...newStorageProducts]);
    } else {
      localStorage.setItem(
        `registerProduct`,
        JSON.stringify([
          {
            id,
            name,
            price,
            score,
            image,
          },
        ])
      );
      setProducts([
        ...products,
        {
          id,
          name,
          price,
          score,
          image,
        },
      ]);
    }

    setName("");
    setImage("");
    setNameImage("");
    e.currentTarget.reset();
    handleIsOpenModalRegisterProducts(false);
    toast.success("Produto cadastrado com sucesso!");
  };

  return (
    <ModalRegisterProductsContainer active={isOpenModalRegisterProducts}>
      <div className="content">
        <button
          className="closeButton"
          onClick={() => {
            handleIsOpenModalRegisterProducts(false);
          }}
        >
          x
        </button>

        <div className="container">
          <FormRegister onSubmit={handleSubmit}>
            <h1 className="title">Cadastro do Produtos</h1>
            <div className="twoColumns">
              <Input
                mask=""
                type="number"
                name="id"
                placeholder="Digite o id do produto"
                onChange={(e) => setId(Number(e.target.value))}
                required
              />
              <Input
                mask=""
                type="text"
                name="name"
                value={name}
                placeholder="Digite o nome do produto"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="threeColumns">
              <InputCurrency
                thousandSeparator={"."}
                prefix={"R$ "}
                defaultValue=""
                fixedDecimalScale={true}
                decimalSeparator={","}
                onValueChange={(value: NumberFormatValues) =>
                  setPrice(Number(value.value))
                }
                name={"price"}
                placeholder="Preço"
              />
              <Input
                mask=""
                type="number"
                name="score"
                placeholder="Digite o score"
                onChange={(e) => setScore(Number(e.currentTarget.value))}
                required
                min="0"
              />
              <Input
                mask=""
                type="file"
                name="image"
                value={nameImage}
                accept="image/png, image/jpeg, image/jpg"
                onChange={(e) => {
                  const fileImage = e.currentTarget.files;

                  // @ts-ignore: Object is possibly 'null'.
                  setNameImage(e.currentTarget.value);

                  // @ts-ignore: Object is possibly 'null'.
                  setImage(URL.createObjectURL(fileImage[0]));
                }}
                required
              />
            </div>

            <button type="submit" className="registerSubmit">
              Enviar
            </button>
          </FormRegister>
        </div>
      </div>
    </ModalRegisterProductsContainer>
  );
}

export { ModalRegisterProducts };

import { ContextApi } from "contextApi";
import { FormEvent, useContext, useState } from "react";
import { toast } from "react-toastify";
import { ModalBuyContainer as ModalRegisterContainer } from "../ModalBuy/ModalBuy.styles";
import { FormRegister, Input } from "./ModalRegister.styles";

function ModalRegister() {
  const { handleIsOpenModalRegister, isOpenModalRegister } =
    useContext(ContextApi);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleIsOpenModalRegister(false);
    localStorage.setItem(
      "registerClient",
      JSON.stringify({
        name,
        email,
        birthDate,
        cep,
        address,
        district,
        city,
        state,
        number,
      })
    );
    setName("");
    setEmail("");
    setBirthDate("");
    setCep("");
    setAddress("");
    setDistrict("");
    setCity("");
    setState("");
    setNumber("");
    toast.success("Cliente cadastrado com sucesso!");
  };

  return (
    <ModalRegisterContainer active={isOpenModalRegister}>
      <div className="content">
        <button
          className="closeButton"
          onClick={() => {
            handleIsOpenModalRegister(false);
          }}
        >
          x
        </button>

        <div className="container">
          <FormRegister onSubmit={handleSubmit}>
            <h1 className="title">Cadastro do Cliente</h1>

            <div className="twoColumns">
              <Input
                type="text"
                name="name"
                value={name}
                placeholder="Digite seu nome completo"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="date"
                name="birthDate"
                value={birthDate}
                placeholder="Data de Nascimento"
                onChange={(e) => setBirthDate(e.target.value)}
                required
              />
            </div>
            <Input
              type="text"
              name="email"
              value={email}
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="twoColumns">
              <Input
                type="text"
                name="cep"
                value={cep}
                placeholder="CEP"
                onChange={(e) => setCep(e.target.value)}
                required
              />
              <Input
                type="text"
                name="address"
                value={address}
                placeholder="Endereço"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="fourColumns">
              <Input
                type="text"
                name="district"
                value={district}
                placeholder="Bairro"
                onChange={(e) => setDistrict(e.target.value)}
                required
              />
              <Input
                type="text"
                name="city"
                value={city}
                placeholder="Cidade"
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <Input
                type="text"
                name="state"
                value={state}
                placeholder="Estado"
                onChange={(e) => setState(e.target.value)}
                required
              />
              <Input
                type="text"
                name="number"
                value={number}
                placeholder="Número"
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="registerSubmit">
              Enviar
            </button>
          </FormRegister>
        </div>
      </div>
    </ModalRegisterContainer>
  );
}

export { ModalRegister };

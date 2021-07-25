import styled from "styled-components";
import InputMask from "react-input-mask";
import NumberFormat from "react-number-format";

const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2rem;
  margin: auto 0;
  align-items: center;

  .title {
    margin: 2rem 0;
  }

  .twoColumns {
    width: 100%;
    display: flex;
    > input:first-child {
      margin-right: 0.25rem;
    }
    > input:last-child {
      margin-left: 0.25rem;
    }
  }

  .threeColumns {
    width: 100%;
    display: flex;

    > input {
      width: 33.3%;
    }

    > input:nth-child(2) {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }

  .fourColumns {
    width: 100%;
    display: flex;

    > input:first-child {
      margin-right: 0.25rem;
    }

    > input:nth-child(2),
    > input:nth-child(3) {
      margin-right: 0.25rem;
      margin-left: 0.25rem;
    }

    > input:last-child {
      margin-left: 0.25rem;
    }
  }

  .registerSubmit {
    margin: 2rem 0;
    width: 80%;
    border-radius: 0.5rem;
    background: var(--green);
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const Input = styled(InputMask)`
  width: 100%;
  border: 1px solid var(--white);
  border-radius: 0.2rem;
  padding: 0.5rem;
  margin-bottom: 1rem;

  &::placeholder {
    color: var(--white);
  }
`;

const InputCurrency = styled(NumberFormat)`
  width: 100%;
  border: 1px solid var(--white);
  border-radius: 0.2rem;
  padding: 0.5rem;
  margin-bottom: 1rem;

  &::placeholder {
    color: var(--white);
  }
`;

export { FormRegister, Input, InputCurrency };

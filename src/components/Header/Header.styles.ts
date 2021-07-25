import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--orange);
  padding: 0 4rem;
  background: var(--black);

  .rightArea {
    display: flex;
    align-items: center;

    .register {
      display: flex;
      align-items: center;
      border-radius: 0.25rem;
      background: var(--orange);
      color: var(--black);
      padding: 0.5rem 1.5rem;
      margin-right: 2rem;
      font-size: 1rem;
      font-weight: bold;
      border: 1px solid transparent;
      transition: all 0.3s;

      &:hover {
        border: 1px solid var(--orange);
        color: var(--orange);
        background: transparent;
      }
    }

    .cart {
      position: relative;
      cursor: pointer;

      .dotItems {
        position: absolute;
        top: 0;
        width: 1.2rem;
        height: 1.2rem;
        background: var(--orange);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const ButtonAdministrativeArea = styled.a`
  margin-right: 2rem;
  background: var(--green);
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border: 1px solid var(--green);
    color: var(--green);
    background: transparent;
  }
`;

export { HeaderContainer, ButtonAdministrativeArea };

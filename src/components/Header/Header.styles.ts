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

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export { HeaderContainer };

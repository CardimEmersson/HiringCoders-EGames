import styled from "styled-components";

const CartItemContainer = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid var(--gray-light);
  display: flex;

  .content {
    width: 70%;
    padding: 0 0.5rem;
    height: 100%;

    .container {
      margin-top: 1rem;
      display: flex;
      align-items: center;
    }

    .buttonsContainer {
      margin-right: 1rem;
      display: flex;
      align-items: center;

      button {
        background: var(--white);
        color: var(--black);
        font-weight: Bold;
        font-size: 1rem;
        position: relative;

        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
      }

      span {
        margin: 0 0.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    .content {
      h2 {
        font-size: 1.2rem;
      }

      span {
        font-size: 0.8rem;
      }

      .buttonsContainer {
        button {
          font-size: 1rem;
          position: relative;

          border-radius: 50%;
          width: 1.5rem;
          height: 1.5rem;
          display: flex;
          justify-content: center;
        }

        span {
          margin: 0 0.5rem;
        }
      }
    }
  }
`;

export { CartItemContainer };

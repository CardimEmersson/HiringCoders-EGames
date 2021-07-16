import styled, { css } from "styled-components";

interface CardContaineProps {
  active: boolean;
}

const CartContainer = styled.div<CardContaineProps>`
  z-index: 10;
  width: 30%;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  background: var(--gray);
  padding: 0 1rem;
  padding-bottom: 1rem;
  overflow: hidden;

  transition: all 0.5s;

  ${(props) =>
    props.active
      ? css`
          transform: translateX(0);
          opacity: 1;
        `
      : css`
          transform: translateX(100%);
          opacity: 0;
        `};

  .header {
    height: 5rem;
    border-bottom: 1px solid var(--orange);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .backButton {
      .backIcon {
        transform: rotate(-90deg);
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    height: 60%;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-thumb {
      background: #888;
    }
  }

  .footer {
    border-top: 1px solid var(--orange);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem 0;
    justify-self: flex-end;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .subtotal {
      span {
        font-weight: bold;
      }
    }

    .buy {
      margin-top: 2rem;
      padding: 0.5rem;
      background: var(--orange);
      border-radius: 0.625rem;
      font-size: 1.2rem;
      font-weight: bold;

      &:hover {
        background: var(--orange-hover);
      }
    }
  }

  @media (max-width: 768px) {
    width: 90%;

    .header {
      h1 {
        font-size: 1.5rem;
      }

      img {
        width: 20px;
        height: 20px;
      }
    }

    .content {
      height: 50%;
    }

    .footer {
      .buy {
        margin-top: 2rem;
        padding: 0.25rem;
        background: var(--orange);
        border-radius: 0.625rem;
        font-size: 1rem;
        font-weight: bold;

        &:hover {
          background: var(--orange-hover);
        }
      }
    }
  }
`;

export { CartContainer };

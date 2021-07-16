import styled, { css } from "styled-components";

interface ModalBuyProps {
  active: boolean;
}

const ModalBuyContainer = styled.div<ModalBuyProps>`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all ease-in 0.3s;

  ${(props) =>
    props.active
      ? css`
          z-index: 999;
          opacity: 1;
        `
      : css`
          opacity: 0;
          z-index: -1;
        `}

  .content {
    width: 60%;
    height: 90%;
    background-color: var(--gray-light);
    border: none;
    border-radius: 1rem;
    position: relative;

    display: flex;
    flex-direction: column;
    overflow: auto;

    ${(props) =>
      props.active
        ? css`
            transform: scale(1);
          `
        : css`
            transform: scale(0.5);
          `}

    transition: all ease-in-out 0.5s;

    &::-webkit-scrollbar {
      display: none;
    }

    .closeButton {
      border: none;
      outline: none;
      background: transparent;
      margin-left: auto;
      position: absolute;
      top: 10px;
      right: 20px;
      z-index: 1;

      font-size: 2rem;
      font-weight: bold;
      line-height: 0.8;
    }

    .container {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      .values {
        margin-top: 1rem;
        > div {
          display: flex;
          justify-content: space-between;
          flex: 1;

          span:first-child,
          h2:first-child {
            margin-right: 1rem;
          }
        }
      }

      .products {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;

        > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0.5rem;

          img {
            width: 10rem;
            height: 10rem;
            object-fit: cover;
            object-position: center;
          }

          h3 {
            text-align: center;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .content {
      width: 90%;
      height: 80%;
      flex-direction: column;

      .closeButton {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        font-size: 1.5rem;
        font-weight: bold;
        line-height: 0.8;
      }

      .container {
        padding: 0.5rem;

        h1 {
          font-size: 1.5rem;
          text-align: start;
        }

        h2 {
          font-size: 1.25rem;
        }

        h3 {
          font-size: 1rem;
        }
      }
    }
  }
`;

export { ModalBuyContainer };

import styled from "styled-components";

const CardProductContainer = styled.div`
  overflow-y: auto;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 15rem;
  padding: 1.4rem;
  border-radius: 0.625rem;

  transition: all 0.5s;

  .product {
    width: 12rem;
    height: 12rem;
    object-fit: cover;
    object-position: center;
    border: 1px solid transparent;

    transition: all 0.3s;
  }

  .cardBottom {
    overflow-y: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1.4rem;
    opacity: 0;
    transform: translateY(-40px);
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: all 0.5s;

    &::-webkit-scrollbar {
      display: none;
    }

    .title {
      margin-top: auto;
      text-align: center;
      color: var(--orange);
      margin-bottom: 0.5rem;
    }

    .price {
      margin-bottom: 0.25rem;
    }

    .add {
      margin-top: 0.5rem;
      padding: 0.5rem 2rem;
      border-radius: 0.625rem;
      background: var(--orange);

      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.3s;

      span {
        font-size: 1rem;
        line-height: 1;
      }

      &:hover {
        background: var(--orange-hover);
      }
    }
  }

  &:hover {
    height: auto;
    background-color: var(--gray);
    border-radius: 0.625rem;
    border: 1px solid var(--orange);

    transition: all 0.5s;

    .cardBottom {
      opacity: 1;
      transform: translateY(0px);
    }

    .product {
      border: 1px solid var(--orange);
      filter: blur(1px) brightness(0.5);
    }
  }

  @media (max-width: 768px) {
    width: 12rem;
    padding: 0.5rem;

    .product {
      width: 10rem;
      height: 10rem;
    }

    .cardBottom {
      padding: 0.5rem;
      transform: translateY(-40px);

      .title {
        font-size: 1.25rem;
      }

      .price {
        font-size: 1rem;
      }

      .score {
        font-size: 0.8rem;
      }

      .add {
        span {
          font-size: 0.8rem;
        }
      }
    }

    &:hover {
      height: auto;

      .cardBottom {
        opacity: 1;
        transform: translateY(0px);
      }

      .product {
        border: 1px solid var(--orange);
        filter: blur(1px) brightness(0.5);
      }
    }
  }
`;

export { CardProductContainer };

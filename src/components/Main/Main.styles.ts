import styled from "styled-components";

const MainContainer = styled.main`
  margin-top: 5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .blackFridayContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--orange);
    border-radius: 0.625rem;
    margin-bottom: 2rem;
    padding: 0 2rem;

    .leftContent {
      h1,
      h2,
      p {
        text-align: center;
        line-height: 1;
      }

      h1 {
        color: var(--black);
        margin-bottom: 1rem;
        font-size: 3rem;
      }

      h2 {
        font-size: 2rem;
        margin-bottom: 1rem;

        strong {
          color: var(--black);
        }
      }

      p {
        font-size: 1.5rem;
      }
    }

    img {
      object-fit: cover;
      object-position: center;
    }

    .rightContent {
      h2,
      p {
        text-align: center;
        color: var(--black);
      }

      form {
        display: flex;
        justify-content: center;
        margin: 2rem 0;
        -webkit-box-shadow: 0px 5px 10px 0px var(--black);
        box-shadow: 0px 5px 10px 0px var(--black);
        border-radius: 0.625rem;

        input {
          width: 80%;
          background: var(--black);
          font-size: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 0.625rem 0 0 0.625rem;
        }

        button {
          width: 20%;
          padding: 0 1rem;
          background: var(--green);
          border-radius: 0 0.625rem 0.625rem 0;
          color: var(--black);
          font-weight: bold;
        }
      }
    }
  }

  .filterContainer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  @media (max-width: 1100px) {
    .blackFridayContainer {
      flex-direction: column;
      padding: 2rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem;

    .blackFridayContainer {
      .leftContent {
        h1 {
          font-size: 2rem;
        }

        h2 {
          font-size: 1.5rem;
        }

        p {
          font-size: 1rem;
        }
      }
    }

    .grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  @media (max-width: 425px) {
    .blackFridayContainer {
      padding: 2rem 1rem;
      img {
        width: 100%;
      }

      .rightContent {
        form {
          input {
            width: 70%;
          }

          button {
            width: 30%;
          }
        }
      }
    }

    .grid {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }
  }
`;

export { MainContainer };

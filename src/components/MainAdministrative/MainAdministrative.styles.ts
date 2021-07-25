import styled from "styled-components";

const MainAdministrativeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  padding: 2rem;

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

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    @media (max-width: 425px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }
  }
`;

export { MainAdministrativeContainer };

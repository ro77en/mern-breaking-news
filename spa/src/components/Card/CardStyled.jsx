import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;

  box-shadow: #32326926 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  border-radius: 0.3rem;
  background-color: #fff;
  padding: 2rem;
`;

export const CardContent = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  height: 100%;

  & div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;

    grid-column: span 2;
  }

  & h2 {
    margin-bottom: 1rem;
  }

  & img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const CardInteractions = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;

  & i {
    margin-right: 0.3rem;
  }
`;

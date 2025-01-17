import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  gap: 1rem;
  max-width: 100%;

  box-shadow: #32326926 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  border-radius: 0.3rem;
  background-color: #fff;
`;

export const CardContent = styled.article`
  display: flex;
  height: 100%;
  width: 100%;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
  }

  & img {
    width: 40%;
    object-fit: cover;
    object-position: center;
    border-radius: 0 0.3rem 0.3rem 0;
  }
`;

export const CardHeader = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: ${(props) => (props.hero ? "1.3rem" : "1rem")};

  & h2 {
    margin-bottom: 1rem;
    width: 100%;
    font-size: ${(props) => (props.hero ? "3rem" : "1.5rem")};
  }
`;

export const CardInteractions = styled.article`
  display: flex;
  align-items: start;
  gap: 1rem;

  & section {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`;

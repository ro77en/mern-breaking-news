import styled from "styled-components";

export const SearchedContainer = styled.section`
  padding-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 50%;
  }
`;

export const SearchedPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  width: 80%;
  margin: 0 auto;
`;

export const SearchResults = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #fff;
  width: 80%;
  border-radius: 0.3rem;
  box-shadow: rgba(50, 50, 105, 0.15) 0 2px 5px 0px,
    rgba(0, 0, 0, 0.5) 0px 1px 1px 0px;

  & span {
    font-size: 1rem;
  }
`;

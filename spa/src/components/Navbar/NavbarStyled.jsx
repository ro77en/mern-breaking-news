import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ImgLogo = styled.img`
  max-width: 8rem;
  height: 6rem;
  object-fit: cover;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 210px;
  display: flex;
  align-items: center;

  & button {
    cursor: pointer;
    position: absolute;
    top: 1;
    right: 0.1rem;
    z-index: 10;
    border: none;
    background-color: #f5f5f5;
    color: #757575;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }

  & button:hover {
    transition: .3s;
    color: #f5f5f5;
    background-color: #757575;
  }

  & input {
    outline: none;
    font-size: 1rem;
    padding: 0.6rem;
    background-color: #f5f5f5;
    border: none;
    width: 100%;
    border-radius: 0.3rem;

    &:focus {
      border: 1px solid #0bade3;
    }
  }
`;

export const ErrorSpan = styled.span`
  background-color: #ffaeae;
  color: #9e0000;
  padding: 1rem;
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: bold;
`

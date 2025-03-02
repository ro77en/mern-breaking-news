import styled from 'styled-components'

export const ButtonStyled = styled.button`
  max-width: 100px;
  align-self: center;
  background-color: #0bade3;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  color: #fff;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: Roboto, Arial;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  &:hover {
    background-color: #0a86af;
  }
`
import { ButtonStyled } from "./ButtonStyled";

export function Button(props) {
  const { type, text, action } = props;
  return <ButtonStyled onClick={action} type={type}>{text}</ButtonStyled>;
}

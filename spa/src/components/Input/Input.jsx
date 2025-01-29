import { InputStyled } from "./InputStyled";

export function Input(props) {
  const { type, placeholder } = props;

  return <InputStyled type={type} placeholder={placeholder} />;
}

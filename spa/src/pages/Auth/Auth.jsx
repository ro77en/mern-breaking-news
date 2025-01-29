import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./AuthStyled";

export function Auth() {
  return (
    <AuthContainer>
      <Section type="signin">
        <h2>Entrar</h2>
        <form>
          <Input
            type="email"
            placeholder="E-mail"
            name="email"
            // register={inRegister}
          />
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            // register={inRegister}
          />
          <Button type="submit" text="entrar" />
        </form>
      </Section>
      <Section type="signup">
        <h2>Cadastre-se</h2>
        <form>
          <Input
            type="email"
            placeholder="E-mail"
            name="email"
            // register={inRegister}
          />
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            // register={inRegister}
          />
          <Input
            type="password"
            placeholder="Confirme a senha"
            name="password"
            // register={inRegister}
          />
          <Button type="submit" text="entrar" />
        </form>
      </Section>
    </AuthContainer>
  );
}

import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import { Button, ErrorSpan, ImgLogo, InputWrapper, Nav } from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const searchSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "A pesquisa não pode ser vazia" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "A pesquisa não pode ter apenas espaços em branco",
    }),
});

export function Navbar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });

  const navigate = useNavigate();

  const onSearch = (data) => {
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  };

  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <InputWrapper className="input-search-wrapper">
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
            <input
              {...register("title")}
              type="text"
              placeholder="Pesquise por um título"
            />
          </InputWrapper>
        </form>

        <Link to="/">
          <ImgLogo src={logo} alt="Logo Breaking News" />
        </Link>

        <Button>Entrar</Button>
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}

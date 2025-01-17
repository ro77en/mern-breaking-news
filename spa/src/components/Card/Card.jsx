import { TextLimit } from "../TextLimit/TextLimit";
import {
  CardContainer,
  CardHeader,
  CardContent,
  CardInteractions,
} from "./CardStyled";

export function Card(props) {
  return (
    <CardContainer>
      <CardContent>
        <div>
          <CardHeader hero={props.hero}>
            <h2>{props.title}</h2>
            <TextLimit hero={props.hero} text={props.text} limit={200} />
          </CardHeader>

          <CardInteractions>
            <section>
              <i className="bi bi-hand-thumbs-up"></i>
              <span>{props.likes?.length}</span>
            </section>
            <section>
              <i className="bi bi-chat-dots"></i>
              <span>{props.comments?.length}</span>
            </section>
          </CardInteractions>
        </div>

        <img src={props.banner} alt="img" />
      </CardContent>
    </CardContainer>
  );
}

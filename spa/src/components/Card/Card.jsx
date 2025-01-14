import { CardContainer, CardContent, CardInteractions } from "./CardStyled";

export function Card(props) {
  return (
    <CardContainer>
      <CardContent>
        <div>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
        <img src={props.banner} alt="img" />
      </CardContent>

      <CardInteractions>
        <div>
          <i className="bi bi-hand-thumbs-up"></i>
          <span>{props.likes}</span>
        </div>
        <div>
          <i className="bi bi-chat-dots"></i>
          <span>{props.comments}</span>
        </div>
      </CardInteractions>
    </CardContainer>
  );
}

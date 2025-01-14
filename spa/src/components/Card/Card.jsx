import { CardContainer, CardContent, CardInteractions} from "./CardStyled";

export function Card({ post }) {
  return (
    <CardContainer>
      <CardContent>
        <div>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
        </div>
        <img src={post.image} alt="img" />
      </CardContent>

      <CardInteractions>
        <div>
          <i className="bi bi-hand-thumbs-up"></i>
          <span>{post.likes}</span>
        </div>
        <div>
          <i className="bi bi-chat-dots"></i>
          <span>{post.comments}</span>
        </div>
      </CardInteractions>
    </CardContainer>
  );
}

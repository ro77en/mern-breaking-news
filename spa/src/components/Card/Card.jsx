import { Section } from "./CardStyled";

export function Card({ post }) {
  console.log(post);
  return (
    <Section>
      <h2>{post.title}</h2>
      <p>{post.text}</p>
      <img src={post.image} alt="img" />
      <i className="bi bi-hand-thumbs-up"></i>
      <span>{post.likes}</span>
      <i className="bi bi-chat-dots"></i>
      <span>{post.comments}</span>
    </Section>
  );
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postService from "../../services/postService";
import { Card } from "../../components/Card/Card";
import {
  SearchedContainer,
  SearchedPosts,
  SearchResults,
} from "./SearchStyled";

export function Search() {
  const [posts, setPosts] = useState([]);
  const { title } = useParams();

  async function searchPosts() {
    try {
      const res = await postService.searchByTitle(title);
      setPosts(res.data.results);
    } catch (err) {
      console.log(err);
      setPosts([]);
    }
  }

  useEffect(() => {
    searchPosts();
  }, [title]);

  return (
    <SearchedContainer>
      <SearchResults>
        <span>
          {posts.length
            ? `Encontramos ${posts.length} ${
                posts.length > 1 ? "resultados" : "resultado"
              } para:`
            : "Não encontramos resultados para:"}
        </span>
        <h2>{title}</h2>
      </SearchResults>
      <SearchedPosts>
        {posts.map((post) => {
          return (
            <Card
              key={post.id}
              post={post}
              title={post.title}
              text={post.text}
              banner={post.banner}
              likes={post.likes}
              comments={post.comments}
            />
          );
        })}
      </SearchedPosts>
    </SearchedContainer>
  );
}

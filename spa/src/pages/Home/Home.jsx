import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { HomeBody } from "./HomeStyled";

import postService from "../../services/postService";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  async function getPosts(offset = 0) {
    const postsRes = await postService.getAll(offset);
    setPosts(postsRes.data.results);
  }

  useEffect(() => {
    getPosts(1);
  }, []);

  return (
    <>
      <Navbar />
      <HomeBody>
        {posts.map((post) => {
          return (
            <Card
              key={post.id}
              post={post}
              title={post.title}
              text={post.text}
              banner={post.banner}
              likes={post.likes.length}
              comments={post.comments.length}
            />
          );
        })}
      </HomeBody>
    </>
  );
}

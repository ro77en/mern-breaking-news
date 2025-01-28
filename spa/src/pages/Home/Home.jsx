import { Card } from "../../components/Card/Card";
import { HomeBody, HomeHero } from "./HomeStyled";

import postService from "../../services/postService";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [latestPost, setLatestPost] = useState({});

  async function getPosts(offset=1, limit=4) {
    const postsRes = await postService.getAll(offset, limit);
    setPosts(postsRes.data.results);

    const latestPost = await postService.getLatest();
    setLatestPost(latestPost.data.latestPost);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <HomeHero>
        <Card
          hero="true"
          title={latestPost.title}
          text={latestPost.text}
          banner={latestPost.banner}
          likes={latestPost.likes}
          comments={latestPost.comments}
        />
      </HomeHero>
      <HomeBody>
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
      </HomeBody>
    </>
  );
}

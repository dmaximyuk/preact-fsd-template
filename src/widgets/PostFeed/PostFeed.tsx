import "./PostFeed.sass";

import type { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";

import { Title } from "@/shared/ui";
import { Post } from "@/entities/posts/ui";

import { getPosts } from "@/entities/posts/api";

import type { Posts } from "@/shared/lib/api/types";

interface PostFeedProps {}

const PostFeed: FunctionalComponent<PostFeedProps> = () => {
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Posts>([]);

  const handleGetPosts = async () => {
    setLoading(true);
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetPosts();
  }, []);

  if (isLoading) {
    return <Title>Loading...</Title>;
  }

  return (
    <div className={"PostFeed"}>
      {posts.map((v, i) => (
        <Post key={`${v.id}-${i}`} post={v} />
      ))}
    </div>
  );
};

export default PostFeed;

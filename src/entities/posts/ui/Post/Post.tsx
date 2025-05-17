import "./Post.sass";

import type { FunctionComponent } from "preact";

import type { Post as PostModel } from "@/shared/lib/api/types";

interface PostProps {
  post: PostModel;
}

const Post: FunctionComponent<PostProps> = (props) => {
  return (
    <div className={"Post"}>
      <div className={"Post__title"}>
        <p>#{props.post.id}</p>
        <p>{props.post.title}</p>
      </div>

      <div className={"Post__body"}>{props.post.body}</div>
    </div>
  );
};

export default Post;

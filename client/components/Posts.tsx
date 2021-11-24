import { Post as PostInterface } from "../interfaces/post";
import Post from "./Post";

interface PostsProps {
  posts: PostInterface[];
}

export default function Posts({ posts }: PostsProps) {
  console.log(posts);
  return (
    <div className="flex flex-wrap -mx-px md:-mx-3">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

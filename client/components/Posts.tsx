import Post from "./Post";

export default function Posts() {
  return (
    <div className="flex flex-wrap -mx-px md:-mx-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <Post key={i} />
      ))}
    </div>
  );
}

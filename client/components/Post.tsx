import Image from "next/image";
import { Post as PostInterface } from "../interfaces/post";

interface PostProps {
  post: PostInterface;
}

export default function Post({ post }: PostProps) {
  return (
    <div className="w-1/3 p-px md:px-3">
      <a href="#">
        <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
          <Image
            className="w-full h-full absolute left-0 top-0 object-cover"
            src={post.imageUrl}
            alt="image"
            layout="fill"
            height="500"
            width="500"
          />

          <i className="fas fa-square absolute right-0 top-0 m-1"></i>

          <div
            className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                          left-0 top-0 hidden"
          >
            <div
              className="flex justify-center items-center 
                              space-x-4 h-full"
            >
              <span className="p-2">
                <i className="fas fa-heart"></i>
                {post.likes}
              </span>

              <span className="p-2">
                <i className="fas fa-comment"></i>
                {post.comments}
              </span>
            </div>
          </div>
        </article>
      </a>
    </div>
  );
}

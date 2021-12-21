import React from 'react';
import Image from 'next/image';
import CommentSemantic from '../comments/Comments';

export default function PostDetail() {
  return (
    <article>
      <Image
        src='https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        layout='intrinsic'
        height={550}
        width={550}
      />
      <div>
        <div>
          <span></span>
        </div>
        <CommentSemantic />
      </div>
    </article>
  );
}

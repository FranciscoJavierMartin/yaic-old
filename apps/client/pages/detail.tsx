import type { NextPage } from 'next';
import Navbar from '@/components/navbar/Navbar';
import PostDetail from '@/components/post-detail/PostDetail';

const PageDetail: NextPage = () => {
  return (
    <div>
      <Navbar />
      <PostDetail />
    </div>
  );
};

export default PageDetail;

import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@/components/navbar/Navbar';
import ProfileInfo from '@/components/profile-info/ProfileInfo';
import PostList from '@/components/post-list/PostList';
import Modal from '@/components/modal/Modal';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Yaic</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <ProfileInfo />
      <PostList />
      {/* <Modal /> */}
    </div>
  );
};

export default Home;

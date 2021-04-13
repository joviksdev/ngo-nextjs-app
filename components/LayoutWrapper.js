import React from 'react';
import Head from 'next/head';
import NavBar from './layout/NavBar';

const Layout = props => {
  return (
    <div>
      <Head>
      </Head>
      <NavBar />
      {props.children}
    </div>
  );
};

export default Layout;

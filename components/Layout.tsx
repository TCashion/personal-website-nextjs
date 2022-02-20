import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { IChildrenProps } from '../types/types';

const Layout = ({ children }: IChildrenProps) => {
  return (
    <main>
      <Head>
        <title>Travis Cashion</title>
        <link rel="icon" href="/images/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Crimson+Text:400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <meta name="description" content="Travis Cashion's personal portfolio website."></meta>
      </Head>
      <Header />
      <section className="container mx-auto">{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;

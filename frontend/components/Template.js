import Head from 'next/head';
import Footer from './Footer';
import Nav from './Nav';

const Template = page => (
  <div className="container">
    <Head>
      <title>T&#230;nlen</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />
    
    <main>
      {page.children}
    </main>
    
    <Footer />
  </div>
);

export default Template;
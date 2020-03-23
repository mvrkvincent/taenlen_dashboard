import Head from 'next/head';
import Footer from './Footer';
import Nav from './Nav';

const Template = page => (
  <div className="container">
    <Head>
      <title>T&#230;nlen</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav loggedIn={page.loggedIn} setLoggedIn={page.setLoggedIn}/>
    
    <main>
      {page.children}
    </main>

    <span className="footnote">1.  <i>noun, welsh [taen·llen]</i>: A spreadsheet.</span>

    <Footer />
  </div>
);

export default Template;
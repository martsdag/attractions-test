import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Component } from 'react';

const Layout = () => (<>
  <Header />
  <main>
    <Component/>
  </main>
  <Footer />
</>
);

export default Layout;

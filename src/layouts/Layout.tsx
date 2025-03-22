import { Home } from '@/pages/Home';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

const Layout = () => (<>
  <Header />
  <main>
    <Home/>
  </main>
  <Footer />
</>
);

export default Layout;

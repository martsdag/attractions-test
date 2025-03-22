import { Home } from '@/pages/Home';
import { Footer } from '@/layouts/Footer/Footer';
import { Header } from '@/layouts/Header/Header';

const Layout = () => (<>
  <Header />
  <main>
    <Home/>
  </main>
  <Footer />
</>
);

export default Layout;

import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from './Footer';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer/>
    </div>
  );
}

export default DefaultLayout;

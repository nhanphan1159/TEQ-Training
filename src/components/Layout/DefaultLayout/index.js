import Header from '~/components/Layout/DefaultLayout/Header';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default DefaultLayout;

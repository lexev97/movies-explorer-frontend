import { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies'

function App() {
  return (
    <Fragment>
      <Header />
      {/* <Main /> */}
      <Movies />
      <Footer />
    </Fragment>
  );
}

export default App;

import {Fragment, useState, useEffect} from 'react';

import Loader from './components/Loader/Loader';
import Header from './layouts/Header/Header';
import Pages from './Pages.js';
import Footer from './layouts/Footer/Footer';

import './App.css';



export default function App() {
  const [mediaLoading, setMediaLoading] = useState(true);

  useEffect( () => {
    if ( document.readyState === 'complete' ) setMediaLoading(false);  
    window.addEventListener('load', () => setMediaLoading(false));
  }, [])


  return (
    <Fragment>
      { mediaLoading ? <Loader type="preloader" /> : false } 

      <Header />
      <Pages />
      <Footer />
    </Fragment>
  );
}

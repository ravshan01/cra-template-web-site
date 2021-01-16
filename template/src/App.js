import {useState, useEffect} from 'react';

import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

import './App.css';



export default function App() {
  const [mediaLoading, setMediaLoading] = useState(true);

  useEffect( () => {
    if ( document.readyState === 'complete' ) setMediaLoading(false);  
    window.addEventListener('load', () => setMediaLoading(false));
  }, [])


  return (
    <div className="App">

      <Header />
      <Footer />

    </div>
  );
}

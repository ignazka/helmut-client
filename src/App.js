import './App.css';

import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { Routes, Route } from 'react-router-dom';
import { PictureForm } from './components/PictureForm';
import { Galerie } from './components/Galerie';
import { Vita } from './components/Vita';
import { Work } from './components/Work';
import { useMediaQuery } from '@mui/material';
import { SimpleBottomNavigation } from './components/SimpleBottomNavigation';
function App() {
  const matches = useMediaQuery('(min-width: 1045px)');
  return (
    <div className='App'>
      <div className='body'>
      {matches ? <Main /> : <SimpleBottomNavigation />}
      <div className='content'>
      <Routes>
        
  
        <Route path='/add' element={<PictureForm />} />
        <Route exact path='/' element={<Galerie />}>
          <Route exact path=':image' element={<Work />} />
        </Route>
        <Route path='/vita' element={<Vita />} />
       
      </Routes>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import './App.css';

import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { Routes, Route } from 'react-router-dom';
import { PictureForm } from './components/PictureForm';
import { Galerie } from './components/Galerie';
import { Bio } from './components/Bio';
import { Work } from './components/Work';
import { useMediaQuery } from '@mui/material';
import { SimpleBottomNavigation } from './components/SimpleBottomNavigation';
function App() {
  const matches = useMediaQuery('(min-width: 1045px)');
  return (
    <div className='App'>
      {matches ? <Main /> : <SimpleBottomNavigation />}
      <Routes>
        <Route path='/add' element={<PictureForm />} />
        <Route exact path='/' element={<Galerie />}>
          <Route exact path=':image' element={<Work />} />
        </Route>
        <Route path='/bio' element={<Bio />} />
      </Routes>
    </div>
  );
}

export default App;

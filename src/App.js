// import Router from './Router';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/index.css';
import './styles/App.scss';
import Home from './Components/Home';
import CarouselApp from './Carousel/Carousel';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return(
<>
<BrowserRouter>
<Routes>
<Route path='/' Component={<Home/>}/>


</Routes>
<CarouselApp/>
</BrowserRouter>

</>


  )
}

export default App;

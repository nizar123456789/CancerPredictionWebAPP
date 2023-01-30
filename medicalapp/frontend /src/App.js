import { Fragment } from 'react';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import BrainTumor from './components/Diagnosis/BrainTumor';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Layout from './components/Layout/Layout';
import Navbars from './components/Navbar';
import Home from './Pages/Home';


const routes=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
   <Route  index path='/home'  element={<Home/>}/>
   <Route  index path='/BrainTumor'  element={<BrainTumor/>}/>
  </Route>
))
function App() {
  return (
    <Fragment>
     <RouterProvider router={routes}/>
      

    </Fragment>
    
  );
}

export default App;

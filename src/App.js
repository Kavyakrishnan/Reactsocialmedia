import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addpost from './Component/Addpost';
import Searchpost from './Component/Searchpost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './Component/View';

function App() {
  return (<div>
    
   <BrowserRouter>
   <Routes>


<Route path="/" exact element={<Addpost/>}/>
<Route path="/spost" exact element={<Searchpost/>}/>
<Route path="/view" exact element={<View/>}/>
   </Routes>
   
   
   </BrowserRouter>
  </div>
  );
}

export default App;

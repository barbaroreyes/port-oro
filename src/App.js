import Home from './pages/Home';
import React,{useState} from 'react';
import Header from './compo/Header';
import Footer from './compo/Footer'

import Data from './compo/Data'
import './App.css';

function App() {
  const allCat = [ ...new Set(Data.map((item, i) =>item.description ))];
   
  const [product,setProduct] =  useState(Data)
  const [button ,setButton]  =  useState(allCat)

  const filtered = (button) =>{
  
  const one = 
    Data.filter(item => 
    item.description === button)
    setProduct(one)  
  }
return (
    <div className="App">
      <Header/>
     <Home 
     product={product}
     filtered={filtered}
     button={button}
    />
     <Footer/>
    </div>
  );
}

export default App;

import Home from './pages/Home';
import React,{useState} from 'react';
import Data from './compo/Data'
import './App.css';

function App() {
  
  const [product,setProduct] =useState (Data)

//   const filterred = () =>{
   
//  const one= Data.filter(item => item.name === 'pepe')
//     return one
//     setProduct(one)
//     console.log(one)

//   }


  return (
    <div className="App">
     <Home product={product}/>
     
    </div>
  );
}

export default App;

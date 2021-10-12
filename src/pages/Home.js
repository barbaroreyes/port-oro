import React from 'react'
import Main from '../compo/Main'
import Button from '../compo/Button'
import LandinPage from './LandinPage'
import Contact from '../pages/Contact'
import {Switch,Route} from 'react-router-dom'
const Home = (props) => {
return (
    <div className="main">
     <Switch>
       <Route exact path='/'>
        <LandinPage/>
       </Route>
       <Route exact path='/projects'>
       <Button 
     {...props}
     />
    <Main 
    {...props}
    />
       </Route>
       <Route exact path='/about'>
         about
       </Route>
       <Route exact path='/contact'>
         <Contact/>
       </Route>
     </Switch>
    

    </div>
  )
}

export default Home

import React from 'react'
import Main from '../compo/Main'
import Button from '../compo/Button'
import Header from '../compo/Header'
import {Switch,Route} from 'react-router-dom'
const Home = (props) => {
return (
    <div className="main">
     <Switch>
       <Route exact path='/'>
         home
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
         contact
       </Route>
     </Switch>
    

    </div>
  )
}

export default Home

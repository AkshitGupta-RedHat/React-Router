import React, { Component } from 'react'
import Navbar from './components/navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/about'
import Post from "./components/post";
import './index.css';
class App extends Component {
 //Route Parameters
 // Usually see them on URLs for individual records
 // User Profile Route
 // User Profile Routes
 // mysite.com/users/yoshi1
 // mysite.com/users/mariotheman
 // Cooking recipies page:
 // mycookingsite.com/recipes/12345
 // mycookingsite.com/recipes/908

  
  render() {
    return (
      <BrowserRouter>  
        <div className="App">
        {/* So here Navbar is not receiving any routes */}
          <Navbar />
          {/* Since the post id is dynamic it can also be contact or about
          so eithe we can use /post/:post_id or we can use the switch tag  */}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/post/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    )

  }

}


export default App;

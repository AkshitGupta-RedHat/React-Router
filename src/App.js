import React, { Component } from 'react'
import Navbar from './components/navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/about'
class App extends Component {
  // '/' is the defualt route so it is always there when we move to any rooute 
  // '/' to avoid this we HAVE 2 approach 
  // 1. change it '/home'
  // 2. make exact match 

  
  render() {
    return (
      <BrowserRouter>  
        <div className="App">
        {/* So here Navbar is not receiving any routes */}
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
        </div>
      </BrowserRouter>
    )

  }

}


export default App;

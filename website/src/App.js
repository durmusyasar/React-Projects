import React, {Component} from 'react';
import './App.css';
import PageWrapper from './components/PageWrapper'
import AdminWrapper from './components/AdminWrapper'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// Pages
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Services from './components/Common/Services'
import Portfolio from './components/Common/Portfolio'
import Team from './components/Common/Team'
import Contact from './components/Pages/Contact'
import Login from './components/Pages/Login'


class App extends Component {
  render(){
    return (
      <Router>
        <Route
          path="/admin"
          render = {props => (
            <AdminWrapper>
              <Login />
            </AdminWrapper>
          )}
        />
          <Route 
            exact={true} path="/" render={props =>(
              <PageWrapper>
                <Home {...props}/>
              </PageWrapper>
            )}
          />
          <Route 
            path="/about" render={props =>(
              <PageWrapper>
                <About {...props}/>
              </PageWrapper>
            )}
          />
          <Route 
            path="/services" render={props =>(
              <PageWrapper>
                <Services {...props}/>
              </PageWrapper>
            )}
          />
          <Route 
            path="/portfolio" render={props =>(
              <PageWrapper>
                <Portfolio {...props}/>
              </PageWrapper>
            )}
          />
          <Route 
            path="/team" render={props =>(
              <PageWrapper>
                <Team {...props}/>
              </PageWrapper>
            )}
          />
          <Route 
            path="/contact" render={props =>(
              <PageWrapper>
                <Contact {...props}/>
              </PageWrapper>
            )}
          />
       </Router>
    );
  }
}

export default App;

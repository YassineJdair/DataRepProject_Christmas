//combines two operations
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Add } from './components/add';
import { View } from './components/view';
import { Update } from './components/update';

//app class that inherits from components

class App extends Component {
  //responsible for describing the view to be rendered to the browser window.
  render() {
    return (
      //allows changing browser url
      <Router>

        {/* //div is used in HTML to make divisions of content in the web page */}
        <div className="App">

          {/* //navigation bar to navigate to different pages */}
          <Navbar bg="dark" variant="dark">

            <Navbar.Brand href="#home">TopCharts</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/view">View</Nav.Link>
              <Nav.Link href="/add">Add</Nav.Link>
            </Nav>
          </Navbar>
          <br />

           {/* //switch statment evaluates an expression */}
          <Switch>
            <Route path='/' component={Content} exact/>
            <Route path='/add' component={Add} />
            <Route path='/view' component={View} />
            <Route path= '/update/:id' component = {Update}></Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

//export statement is used when creating JavaScript modules to export objects, functions, variables from the module
export default App;

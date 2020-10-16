



import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Route,Link} from "react-router-dom";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.commponent";
import TodoList from "./components/todos-list.component";

import logo from './logo.png';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component{
  render (){
    return (
      <Router>
        <Header></Header>

        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://codingthesmartway.com">
        <img src={logo} width="30" height="30" alt="codingthesmartway"/>
        </a>
        <Link to="/" className="navbar-brand">MERN Stack Demo 2020.</Link>
        
        <div>
        <ul className="navbar-nav mr-auto">
          {/* Todos */}
          <li className="navbar-item">
            <Link to="/" className="nav-link">Todos</Link>
          </li>
          {/* Create Todos */}
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Todos</Link>
          </li>
        </ul>
        </div>
        </nav>

        <Route path="/" exact component={TodoList}/>
        <Route path="/edit/:id"  component={EditTodo}/>
        <Route path="/create"  component={CreateTodo}/>
        </div>
        <Footer></Footer>
        
      </Router>
    );
  }
}

export default App;

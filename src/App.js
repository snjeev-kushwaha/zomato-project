import React from 'react';
import './App.css';
import Hotallist from './hotel/hotallist';
import Hotalreg from './hotel/hotelreg';
import Additem from './menu/additem';
import Viewitem from './menu/viewitem';
import {Container, Nav,Navbar} from "react-bootstrap";
import {Routes,Route,Link} from "react-router-dom";
function App() {
  return (
    <>
           <Navbar bg="dark" variant="dark">
           <Container>
           <Navbar.Brand href="#home">Zomato</Navbar.Brand>  
          <Nav className="me-auto">
            <Nav.Link><Link to="/hotalregistration">Hotal Registration</Link></Nav.Link>
            <Nav.Link><Link to="/hotallist">Hotal List</Link></Nav.Link>
            <Nav.Link><Link to="/menuitem">Add Item</Link></Nav.Link>
            <Nav.Link><Link to="/menulist">View Item</Link></Nav.Link>
          </Nav>
          </Container>
          </Navbar>
        <Routes>
              <Route path="/hotalregistration" element={<Hotalreg />} />
              <Route path="/hotallist" element={<Hotallist />} />
              <Route path="/menuitem" element={<Additem />} />
              <Route path="/menulist" element={<Viewitem />} />
        </Routes>
        </>
  );
}

export default App;

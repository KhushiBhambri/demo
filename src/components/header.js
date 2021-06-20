import React from 'react'
import { Navbar,Nav,FormControl,Button,Form } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import {LinkContainer} from 'react-router-bootstrap'


export const Header = (props) => {
    Header.defaultProps = {
        title: "Your Title Here",
        searchBar: false
      }
      
      Header.propTypes = {
        title: PropTypes.string.isRequired,
        searchBar: PropTypes.bool
      }

  return (
  <div>
         
  <Navbar bg="dark" variant="dark">
    <LinkContainer to="/">
    <Navbar.Brand href="/">{props.title}</Navbar.Brand>
    </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/home">
          <Nav.Link >Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link >About</Nav.Link>
        </LinkContainer>
        {/* <LinkContainer to="/contact">
          <Nav.Link >Contact</Nav.Link>
        </LinkContainer> */}
      </Nav>
        {
        (props.search)?
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
        </Form>
        :""
        }
    
    </Navbar>

  </div>
  )
}


import React from 'react';
import { Jumbotron, Button,Card, CardBody, Navbar, NavbarBrand, Nav, NavItem, Table,Row, Col} from 'reactstrap';
import {API} from './api';
import { FaAdjust, FaBeer } from "react-icons/fa";

import {
  Switch,
  Route,
  Link
} from "react-router-dom";


import useData from "./useData"

function App(props) {


  const stats = useData(API['stats']);
  const instructors = useData(API['instructors']);
  const courses = useData(API['courses']);
  const {history} = {...props};

  const goToDetails = (id) => {
    history.push("/details/" + id)
  }

  return (
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details"  component={Details}>
            <About />
          </Route>
        </Switch>
      <Navbar style ={{color: "white"}} color="dark" light expand="md">
        <NavbarBrand style ={{color: "white"}} href="/">Code.Hub Dashboard</NavbarBrand>
        <Nav>
          <NavItem style ={{float: "right"}}>
            Courses
          </NavItem>
          <NavItem>
            Add New Course
          </NavItem>
        </Nav>
      </Navbar>
      <Jumbotron>
        <h1 className="display-6">Welcome to Code.Hub Dashboard</h1>
        <p className="lead">Manage everything and have fun!</p>
        <hr className="my-2" />
      </Jumbotron>
      <Row>
      {stats.length ?
      
        stats.map(({id, title, amount}) => {
          return (
            <Col>
              <Card key={id}>
              <CardBody>
                {title}: <strong>{amount}</strong>
              </CardBody>
              </Card>
            </Col>
          )
        })
      : null}  
       </Row>
       <div className="courses">
        {courses.length ?
          <Table>
            <thead>
              <tr> 
                <th>Title</th><th>Bookable</th><th>Price</th><th>Date</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
              {
                courses.slice(-5).map(({id, title, imagePath, price, dates,   duration, open, instructors, description}) => {
                  return (
                    <tr>
                      <td> {title} </td>
                      <td> {open === true ? "yes":  "no"} </td>
                      <td> {price.normal} </td>
                      <td> {dates["start_date"]}-{dates["end_date"]}</td>
                      <td><Button onClick = {()=>goToDetails(id)} style={{backgroundColor:"none"}} color="primary">View Details</Button></td>
                    </tr>
                  )
                }) 
              }
          </Table> : null
        }
       </div>

    </div>
  );
}

export default App;

import React, {useState, useEffect, Fragment} from 'react';
import { Jumbotron, Button,Card, CardBody, Navbar, NavbarBrand, Nav, NavItem, Table} from 'reactstrap';
import {Spinner, Alert, ListGroup} from 'react-bootstrap';
import {API} from './api';


import useData from "./useData"

function App() {


  const stats = useData(API['stats']);
  const instructors = useData(API['instructors']);
  const courses = useData(API['courses']);

  return (
    <div className="App">
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">Code.Hub Dashboard</NavbarBrand>
        <Nav>
          <NavItem>
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
      <div className = "dashboard-wrapper">
      {stats.length ?
        stats.map(({id, title, amount}) => {
          <Card key={id}>
            <CardBody>
              {title}: {amount}
            </CardBody>
          </Card>
            })
      : null}  
       </div>
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
                courses.map(({id, title, imagePath, price, dates,   duration, open, instructors, description}) => {
                  <tr>
                      <td>{dates["start-date"]}-{dates["end-date"]}</td>
                      <td><Button>View Details</Button></td>
                  </tr>
                }) 
              }
          </Table> : null
        }
       </div>

    </div>
  );
}

export default App;

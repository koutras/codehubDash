import React from 'react';

import { Jumbotron, Button, Card, CardBody, Navbar, NavbarBrand, Nav, NavItem, Table, Row, Col } from 'reactstrap';
import { API } from './api';

import {
    Switch,
    Route,
    Link
} from "react-router-dom";


import useData from "./useData";
import Details from "./Details";
import { useHistory } from "react-router-dom";


import {
    courseReducer,
    initialState,
    addAction,
    markAction,
    deleteAction
} from "./course";

const courseContext = React.createContext(null);

const Home = () => {
    const stats = useData(API['stats']);
    const instructors = useData(API['instructors']);
    const courses = useData(API['courses']);
    const history = useHistory();


    const goToDetails = (id) => {
        history.push("/details/" + id)
    }

    return (
        <div className="Home">

            <Navbar style={{ color: "white" }} color="dark" light expand="md">
                <NavbarBrand style={{ color: "white" }} href="/">Code.Hub Dashboard</NavbarBrand>
                <Nav>
                    <NavItem style={{ float: "right" }}>
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

                    stats.map(({ id, title, amount }) => {
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
                    <Table style={{ backgroundColor: "inherit" }}>
                        <thead>
                            <tr>
                                <th>Title</th><th>Bookable</th><th>Price</th><th>Date</th><th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                        {
                            courses.slice(-5).map(({ id, title, imagePath, price, dates, duration, open, instructors, description }) => {
                                return (
                                    <tr>
                                        <td> {title} </td>
                                        <td> {open === true ? "yes" : "no"} </td>
                                        <td> {price.normal} </td>
                                        <td> {dates["start_date"]}-{dates["end_date"]}</td>
                                        <td><Button bsClass="custom-btn" onClick={() => goToDetails(id)} color="primary">View Details</Button></td>
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


export default Home;

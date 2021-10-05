import { Button, Form, FormGroup, Label, Input, NavItem } from 'reactstrap';
import { useSelector } from "react-redux";
import React, {useState} from "react";
import { API } from './api';
import PostData from "./useData";

 

const CourseForm = () => {
    const { instructors } = useSelector((state) => state);
    const [newCourse, setNewCourse] = useState(null);

    //work needed here to handle change of form fields
    const handleChange  = (event) => {
        if (event.target.value !== "")
          setNewCourse(event.target.value);
      }

    const handleSubmit= ()=> {
        PostData(newCourse,API['courses'])
    }

    return (
        <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="Title" className="mr-sm-2">Title</Label>
                <Input type="text" name="title" id="title" placeholder="Course Title" />
                <Input type="text" name="duration" id="duration" placeholder="Duration" />
                <Input type="text" name="imagepath" id="imagepath" placeholder="Image path" />

            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" /> Bookable
                </Label>
            </FormGroup>
            <FormGroup>
                <h3> Instructors</h3>
                {instructors ? instructors.map((instructor) => {
                    return (<div>
                        <Input type="checkbox" /> <span>{instructor.name.first}  {instructor.name.last}</span>

                    </div>

                    );
                }) : null
                }
            </FormGroup>
            <FormGroup>
                <Input type="text" name="description" id="description" placeholder="description" />

            </FormGroup>

            <Button onClick={handleSubmit}>Submit</Button>
        </Form>

    )
        ;
}

export default CourseForm;
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
        if (event.target.type == "text") {
            if (event.target.value !== "")
            setNewCourse({...newCourse, [event.target.id]:event.target.value});
        }

      }

    const handleSubmit= ()=> {
        PostData(newCourse,API['courses'])
    }

    return (
        <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="Title" className="mr-sm-2">Title</Label>
                <Input onChange={handleChange} type="text" name="title" id="title" placeholder="Course Title" />
                <Input onChange={handleChange} type="text" name="duration" id="duration" placeholder="Duration" />
                <Input onChange={handleChange} type="text" name="imagePath" id="imagePath" placeholder="Image path" />

            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input onChange={handleChange} type="checkbox" /> Bookable
                </Label>
            </FormGroup>
            <FormGroup>
                <h3> Instructors</h3>
                {instructors ? instructors.map((instructor) => {
                    return (<div>
                        <Input onChange={handleChange} type="checkbox" /> <span>{instructor.name.first}  {instructor.name.last}</span>

                    </div>

                    );
                }) : null
                }
            </FormGroup>
            <FormGroup>
                <Input onChange={handleChange} type="text" name="description" id="description" placeholder="description" />

            </FormGroup>

            <Button onClick={handleSubmit}>Submit</Button>
        </Form>

    )
        ;
}

export default CourseForm;
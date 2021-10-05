import { Button, Form, FormGroup, Label, Input, NavItem } from 'reactstrap';
import { useSelector } from "react-redux";
import React, {useState} from "react";
import { API } from './api';
 

const CourseForm = () => {
    const [newCourse, setNewCourse] = useState(null);
    const { courses, instructors } = useSelector((state) => state);

    const findNextId=(courses) => {
        const maxId = Math.max.apply(Math, courses.map(function(o) { return o.id; }))
        return Number.parseInt(maxId +1);

    }
    const postData = (data, url) => {
        // PUT request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch(url, requestOptions)
            .then(response => response.json());
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }

    //work needed here to handle change of form fields
    const handleChange  = (event) => {
        if (event.target.type == "text") {
            if (event.target.value !== "")
            setNewCourse({...newCourse, [event.target.id]:event.target.value});
        }

      }

    const handleSubmit= ()=> {
        postData({...newCourse},API['courses']);
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
import { Button, Form, FormGroup, Label, Input, NavItem } from 'reactstrap';

const CourseForm = (instructors = null) => {
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
            <FormGroup check>
                {/* {instructors.map((instructor) => {
                    return (
                            <Input type="checkbox" label="`${instructor.name.first}` `${instructor.name.last}`" /> 
                    );
                })

                } */}
            </FormGroup>

            <Button>Submit</Button>
        </Form>

    )
        ;
}

export default CourseForm;
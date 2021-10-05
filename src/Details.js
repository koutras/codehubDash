import {
    useParams, useHistory
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';


const Details = (props) => {

    const getCourse = (id, courses) => {
        // courses have been lost, navigate to home

        let found = null;
        courses.forEach(course => {
            if (course.id === id) {
                found = { ...course };
            }
        })
        return found;
    }

    const getRelatedInstructors = (course, instructors) => {
        let relatedInstructors = instructors.filter((instructor) => course.instructors.includes(instructor.id));
        return relatedInstructors;
    }


    const history = useHistory();
    let { id } = useParams();
    id = id || props.id;
    const { courses, instructors } = useSelector((state) => state);
    if (!courses || !id) {
        history.navigate("/");
    }
    const details = getCourse(id, courses);
    const relatedInstructors = getRelatedInstructors(details, instructors);
    return (
        details ?
            <Card style={{ width: '18rem' }}>
                <CardTitle>{details.title}</CardTitle>
                <CardImg top width="20%" src={"../" + details.imagePath} alt={details.title} />
                <CardBody>
                <CardText>
                <div>Price: {details.price.normal} Duration: {details.duration} </div>
                <div>Bookable: {details.open === true ? "yes" : "no"} Dates: {details.dates["start_date"]}-{details.dates["end_date"]}</div>
                <div>
                    <h2>Instructors</h2>
                    {
                        relatedInstructors ? relatedInstructors.map((instructor) => {
                            return (
                                <div>
                                    <span><h3>{instructor.name.first} {instructor.name.last}</h3> <h4>({instructor.dob})</h4></span>
                                    <div>{instructor.email}</div>
                                    <div>{instructor.bio}</div>
                                </div>
                            );

                        }) : null
                    }

                </div>
                </CardText>
                </CardBody>
            </Card> : null

    );
}

export default Details;
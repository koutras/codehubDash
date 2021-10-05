import Details from "./Details";
import { useSelector } from "react-redux";
import { Row } from 'reactstrap';

const Courses = () => {
    const { courses, instructors } = useSelector((state) => state);

    return (
        <Row>
            {
                courses.map((course) => {
                    return (<Details id={course.id} />);
                })
            }

        </Row>

    )
}

export default Courses;
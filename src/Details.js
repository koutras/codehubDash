import {
    useParams
} from "react-router-dom";

import {getCourse} from "./actions/coursesActions"

const Details = () => {
    let { id } = useParams();
    const course = getCourse(id);

    return (
        <div className="courseDetail">
            <div>{course.title}</div>
            <div>Price: {course.price.normal} Ducration: {course.duration} </div>
            <div>Bookable: {course.open === true ? "yes" : "no"} Dates: {course.dates["start_date"]}-{course.dates["end_date"]}</div>
        </div>
        
        );
}

export default Details;
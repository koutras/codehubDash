import {
    useParams
} from "react-router-dom";


const Details = () => {
    let { id } = useParams();

    return (<div>details for {id}</div>);
}

export default Details;
import { Link } from "react-router-dom"
import { Button } from "reactstrap"

export default function About () {
    return (
        <div>
            this is ABout page
            <div>
            <Button
                color="primary"
            >
                Click Me
            </Button>
            </div>
            <Link to={"/home"}>Home Page o'tish</Link>
        </div>
    )
}
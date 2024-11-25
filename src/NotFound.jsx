import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div>
            <h1 className="error1">Bunday Page mavjud emas</h1>
            <p className="error">404 Error</p>
            <Link to='/home'>Homega o'tish</Link>
        </div>
    )
}
import { Link } from "react-router-dom"
import { Button } from "reactstrap"
import { useState, useEffect } from "react"

export default function Home () {
    const [firts, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)

    useEffect(() => {
        console.log("UseEffect");
    }, [firts])

    return (
        <div>
            this is Home page
            <br />
            <Button
               style={{background: firts ? "red" : "grey"}}
               onClick={() => {
                setFirst(!firts)
               }}
            >First</Button>

            <Button
            style={{background: second ? "red" : "gray"}}
            onClick={() => {
             setSecond(!second)}}>Second</Button>
            <Button
            style={{background: third ? "red" : "gray"}}
            onClick={() => {
             setThird(!third)}}>Third</Button>
            <br />
            <Link to={"/about"}>About page ga o'tish </Link>
        </div>
    )
}
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
console.log(err)
    return(
        <div>
            <h1> Error Page</h1>
            <h5>Some went wrong</h5>
        </div>
    )
}

export default Error;
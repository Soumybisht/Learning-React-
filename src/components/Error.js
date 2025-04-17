import { useRouteError } from "react-router-dom";
const Error = () => {

    const err = useRouteError();
  return (
    <div>
        <h1>OPPSS!!!!</h1>
        <h2>Something went wrong!!</h2>
        <h2>status:{err.status}</h2>
    </div>
  )
}

export default Error

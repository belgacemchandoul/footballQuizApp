import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <p>Error 404 not found</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Error404;

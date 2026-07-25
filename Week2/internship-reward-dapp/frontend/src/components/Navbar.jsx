import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
        background: "#222",
      }}
    >
      <Link to="/" style={{ color: "white" }}>Home</Link>

      <Link to="/register" style={{ color: "white" }}>
        Register
      </Link>

      <Link to="/submit-task" style={{ color: "white" }}>
        Submit Task
      </Link>

      <Link to="/dashboard" style={{ color: "white" }}>
        Dashboard
      </Link>
    </nav>
  );
}

export default Navbar;
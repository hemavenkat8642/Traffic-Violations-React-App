import { Link } from "react-router-dom";
import "./index.css";

const Violations = () => (
  <div className="welcome">
    <h1 className="header">← Violations</h1>
    <br />
    <br />
    <Link className="link" to="/2-wheeler">
      <button className="universal-btn" type="button">
        2 Wheeler
      </button>
    </Link>
    <Link className="link" to="/4-wheeler">
      <button className="universal-btn" type="button">
        4 Wheeler
      </button>
    </Link>
  </div>
);

export default Violations;

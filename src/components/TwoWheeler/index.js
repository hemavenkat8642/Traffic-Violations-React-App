import { Link } from "react-router-dom";
import "./index.css";

const TwoWheeler = () => (
  <div className="welcome">
    <h1 className="header">← 2-Wheeler</h1>
    <br />
    <br />
    <Link className="link" to="/report-form">
      <button className="universal-btn" type="button">
        Speed Violation
      </button>
    </Link>
    <Link className="link" to="/report-form">
      <button className="universal-btn" type="button">
        Helmet Violation
      </button>
    </Link>
    <Link className="link" to="/report-form">
      <button className="universal-btn" type="button">
        Max Sitting Capacity Violation
      </button>
    </Link>
    <Link className="link" to="/report-form">
      <button className="universal-btn" type="button">
        Red Light Violation
      </button>
    </Link>
    <Link className="link" to="/report-form">
      <button className="universal-btn" type="button">
        Direction Violation
      </button>
    </Link>
  </div>
);

export default TwoWheeler;

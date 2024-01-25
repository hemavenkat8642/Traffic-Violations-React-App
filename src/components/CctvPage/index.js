import { Link } from "react-router-dom";
import "./index.css";

const CctvPage = () => (
  <div className="welcome">
    <h1 className="header">← Cam Id: 243A</h1>
    <br />
    <br />
    <Link className="link" to="/rfid">
      <button className="universal-btn" type="button">
        RFID
      </button>
    </Link>
    <button className="universal-btn" type="button">
      Traffic Detection (GPS)
    </button>
    <Link className="link" to="/violations">
      <button className="universal-btn" type="button">
        Violations
      </button>
    </Link>
  </div>
);

export default CctvPage;

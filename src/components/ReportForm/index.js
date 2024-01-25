import { Link } from "react-router-dom";
import "./index.css";

const ReportForm = () => (
  <div className="welcome">
    <h1 className="header">← Report</h1>
    <br />
    <br />
    <label htmlFor="date">Date:</label>
    <input type="date" id="date" />
    <label htmlFor="time">Time:</label>
    <input type="text" id="time" />
    <label htmlFor="ticketNo">Ticket Number:</label>
    <input type="text" id="ticketNo" />
    <label htmlFor="vehNo">Vehicle Number:</label>
    <input type="text" id="vehNo" />
    <img
      src="https://www.researchgate.net/publication/336002491/figure/fig2/AS:833885353046016@1575825169463/Violation-Detection-Flow-Diagram-As-seen-in-the-Figure-4-system-detects-violation-as.jpg"
      alt="vehicle-pic"
      className="veh-img"
    />
    <Link className="link" to="/report-summary">
      <button className="universal-btn report-btn" type="button">
        Send Report
      </button>
    </Link>
  </div>
);

export default ReportForm;

import { Link } from "react-router-dom";
import "./index.css";

const CctvSearch = () => (
  <div className="welcome">
    <h1 className="header">← CCTV's</h1>
    <br />
    <br />
    <label htmlFor="add-camera">Add Camera:</label>
    <input type="text" id="add-camera" />
    <label htmlFor="cameraId">Camera ID:</label>
    <input type="text" id="cameraId" />
    <label htmlFor="location">Location:</label>
    <input type="text" id="location" />
    <label htmlFor="x-ccod">X-Coordinate:</label>
    <input type="text" id="x-ccod" />
    <label htmlFor="y-cood">Y-Coordinate:</label>
    <input type="text" id="y-cood" />
    <label htmlFor="feed-loc">Feed Location:</label>
    <input type="text" id="feed-loc" />
    <label htmlFor="group">Group:</label>
    <input type="text" id="group" />
    <div className="btn-cont1">
      <button className="universal-btn cancel" type="button">
        Cancel
      </button>
      <Link className="link link1" to="/cctv-page">
        <button className="universal-btn search" type="button">
          Search
        </button>
      </Link>
    </div>
  </div>
);

export default CctvSearch;

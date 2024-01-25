import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Welcome extends Component {
  //   state = {
  //     userId: useLocation().state.userId,
  //     password: useLocation().state.password,
  //     captcha: useLocation().state.captcha,
  //   };

  //   componentDidMount() {
  //     const { userId, password, captcha } = this.state;
  //     if (userId !== "test123" || password !== "test123" || captcha !== "W68HP") {
  //       const { history } = this.props;
  //       history.replace("/login");
  //     }
  //   }

  render() {
    return (
      <div className="welcome">
        <h1 className="header">← Welcome</h1>
        <br />
        <br />
        <br />
        <br />
        <Link className="link" to="/cctv-search">
          <button className="universal-btn" type="button">
            Detect CCTV
          </button>
        </Link>
      </div>
    );
  }
}

export default Welcome;

import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class LoginAs extends Component {
  state = { count: 0 };

  componentDidMount() {
    this.increaseCountFunction();
  }

  increaseCountFunction = () => {
    const { count } = this.state;
    {
      count < 2
        ? (this.timerId = setInterval(this.increaseCount, 1000))
        : clearInterval(this.increaseCount);
    }
  };

  increaseCount = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        {count < 5 ? (
          <div className="login-as">
            <img
              className="home-img"
              src="https://upload.wikimedia.org/wikipedia/en/e/ea/Appolice%28emblem%29.png"
              alt="ap-police"
            />
            <h1 className="home-title">
              Traffic-Rules Obeys
              <br />
              Never-Violates
            </h1>
          </div>
        ) : (
          <div className="login-as">
            <h1 className="login-as-title">Login As</h1>
            <Link className="link" to="/login">
              <button className="universal-btn" type="button">
                Traffic Police
              </button>
            </Link>
            <div className="or-container">
              <hr className="vertical-line" />
              <p>OR</p>
              <hr className="vertical-line" />
            </div>
            <button className="universal-btn" type="button">
              Vehicle Owner
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default LoginAs;

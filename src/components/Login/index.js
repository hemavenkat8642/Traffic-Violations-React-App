import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Login extends Component {
  state = { userId: "", password: "", captcha: "" };

  userId = (event) => {
    this.setState({ userId: event.target.value });
  };

  passwd = (event) => {
    this.setState({ password: event.target.value });
  };

  capt = (event) => {
    this.setState({ captcha: event.target.value });
  };

  render() {
    const { userId, password, captcha } = this.state;
    return (
      <div className="login">
        <h1 className="header">← Login</h1>
        <br />
        <br />
        <br />
        <h1>Traffic Police</h1>
        <br />
        <label htmlFor="userId">User ID:</label>
        <input type="text" id="userId" value={userId} onChange={this.userId} />
        <label htmlFor="userId">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={this.passwd}
        />
        <br />
        <img
          src="https://miro.medium.com/v2/resize:fit:600/1*MHqIWdansPvRMEmUK2KNPw.png"
          alt="capt-img"
          className="capt-img"
        />
        <label htmlFor="captcha">Captcha:</label>
        <input type="text" id="captcha" value={captcha} onChange={this.capt} />
        <br />
        <Link
          className="link"
          to={{
            pathname: "/welcome",
            state: { userId: userId, password: password, captcha: captcha },
          }}
        >
          <button className="universal-btn login-btn" type="button">
            Login
          </button>
        </Link>
        <br />
        <a>Forget password?</a>
        <a>New User?</a>
      </div>
    );
  }
}

export default Login;

import { useState, useContext, useEffect } from "react";
import { LoginStatusContext } from "../contexts/LoginStatusContext";
import {customFetchGet,customFetchPost} from '../resources/data';
const LoginComopnent = () => {

  const [token, setToken] = useContext(LoginStatusContext);

  const [mydata, setMydata] = useState({
    name: "",
    password: "",
  });

  const loginUser = async (credentials) => {
    return await customFetchPost('user/login',credentials);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(mydata);
    console.log(response);
    let token_ = response.token;
    setToken(token_);
    if (token_) {
      console.log("login successfully");
      sessionStorage.setItem('token',token_);
      console.log(token_);
    }
  };

  const updateName = (e) => {
    setMydata({
      ...mydata,
      name: e.target.value,
    });
  };

  const updatePassword = (e) => {
    setMydata({
      ...mydata,
      password: e.target.value,
    });
  };

  return (
    // <LoginContext.Consumer>
    <main className="form-signin">
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input
            type="name"
            onChange={updateName}
            value={mydata.name}
            className="form-control"
            id="name"
          />
          <label htmlFor="floatingInput">Username </label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            onChange={updatePassword}
            className="form-control"
            value={mydata.password}
            id="floatingPassword"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" />{" "}
            <label className="remeber">Remember me</label>
          </label>
        </div>
        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
      </form>
    </main>
  );
};

export default LoginComopnent;

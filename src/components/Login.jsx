import React from "react";
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  onAuthStateChanged,
  browserLocalPersistence,
} from "firebase/auth";
import App from "../App";
import app from "../../firebaseConfig";
import { useEffect } from "react";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(app);

  const handleGoogles = async () => {
    let res = await signInWithPopup(auth, provider);
    let cUser = auth.currentUser;
    console.log("Sign UP successfull...!");
    console.log(cUser);
  };

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let login = {
          name: user.displayName,
          email: user.email,
          img: user.photoURL,
        };
      } else {
        console.log("log-outted!!!");
      }
    });
  }, [auth]);
  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <a href="#">Forgot password?</a>
                </div>

                <button
                  type="submit"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign in
                </button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a
                  data-mdb-ripple-init
                  className="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#55acee" }}
                  href="#"
                  role="button"
                  onClick={() => handleGoogles()}
                >
                  <i className="fab fa-twitter me-2"></i>Continue with google
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

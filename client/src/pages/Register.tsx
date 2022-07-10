// @flow
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { api } from "../services/api";
type IFormState = {
  email: string;
  password: string;
  confirmpassword: string;
};
export const Register = () => {
  const [formState, setFormState] = useState<IFormState>({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const { email, password, confirmpassword } = formState;
      if (!email || !password || !confirmpassword)
        window.alert("Email, Password, Confirm Password is required!");
      if (password !== confirmpassword)
        window.alert("Password does not match!");

      // send data for the server
      api.post("/user", formState).then((response) => {
        console.log(response.data);
      });

      window.alert("SUCCESS!");
      navigate("/session");
    },
    [formState]
  );

  return (
    <div>
      <Navbar />
      <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
        <div className="card text-dark bg-light mb-3 ">
          <div className="card-header text-center">Register</div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formState.email}
                  required
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      email: event.currentTarget?.value || "",
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  value={formState.password}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      password: event.currentTarget?.value || "",
                    });
                  }}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirma_password"
                  required
                  value={formState.confirmpassword}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      confirmpassword: event.currentTarget?.value || "",
                    });
                  }}
                  className="form-control"
                />
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <button
                  type="submit"
                  className="align-items-center btn btn-outline-primary"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="mt-3">
              <a className="form-text pe-auto" href="/session">
                already have a login ? login now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

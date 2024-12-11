import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const INITIAL_USER_DATA = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(INITIAL_USER_DATA);
  const [formErrors, setFormErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { username, password } = formData;

    setFormErrors([]);
    let errorFlag = false;

    if (!username.trim()) {
      errorFlag = true;
      setFormErrors((prevErrors) => [...prevErrors, "Username is required!"]);
    }

    if (!password.trim()) {
      errorFlag = true;
      setFormErrors((prevErrors) => [...prevErrors, "Password is required!"]);
    }

    return errorFlag;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    return;

    if (!validateForm()) {
      try {
        // showLoading();
        const { data, isError } = await SpaceTravelApi.buildSpacecraft({
          ...formData,
        });
        !isError
          ? setFormData(INITIAL_DATA)
          : console.log(`Couldn't create spacecrafts. Error: ${data}`);
      } catch (error) {
        console.log(`API for creating spacecrafts failed. Error: ${error}`);
      } finally {
        // hideLoading();
      }
    }
  };

  return (
    <>
      <h1>Log into Bengalibook</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="form-input">
              <label htmlFor="email">email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                placeholder="email"
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="form-input">
              <label htmlFor="password">password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                placeholder="password"
                required
                onChange={handleInputChange}
              />
              <button>show password</button>
            </div>
            <div>
              <button type="submit" onClick={handleSubmit}>
                Login
              </button>
            </div>
            <div>
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
            <div>
              <button type="submit" onClick={handleSubmit}>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;

import React, { useState } from "react";
import Input from "../../components/forms/Input/Input";
import Button from "../../components/Button/Button";

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // You can add your login logic here, e.g., sending a request to a server.
    console.log("Form submitted with data:", formData);
  };
  const handleValue = () => {
    console.log("dfh");
  };
  return (
    <div className="login-page">
    <div className="login-box">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Button onClick={handleValue} children="Login" className="mt-5" />
        </div>
      </form>
    </div>
  </div>
  );
};

export default LoginForm;

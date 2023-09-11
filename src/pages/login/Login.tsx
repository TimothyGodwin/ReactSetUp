import React, { useEffect, useState } from "react";
import Input from "../../components/forms/Input/Input";
import Button from "../../components/Button/Button";

const Login = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const isDebug = process.env.REACT_APP_DEBUG === 'true';
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
  useEffect(()=> {
    console.log(process.env)
  },[])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      {JSON.stringify(isDebug)}
      {JSON.stringify(apiUrl)}
      <div className="space-y-4">
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
  </div>
  );
};

export default Login;



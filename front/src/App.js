import "./App.css";
import React, { useState } from "react";
function App() {
  const FooBarForm = () => {
    const handleChange = (e) => {
      updateFormData({
        ...formData,

        // Trimming any whitespace
        [e.target.name]: e.target.value.trim(),
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      // ... submit to API or something
    };
    const initialFormData = Object.freeze({
      username: "",
      password: "",
    });
    const [formData, updateFormData] = React.useState(initialFormData);
    return (
      <>
        <label>
          Username
          <input name="username" onChange={handleChange} />
        </label>
        <br />
        <label>
          Password
          <input name="password" onChange={handleChange} />
        </label>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </>
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <FooBarForm />
      </header>
    </div>
  );
}

export default App;

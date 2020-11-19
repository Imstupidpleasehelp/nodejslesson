import "./App.css";
import React from "react";
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
      var formDataString = JSON.stringify(formData);
      // ... submit to API or something
      download(formDataString, 'json.txt', 'text/plain');
    };
    const initialFormData = Object.freeze({
      username: "",
      password: "",
    });
    function download(formDataString, fileName, contentType) {
      var a = document.createElement("a");
      var file = new Blob([formDataString], {type: contentType});
      a.href = URL.createObjectURL(file);
      a.download = fileName;
      a.click();
      
  }
  
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

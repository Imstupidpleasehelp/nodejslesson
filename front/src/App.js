import "./App.css";
import React from "react";
function App() {
  const FooBarForm = () => {
   return (
      <>
     <form action="http://localhost:8080/example" method="POST">
  First name: <input type="text" name="fname" /><br />
  Last name: <input type="text" name="lname" /><br />
 <button type="submit">Send to backend</button>
</form>

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

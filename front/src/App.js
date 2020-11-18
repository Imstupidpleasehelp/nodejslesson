import "./App.css";

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <form method="POST">
          <label>Name</label>
          <input type="text" name="name"></input> <label>Email</label>
          <input type="text" name="email"></input> <label>Message</label>
          <input type="text" name="message"></input>
        </form>{" "}
      </header>
    </div>
  );
}

export default App;

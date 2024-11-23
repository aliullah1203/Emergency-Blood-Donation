import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard"; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  const [user, setUser] = useState("");

  return (
    <div>
      {user ? (
        <Dashboard user={user} /> 
      ) : (
        <Login setUser={setUser} /> 
      )}
    </div>
  );
}

export default App;

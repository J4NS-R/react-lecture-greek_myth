import React from 'react';
import './App.css';
import GodsListing from "./components/GodsListing";

function App() {
  return (
    <div className="App">
        <h1>Greek Gods</h1>
        <GodsListing/>
        <div className="footer">
            <p>This site does not use any cookies.</p>
        </div>
    </div>
  );
}

export default App;

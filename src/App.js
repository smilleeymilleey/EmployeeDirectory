import React, { useState, useEffect } from 'react';
import './App.css';
import getEmployees from "./api.js";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState(null) 

  useEffect(() => {
    getEmployees().then(res => setData(res))
  }, [])
  
  return (
    <div className="home">
      <Table data={data} />
    </div>
  );
}

export default App;

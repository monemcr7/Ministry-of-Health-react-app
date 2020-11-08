import React from 'react';
import MainApplicationLayout from "./Layouts/MainApplication/MainApplication";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/LinkedStandard/LinkedStandard.scss';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  return (
      <div className="App">
        <MainApplicationLayout />
      </div>
  );
}

export default App;

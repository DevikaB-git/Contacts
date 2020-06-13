import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Component/Dropdown';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';



var displayDropdown = (
  <div style={{ display: 'flex', justifyContent: 'center' }} >
    <Dropdown />
  </div>
);


ReactDOM.render(displayDropdown, document.getElementById('root'));

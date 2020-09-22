import React from 'react';

import SideBar from './Componnents/SideBar'
import Content from './Componnents/Content/Content'

import './App.css';
const tableData = [
  {
      id:"1234",
      name:"Mr james",
      date:"22/06/2020",
      issue:"fae",
      detail:"details",
      status:"approvel"
  },
  {
      id:"1235",
      name:"Mr james",
      date:"22/06/2020",
      issue:"fae",
      detail:"details",
      status:"decline"
  },
  {
      id:"1236",
      name:"Mr james",
      date:"12/06/2020",
      issue:"fae",
      detail:"details",
      status:"decline"
  },
  {
      id:"1237",
      name:"Mr james",
      date:"12/06/2020",
      issue:"fae",
      detail:"details",
      status:"approvel"
  },
  {
      id:"1238",
      name:"Mr james",
      date:"25/06/2020",
      issue:"fae",
      detail:"details",
      status:"approvel"
  },
  {
      id:"1239",
      name:"Mr james",
      date:"22/06/2020",
      issue:"fae",
      detail:"details",
      status:"decline"
  },
  {
      id:"1210",
      name:"Mr james",
      date:"12/06/2020",
      issue:"fae",
      detail:"details",
      status:"approvel"
  },
  {
      id:"1211",
      name:"Mr james",
      date:"11/06/2020",
      issue:"fae",
      detail:"details",
      status:"approvel"
  },
];
function App() {
  return (
    <div className="App">
      <SideBar />
      <Content tableData={tableData} />
    </div>
  );
}

export default App;

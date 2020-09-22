import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faFolder } from "@fortawesome/free-solid-svg-icons";

import {Dropdown, Form, Table} from 'react-bootstrap'

const Content = ({tableData}) => {
    console.log(tableData)
  return (
    <div className="content">
      <h1>SHRIJI BABA PUBLIC SCHOOL</h1>
      <div>
        <h6> Raine a ticket</h6>
        <Form className="search-bar">
        <Form.Group controlId="ControlInput1" icon={faSearch}>
    <Form.Control type="text" placeholder="search" />
  </Form.Group>
    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Status
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#">approvel</Dropdown.Item>
    <Dropdown.Item href="#">decline 2</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </Form>
      </div>
      <Table striped bordered hover>
  <thead>
    <tr className="tableHead">
      <th>ID</th>
      <th>Name</th>
      <th>Date</th>
      <th>Issue</th>
      <th>Details</th>
      <th>File</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {tableData.map((row)=>(
        <tr key={row.id}>
            <td>{row.id} </td>
            <td>{row.name}</td>
            <td>{row.date}</td>
            <td>{row.issue}</td>
            <td>{row.detail}</td>
            <td><FontAwesomeIcon icon={faFolder} /></td>
            <td className={row.status==="approvel" ? "approvel" : "decline"}>{row.status}</td>
        </tr>
    )) }
  </tbody>
</Table>
    </div>
  );
};

export default Content;

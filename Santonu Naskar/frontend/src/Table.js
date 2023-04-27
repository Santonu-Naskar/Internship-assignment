import React, { useMemo } from "react";
import { Table,Container,Row,Col } from "react-bootstrap";

function UserTable(props) {
  const { data } = props;

  const rows = useMemo(() => {
    return data.map((user) => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.email}</td>
        <td>{user.gender}</td>
        <td>{user.income}</td>
        <td>{user.city}</td>
        <td>{user.car}</td>
        <td>{user.quote}</td>
        <td>{user.phone_price}</td>
      </tr>
    ));
  }, [data]);

  return (
    <div className="mw-100  overflow-scroll" style={{ maxHeight: "400px" }}>
      <Row>
        <Col sm={12}><Table striped bordered hover className="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Income</th>
          <th>City</th>
          <th>Car</th>
          <th>Quote</th>
          <th>Phone Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table></Col>
      </Row>
    
    </div>
  );
}

export default UserTable;

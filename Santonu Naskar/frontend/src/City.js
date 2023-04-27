import React, { useMemo } from "react";
import { Container,Row,Col } from "react-bootstrap";

function City(props) {
  const { data } = props;

  const rows = useMemo(() => {
    return data.map((user,i) => (
        <><Col sm={2} className="text-end">{i+1}.</Col><Col sm={10}>{user.city},</Col></>
    ));
  }, [data,]);

  return (
    <Container className="mb-3">
        <Row>
            {rows}
        </Row>
    </Container>
  );
}

export default City;

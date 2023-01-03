import React, { useState } from "react";
import { Button, Modal, Col } from "react-bootstrap";
import { useEffect } from "react";
import { getAll } from "../../services/productData";
import ProductCard from "../ProductCard/ProductCard";

const Fishing = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll(1, "all", "")
      .then((res) => {
        setProducts(res.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {console.log(products)}
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Hot on sale!
        </Modal.Title>
      </Modal.Header>
      {products.map((x) => (
        <Col xs={12} md={6} lg={3} key={x._id.toString()}>
          <ProductCard params={x} />
        </Col>
      ))}
      <Modal.Body>
        <h4>Centered Modal</h4>

        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Fishing;

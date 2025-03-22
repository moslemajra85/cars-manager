import React, { useState } from 'react';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';

const CarForm = () => {
  // access the global state
  // get name and cost from global state object
  const { name, cost } = useSelector((state) => {
    return state.form;
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };

  const handleNameChange = (e) => {
     dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    dispatch(changeCost(+e.target.value));
  };

  return (
    <Container className="mt-5">
      <Card className="shadow">
        <Card.Header className="bg-primary text-white py-3">
          <h3 className="mb-0 text-center">
            <span className="me-2">🚗</span>
            Add New Car
          </h3>
        </Card.Header>
        <Card.Body className="px-4 py-4">
          <Form onSubmit={handleSubmit}>
            <Row className="g-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold">Car Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter car name"
                    required
                    className="form-control-lg shadow-sm"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold">Price ($)</Form.Label>
                  <Form.Control
                    type="number"
                    value={!cost ? '' : cost}
                    onChange={handleCostChange}
                    placeholder="Enter car price"
                    required
                    className="form-control-lg shadow-sm"
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="d-grid gap-2 mt-4">
              <Button
                variant="primary"
                type="submit"
                size="lg"
                className="shadow-sm"
              >
                <span className="me-2">➕</span>
                Add Car
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CarForm;

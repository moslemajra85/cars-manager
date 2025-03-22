import React, { useState } from 'react';
import { Container, InputGroup, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { changeSearchTerm } from '../store';
import { useDispatch, useSelector } from 'react-redux';

const SearchCar = () => {
  const { searchTerm } = useSelector((state) => state.cars.searchTerm);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <Container className="mt-4">
      <Row className="align-items-center bg-white rounded-4 shadow py-3 px-2">
        <Col md={4} className="mb-2 mb-md-0">
          <h3 className="text-primary mb-0 d-flex align-items-center">
            <span className="me-2">🔍</span>
            Search Car
          </h3>
        </Col>
        <Col md={8}>
          <InputGroup size="lg" className="shadow-sm">
            <InputGroup.Text className="bg-primary text-white border-primary">
              <i className="bi bi-search"></i>
              🔎
            </InputGroup.Text>
            <Form.Control
              type="search"
              placeholder="Search for a car..."
              value={searchTerm}
              onChange={handleSearch}
              className="border-primary py-2"
              style={{ fontSize: '1.1rem' }}
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchCar;

import React, { useState } from 'react';
import { Container, Table, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';

const CarList = () => {
  const cars = useSelector((state) => state.cars.data);
  const dispatch = useDispatch();

  const handleDeleteCar = (car) => {
    dispatch(removeCar(car));
  };

  // const filteredCars = cars.filter((car) =>
  //   car.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <Container className="mt-5">
      <Card className="shadow">
        <Card.Header className="bg-primary text-white py-3">
          <h3 className="mb-0 text-center">
            <span className="me-2">📋</span>
            Car List
          </h3>
        </Card.Header>
        <Card.Body className="p-0">
          <input
            type="text"
            placeholder="Search by car name"
            value=""
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control mb-3"
          />
          <Table hover responsive className="mb-0">
            <thead className="bg-light">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Car Name</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, index) => (
                <tr key={car.id} className="align-middle">
                  <td className="px-4">{index + 1}</td>
                  <td className="px-4">{car.name}</td>
                  <td className="px-4">$ {car.cost}</td>
                  <td className="px-4 text-center">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDeleteCar(car)}
                      className="shadow-sm"
                    >
                      <span className="me-1">🗑️</span>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
              {cars.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-muted">
                    No cars available
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer className="bg-light py-3">
          <div className="text-muted text-center">
            Total Cars: {cars.length}
          </div>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default CarList;

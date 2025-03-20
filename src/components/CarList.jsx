import React from 'react';
import { Container, Table, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarList = ({ cars, onDelete }) => {
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
                  <td className="px-4">${car.price}</td>
                  <td className="px-4 text-center">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => onDelete(car.id)}
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

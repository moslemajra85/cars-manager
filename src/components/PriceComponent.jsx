import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
const PriceComponent = () => {
  const cars = useSelector((state) => state.cars.data);

  const totalPrice = cars.reduce((sum, car) => sum + car.cost, 0);

  return (
    <div className="d-flex justify-content-end mt-3 mb-5">
      <Card className="shadow-lg border-0" style={{ width: '300px' }}>
        <Card.Body className="bg-success bg-gradient text-white rounded">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="mb-0">Total Value</h4>
              <small className="text-white-50">All Cars</small>
            </div>
            <div className="text-end">
              <h2 className="mb-0">
                <span className="me-2">💰</span>${totalPrice.toLocaleString()}
              </h2>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PriceComponent;

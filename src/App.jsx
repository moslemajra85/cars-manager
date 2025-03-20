import React, { useState } from 'react';
import CarForm from './components/CarForm';
import SearchCar from './components/SearchCar';
import CarList from './components/CarList';
import PriceComponent from './components/PriceComponent';
import './App.css';

function App() {
  const [cars, setCars] = useState([
    { id: 1, name: 'Toyota Camry', price: '25000' },
    { id: 2, name: 'Honda Civic', price: '22000' },
    { id: 3, name: 'Tesla Model 3', price: '45000' },
  ]);

  const handleDelete = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  const handleAddCar = (newCar) => {
    setCars([...cars, { ...newCar, id: Date.now() }]);
  };

  return (
    <div className="App">
      <SearchCar />
      <CarForm onAddCar={handleAddCar} />
      <CarList cars={cars} onDelete={handleDelete} />
      <PriceComponent cars={cars} />
    </div>
  );
}

export default App;

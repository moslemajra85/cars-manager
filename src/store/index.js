import { configureStore } from '@reduxjs/toolkit';
import { carsReducer, changeSearchTerm, addCar, removeCar } from './carsSlice';
import { formReducer, changeName, changeCost } from './formSlices';

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export { store, changeName, changeCost, changeSearchTerm, addCar, removeCar };

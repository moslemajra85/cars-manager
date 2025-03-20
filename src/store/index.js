import { configureStore } from '@reduxjs/toolkit'; // Import the configureStore function from Redux Toolkit
import { carsReducer, changeSearchTerm, addCar, removeCar } from './carsSlice'; // Import the cars reducer and actions
import { formReducer, changeName, changeCost } from './formSlices'; // Import the form reducer and actions

// Configure the Redux store with the reducers
const store = configureStore({
  reducer: {
    form: formReducer, // Add the form reducer to the store
    cars: carsReducer, // Add the cars reducer to the store
  },
});

// Export the store and actions for use in the application
export { store, changeName, changeCost, changeSearchTerm, addCar, removeCar };

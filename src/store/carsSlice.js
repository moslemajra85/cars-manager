import { createSlice, nanoid } from '@reduxjs/toolkit';

// Create a slice of the Redux store for managing cars
const carsSlice = createSlice({
  name: 'cars', // Name of the slice
  initialState: {
    searchTerm: '', // Initial state for the search term
    data: [], // Initial state for the list of cars
  },

  reducers: {
    // Action to change the search term
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload; // Update the search term in the state
    },
    // Action to add a new car
    // we assume that action.payload: {name: "xxx",cost: "455"}
    // dispatch(addCar({name, cost}))
    addCar: (state, action) => {
      state.data.push({
        name: action.payload.name, // Car name from the action payload
        cost: action.payload.cost, // Car price from the action payload
        id: nanoid(), // Generate a unique ID for the car
      });
    },
    // Action to remove a car by its ID
    // payload: {name: "", cost:"", id:dd}
     removeCar: (state, action) => {
      state.data = state.data.filter((car) => car.id !== action.payload.id); // Filter out the car with the matching ID
    },
  },
 
 
});

// Export the actions generated by createSlice
export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
// Export the reducer to be used in the store
export const carsReducer = carsSlice.reducer;

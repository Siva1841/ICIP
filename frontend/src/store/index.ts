import { configureStore } from '@reduxjs/toolkit';

// Define the root reducer with any slices you need
const rootReducer = {
  // Example: 
  // auth: authReducer,
  // data: dataReducer,
  // You'll add actual reducers here as you develop your app
};

// Create the store
export const store = configureStore({
  reducer: rootReducer,
});

// Export the root state and dispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Add this function to properly handle preloadedState for tests
export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};
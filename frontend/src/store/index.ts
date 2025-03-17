import { configureStore } from '@reduxjs/toolkit';

// Define the root reducer
const rootReducer = {
  // Add actual reducers here as your app grows
};

// Create the store properly
export const store = configureStore({
  reducer: rootReducer
});

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// For testing
export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};
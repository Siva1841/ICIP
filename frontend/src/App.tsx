import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Intelligent Platform</h1>
          <p>Welcome to our real-time data processing and analytics platform</p>
        </header>
      </div>
    </Provider>
  );
};

export default App;
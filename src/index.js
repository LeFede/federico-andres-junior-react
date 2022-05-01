import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles.css'

import store from './features/store';

import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
    </StrictMode>
  </Router>
)


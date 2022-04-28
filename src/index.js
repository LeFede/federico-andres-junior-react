import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider} from '@apollo/client';

import { BrowserRouter as Router } from 'react-router-dom';

import client from './apollo/client';
import store from './features/store';

import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <StrictMode>
      <Provider store={store}>
        {/* <ApolloProvider client={client}> */}
          <App />
        {/* </ApolloProvider> */}
      </Provider>
    </StrictMode>
  </Router>
)


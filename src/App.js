import { Component } from 'react'
import { connect } from 'react-redux'
//import { BrowserRouter as Router, Switch} from 'react-router-dom'
import { Switch, Route, Link } from 'react-router-dom'

import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound'
import CounterPage from './pages/Counter'

// import { increment, decrement, setTo } from './features/counter'
// import { getObjectFromLocal } from './features/localStorage';
import ProductPage from './pages/ProductPage'
import Currencies from './components/Currencies';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

export default  class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
              <Route exact path='/' component={HomePage} />
              {/* <Route path='/counter' component={CounterPage} /> */}
              <Route path='/product/:id' component={ProductPage} />
              <Route path='*' component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    )
  }
}

// const mapDispatchToProps = {
//   increment,
//   decrement,
//   setTo,
// };

// export default connect(undefined, mapDispatchToProps)(App)
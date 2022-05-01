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

export default  class App extends Component {
  render() {
    return (
      <>
        <nav>
          <Link to='/'>Home</Link>
          {/* <Link to='/counter'> Counter</Link>
          <Link to='/asdqwe'> a cualquier lado xd</Link> */}
          {/* <Link to='/product/huarache-x-stussy-le'> Al producto jej</Link> */}
          <Categories />
          <Currencies/>
        </nav>
        <Switch>
          <Route exact path='/' component={HomePage} />
          {/* <Route path='/counter' component={CounterPage} /> */}
          <Route path='/product/:id' component={ProductPage} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </>
    )
  }
}

// const mapDispatchToProps = {
//   increment,
//   decrement,
//   setTo,
// };

// export default connect(undefined, mapDispatchToProps)(App)
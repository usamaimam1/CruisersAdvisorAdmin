import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import firebase from 'firebase'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import { Provider } from 'react-redux'
import store from './Redux/store';
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // console.log(auth)
  }
  render() {
    return (
      <Provider store={store} >
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route path='*' component={() => { return (<text>404, Not Found</text>) }} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
export default App
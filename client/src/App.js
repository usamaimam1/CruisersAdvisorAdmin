import React from 'react'
import {
  BrowserRouter as Router, Switch, Route, Link,
  Redirect, useHistory, useLocation
} from "react-router-dom";
import app from './services/base'
import * as ROUTES from './values/routes'
import { SetUser } from './Redux/actions';
import { connect } from 'react-redux'
import { AuthProvider } from './services/Auth'
import Login from './Components/Login/Login'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import Users from './Components/Users/Users';
import Services from './Components/Services/Services';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/ProtectedRoute'
import ErrorPage from './Components/ErrorPage/ErrorPage';
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    if (app.auth().currentUser) {
      await app.auth().signOut()
    }
    // console.log(auth.currentUser)
    // console.log(auth)

  }
  render() {
    return (
      <AuthProvider>
        <Router>
          <div>
            <Switch>
              <PrivateRoute exact path={ROUTES.Home} component={Dashboard} />
              <PrivateRoute exact path={ROUTES.ChangePassword} component={ChangePassword} />
              <PrivateRoute exact path={ROUTES.Users} component={Users} />
              <PrivateRoute exact path={ROUTES.Services} component={Services} />
              <Route exact path={ROUTES.Login} component={Login} />
              <Route exact path={ROUTES.ForgetPassword} component={ForgetPassword} />
              <Route path='*' component={ErrorPage} />
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setUser: function (user) { dispatch(SetUser(user)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
import React from 'react'
import {
  BrowserRouter as Router, Switch, Route, Link,
  Redirect, useHistory, useLocation
} from "react-router-dom";
import * as ROUTES from './values/routes'
import { SetUser } from './Redux/actions';
import { connect } from 'react-redux'
import firebase from 'firebase'
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import Login from './Components/Login/Login'
import ProtectedDashboardRoute from './Components/Dashboard/ProtectedDashboardRoute'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import Users from './Components/Users/Users';
import Services from './Components/Services/Services';
import ProtectedLoginRoute from './Components/Login/ProtectedLoginRoute';
class App extends React.Component {
  constructor(props) {
    super(props)
    if (!firebase.apps.length) {
      const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_DATABASE_URL,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSENGER_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID,
        measurementId: process.env.REACT_APP_MEASUREMENT_ID
      };
      const app = firebase.initializeApp(firebaseConfig)
    }
  }
  componentDidMount() {
    // console.log(auth.currentUser)
    // console.log(auth)
  }
  render() {
    return (
      <div>
        <Router>
          <Route exact path={ROUTES.Home} component={Login} />
          <Route path={ROUTES.Dashboard} component={ProtectedDashboardRoute} />
          <Route path={ROUTES.ForgetPassword} component={ForgetPassword} />
          <Route path={ROUTES.ChangePassword} component={ChangePassword} />
          <Route path={ROUTES.Users} component={Users} />
          <Route path={ROUTES.Services} component={Services} />
        </Router>
      </div>
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
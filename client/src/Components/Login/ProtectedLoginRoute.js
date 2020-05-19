import React from 'react'
import {
    BrowserRouter as Router, Switch, Route,
    Link, Redirect, useHistory, useLocation
} from "react-router-dom";
import Login from './Login'
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
class ProtectedLoginRoute extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        return (
            <Route
                {...this.props}
                render={({ location }) =>
                    app.auth().currentUser ?
                        (<Redirect to={{ pathname: '/dashboard', state: { from: location } }} />) :
                        <Login {...this.props} />
                }
            >
            </Route>
        )
    }
}
export default ProtectedLoginRoute
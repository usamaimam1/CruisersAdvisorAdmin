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
import Dashboard from './Dashboard'
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
class ProtectedDashboardRoute extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        // const { location, history } = this.props
        console.log(app.auth().currentUser)
        return (
            <Route
                {...this.props}
                render={({ location }) =>
                    app.auth().currentUser ?
                        (<Dashboard {...this.props} />) :
                        (<Redirect to={{ pathname: '/', state: { from: location } }} />)
                }
            >
            </Route>
        )
    }
}
export default ProtectedDashboardRoute
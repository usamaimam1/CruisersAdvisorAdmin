import React from 'react'
import SideBar from '../Helpers/SideBar'
import { SetUser } from '../../Redux/actions/index'
import { connect } from 'react-redux'
import * as ROUTES from '../../values/routes'
import app from '../../services/base'
import NavSearch from '../Helpers/NavSearch'
import NavNotifications from '../Helpers/NavNotifications'
import NavOptions from '../Helpers/NavOptions'
import NavProfile from '../Helpers/NavProfile'
import StatsDiv from '../Helpers/StatsDiv'
import Footer from '../Helpers/Footer'
import AdminSideBar from '../Helpers/AdminSidebar'
import AdminNavbar from '../Helpers/AdminNavBar'
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogOut = this.handleLogOut.bind(this)
    }
    componentDidMount() {

    }
    async handleLogOut(event) {
        console.log(event)
        try {
            event.preventDefault()
            await app.auth().signOut()
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        return (
            <>
                <AdminSideBar onLogOut={this.handleLogOut} />
                <div className="main-content" ref="mainContent">
                    <AdminNavbar
                        {...this.props}
                    />
                </div>
            </>
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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
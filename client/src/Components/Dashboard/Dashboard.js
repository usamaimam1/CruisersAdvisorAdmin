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
                <SideBar />
                {/* <!-- Main content --> */}
                <div class="main-content" id="panel">
                    {/* <!-- Topnav --> */}
                    <nav class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
                        <div class="container-fluid">
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                {/* <!-- Search form --> */}
                                <NavSearch />
                                {/* <!-- Navbar links --> */}
                                <ul class="navbar-nav align-items-center  ml-md-auto ">
                                    <li class="nav-item d-xl-none">
                                        {/* <!-- Sidenav toggler --> */}
                                        <div class="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                                            <div class="sidenav-toggler-inner">
                                                <i class="sidenav-toggler-line"></i>
                                                <i class="sidenav-toggler-line"></i>
                                                <i class="sidenav-toggler-line"></i>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item d-sm-none">
                                        <a class="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
                                            <i class="ni ni-zoom-split-in"></i>
                                        </a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="ni ni-bell-55"></i>
                                        </a>
                                        <NavNotifications />
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="ni ni-ungroup"></i>
                                        </a>
                                        <NavOptions />
                                    </li>
                                </ul>
                                <NavProfile onLogOut={this.handleLogOut} />
                            </div>
                        </div>
                    </nav>
                    {/* <!-- Header --> */}
                    {/* <!-- Header --> */}
                    <div class="header bg-primary pb-6">
                        <div class="container-fluid">
                            <div class="header-body">
                                {/* <!-- Card stats --> */}
                                <StatsDiv />
                            </div>
                        </div>
                    </div>
                    {/* <!-- Page content --> */}
                    <div class="container-fluid mt--6">
                        {/* <!-- Footer --> */}
                        {/* <Footer /> */}
                    </div>
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
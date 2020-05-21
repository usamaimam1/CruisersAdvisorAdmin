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
                        <div class="row">
                            <div class="col-xl-8">
                                <div class="card bg-default">
                                    <div class="card-header bg-transparent">
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h6 class="text-light text-uppercase ls-1 mb-1">Overview</h6>
                                                <h5 class="h3 text-white mb-0">Sales value</h5>
                                            </div>
                                            <div class="col">
                                                <ul class="nav nav-pills justify-content-end">
                                                    <li class="nav-item mr-2 mr-md-0" data-toggle="chart" data-target="#chart-sales-dark" data-update='{"data":{"datasets":[{"data":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}' data-prefix="$" data-suffix="k">
                                                        <a href="#" class="nav-link py-2 px-3 active" data-toggle="tab">
                                                            <span class="d-none d-md-block">Month</span>
                                                            <span class="d-md-none">M</span>
                                                        </a>
                                                    </li>
                                                    <li class="nav-item" data-toggle="chart" data-target="#chart-sales-dark" data-update='{"data":{"datasets":[{"data":[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}' data-prefix="$" data-suffix="k">
                                                        <a href="#" class="nav-link py-2 px-3" data-toggle="tab">
                                                            <span class="d-none d-md-block">Week</span>
                                                            <span class="d-md-none">W</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        {/* <!-- Chart --> */}
                                        <div class="chart">
                                            {/* <!-- Chart wrapper --> */}
                                            <canvas id="chart-sales-dark" class="chart-canvas"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="card">
                                    <div class="card-header bg-transparent">
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                                                <h5 class="h3 mb-0">Total orders</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        {/* <!-- Chart --> */}
                                        <div class="chart">
                                            <canvas id="chart-bars" class="chart-canvas"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-8">
                                <div class="card">
                                    <div class="card-header border-0">
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h3 class="mb-0">Page visits</h3>
                                            </div>
                                            <div class="col text-right">
                                                <a href="#!" class="btn btn-sm btn-primary">See all</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-responsive">
                                        {/* <!-- Projects table --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Footer --> */}
                       <Footer />
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
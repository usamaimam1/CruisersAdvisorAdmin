import React from 'react'
import logo from '../../assets/logo-dark.png'
class SideBar extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        return (
            <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
                <div class="scrollbar-inner">
                    <div class="sidenav-header  align-items-center">
                        <a class="navbar-brand" href="javascript:void(0)">
                            <img src={logo} class="navbar-brand-img" alt="..." />
                        </a>
                    </div>

                    <div class="navbar-inner">
                        {/* <!-- Collapse --> */}
                        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
                            {/* <!-- Nav items --> */}
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active">
                                        <i class="ni ni-tv-2 text-primary"></i>
                                        <span class="nav-link-text">Dashboard</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" >
                                        <i class="ni ni-planet text-orange"></i>
                                        <span class="nav-link-text">Services</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <i class="ni ni-pin-3 text-primary"></i>
                                        <span class="nav-link-text">Reviews</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <i class="ni ni-single-02 text-yellow"></i>
                                        <span class="nav-link-text">Users</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <i class="ni ni-bullet-list-67 text-default"></i>
                                        <span class="nav-link-text">Payments</span>
                                    </a>
                                </li>
                                {/* <li class="nav-item">
                                    <a class="nav-link" href="">
                                        <i class="ni ni-key-25 text-info"></i>
                                        <span class="nav-link-text">Login</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="">
                                        <i class="ni ni-circle-08 text-pink"></i>
                                        <span class="nav-link-text">Register</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="">
                                        <i class="ni ni-send text-dark"></i>
                                        <span class="nav-link-text">Upgrade</span>
                                    </a>
                                </li> */}
                            </ul>
                            {/* <!-- Divider --> */}
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
export default SideBar
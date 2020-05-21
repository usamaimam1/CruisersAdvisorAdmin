/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";
import logo from '../../assets/logo-dark.png'
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Collapse,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Media,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    Col
} from "reactstrap";

var ps;

class AdminSideBar extends React.Component {
    state = {
        collapseOpen: false
    };
    constructor(props) {
        super(props);
        // this.activeRoute.bind(this);
    }
    // verifies if routeName is the one active (in browser input)
    // activeRoute(routeName) {
    //     return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    // }
    // toggles collapse between opened and closed (true/false)
    toggleCollapse = () => {
        this.setState({
            collapseOpen: !this.state.collapseOpen
        });
    };
    // closes the collapse
    closeCollapse = () => {
        this.setState({
            collapseOpen: false
        });
    };
    // creates the links that appear in the left menu / Sidebar
    // createLinks = routes => {
    //     return routes.map((prop, key) => {
    //         return (
    //             <NavItem key={key}>
    //                 <NavLink
    //                     to={prop.layout + prop.path}
    //                     tag={NavLinkRRD}
    //                     onClick={this.closeCollapse}
    //                     activeClassName="active"
    //                 >
    //                     <i className={prop.icon} />
    //                     {prop.name}
    //                 </NavLink>
    //             </NavItem>
    //         );
    //     });
    // };
    render() {
        // const { bgColor, routes, logo } = this.props;

        return (
            <Navbar
                className="navbar-vertical fixed-left navbar-light bg-white"
                expand="md"
                id="sidenav-main"
            >
                <Container fluid>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={this.toggleCollapse}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <NavbarBrand className="pt-0">
                        <img
                            alt='...'
                            className="navbar-brand-img"
                            src={logo}
                        />
                    </NavbarBrand>

                    {/* User */}
                    <Nav className="align-items-center d-md-none">
                        <UncontrolledDropdown nav>
                            <DropdownToggle nav className="nav-link-icon">
                                <i className="ni ni-bell-55" />
                            </DropdownToggle>
                            <DropdownMenu
                                aria-labelledby="navbar-default_dropdown_1"
                                className="dropdown-menu-arrow"
                                right
                            >
                                <DropdownItem>Action</DropdownItem>
                                <DropdownItem>Another action</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Something else here</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav>
                            <DropdownToggle nav>
                                <Media className="align-items-center">
                                    <span className="avatar avatar-sm rounded-circle">
                                        <img
                                            alt="..."
                                            src={require("../../assets/img/theme/team-1-800x800.jpg")}
                                        />
                                    </span>
                                </Media>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownItem className="noti-title" header tag="div">
                                    <h6 className="text-overflow m-0">Welcome!</h6>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>
                                    <i className="ni ni-single-02" />
                                    <span>My profile</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>
                                    <i className="ni ni-settings-gear-65" />
                                    <span>Settings</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>
                                    <i className="ni ni-calendar-grid-58" />
                                    <span>Activity</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>
                                    <i className="ni ni-support-16" />
                                    <span>Support</span>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="ni ni-user-run" />
                                    <span>Logout</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    {/* Collapse */}
                    <Collapse navbar isOpen={this.state.collapseOpen}>
                        {/* Collapse header */}
                        {/* Form */}
                        <Form className="mt-4 mb-3 d-md-none">
                            <InputGroup className="input-group-rounded input-group-merge">
                                <Input
                                    aria-label="Search"
                                    className="form-control-rounded form-control-prepended"
                                    placeholder="Search"
                                    type="search"
                                />
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <span className="fa fa-search" />
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </Form>
                        {/* Navigation */}
                        <Nav navbar>
                            <NavItem>
                                <NavLink
                                    to='/'
                                    tag={NavLinkRRD}
                                    onClick={this.closeCollapse}
                                    activeClassName="active"
                                >
                                    <i className="ni ni-tv-2 text-primary" />
                                    Profile
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    to='/'
                                    tag={NavLinkRRD}
                                    onClick={this.closeCollapse}
                                    activeClassName="active"
                                >
                                    <i className="ni ni-circle-08 text-yellow" />
                                    Users
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    to='/'
                                    tag={NavLinkRRD}
                                    onClick={this.closeCollapse}
                                    activeClassName="active"
                                >
                                    <i className="ni ni-delivery-fast text-green" />
                                    Services
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    to='/'
                                    tag={NavLinkRRD}
                                    onClick={this.closeCollapse}
                                    activeClassName="active"
                                >
                                    <i className="ni ni-chart-bar-32 text-pink" />
                                    Reviews
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    to='/'
                                    tag={NavLinkRRD}
                                    onClick={this.closeCollapse}
                                    activeClassName="active"
                                >
                                    <i className="ni ni-money-coins text-orange" />
                                    Payments
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    to='/'
                                    tag={NavLinkRRD}
                                    onClick={this.props.onLogOut}
                                    activeClassName="active"
                                >
                                    <i className="ni ni-button-power text-black" />
                                    LogOut
                                </NavLink>
                            </NavItem>
                        </Nav>
                        {/* Divider */}
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default AdminSideBar;

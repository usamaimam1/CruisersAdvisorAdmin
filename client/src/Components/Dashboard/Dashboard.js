import React from 'react'
import SideBar from '../Helpers/SideBar'
import { SetUser } from '../../Redux/actions/index'
import { connect } from 'react-redux'
import * as ROUTES from '../../values/routes'
import app from '../../services/base'
import AdminSideBar from '../Helpers/AdminSidebar'
import AdminNavbar from '../Helpers/AdminNavBar'
import { Card, CardBody, CardTitle, Container, Row, Col, CardHeader, Button, Table, Progress } from "reactstrap";
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
                        onLogOut={this.handleLogOut}
                    />
                    <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
                        <Container fluid>
                            <div className="header-body">
                                {/* Card stats */}
                                <Row>
                                    <Col lg="6" xl="3">
                                        <Card className="card-stats mb-4 mb-xl-0">
                                            <CardBody>
                                                <Row>
                                                    <div className="col">
                                                        <CardTitle
                                                            tag="h5"
                                                            className="text-uppercase text-muted mb-0"
                                                        >
                                                            Users
                                                        </CardTitle>
                                                        <span className="h2 font-weight-bold mb-0">
                                                            100
                                                        </span>
                                                    </div>
                                                    <Col className="col-auto">
                                                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                                                            <i className="fas fa-users" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <p className="mt-3 mb-0 text-muted text-sm">
                                                    <span className="text-danger mr-2">
                                                        <i className="fas fa-arrow-down" /> 3.48%
                                                    </span>{" "}
                                                    <span className="text-nowrap">Since last week</span>
                                                </p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col lg="6" xl="3">
                                        <Card className="card-stats mb-4 mb-xl-0">
                                            <CardBody>
                                                <Row>
                                                    <div className="col">
                                                        <CardTitle
                                                            tag="h5"
                                                            className="text-uppercase text-muted mb-0"
                                                        >
                                                            Reviews
                                                        </CardTitle>
                                                        <span className="h2 font-weight-bold mb-0">
                                                            5
                                                        </span>
                                                    </div>
                                                    <Col className="col-auto">
                                                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                                            <i className="fas fa-chart-bar" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <p className="mt-3 mb-0 text-muted text-sm">
                                                    <span className="text-danger mr-2">
                                                        <i className="fas fa-arrow-down" /> 3.48%
                                                    </span>{" "}
                                                    <span className="text-nowrap">Since last week</span>
                                                </p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col lg="6" xl="3">
                                        <Card className="card-stats mb-4 mb-xl-0">
                                            <CardBody>
                                                <Row>
                                                    <div className="col">
                                                        <CardTitle
                                                            tag="h5"
                                                            className="text-uppercase text-muted mb-0"
                                                        >
                                                            Payments
                                                        </CardTitle>
                                                        <span className="h2 font-weight-bold mb-0">
                                                            45
                                                        </span>
                                                    </div>
                                                    <Col className="col-auto">
                                                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                                                            <i className="fas fa-money-check" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <p className="mt-3 mb-0 text-muted text-sm">
                                                    <span className="text-danger mr-2">
                                                        <i className="fas fa-arrow-down" /> 3.48%
                                                    </span>{" "}
                                                    <span className="text-nowrap">Since last week</span>
                                                </p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col lg="6" xl="3">
                                        <Card className="card-stats mb-4 mb-xl-0">
                                            <CardBody>
                                                <Row>
                                                    <div className="col">
                                                        <CardTitle
                                                            tag="h5"
                                                            className="text-uppercase text-muted mb-0"
                                                        >
                                                            Services
                                                        </CardTitle>
                                                        <span className="h2 font-weight-bold mb-0">
                                                            200
                                                        </span>
                                                    </div>
                                                    <Col className="col-auto">
                                                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                                                            <i className="fas fa-truck" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <p className="mt-3 mb-0 text-muted text-sm">
                                                    <span className="text-danger mr-2">
                                                        <i className="fas fa-arrow-down" /> 3.48%
                                                    </span>{" "}
                                                    <span className="text-nowrap">Since last week</span>
                                                </p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
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
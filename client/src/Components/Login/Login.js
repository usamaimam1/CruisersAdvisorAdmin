import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../services/base";
import { AuthContext } from "../../services/Auth";
import ClipLoader from "react-spinners/ClipLoader";
import TopLogo from '../../assets/Logo.gif'
import logo from '../../assets/logo-dark.png'
import swal from 'sweetalert'
import axios from 'axios'
import { css } from "@emotion/core";
import {
    Button, Card, CardHeader, CardBody, FormGroup, Form, Container,
    Input, InputGroupAddon, InputGroupText, InputGroup, Row, Col
} from "reactstrap";
import AuthNavBar from "../Helpers/AuthNavBar";
import AuthFooter from "../Helpers/AuthFooter";
import logoWhite from '../../assets/logo-dark.png'
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const Login = ({ history }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false)
    const handleLogin = async event => {
        event.preventDefault();
        console.log(email, password)
        if (email !== null && password !== null) {
            try {
                setLoading(true)
                const response = await axios.post('/api/verifyadmin', { data: { email: email } })
                const user = await app.auth().signInWithEmailAndPassword(email, password);
                setEmail(null); setPassword(null); setLoading(false)
                history.push('/')
            } catch (error) {
                setLoading(false)
                swal('Warning', error.message, 'error')
            }
        } else {
            swal('Warning', 'Please fill in all the details', 'error')
        }
    }
    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }
    // console.log(email, password)
    return (
        loading ?
            <div className="sweet-loading">
                <ClipLoader
                    css={override}
                    size={150}
                    color={"#123abc"}
                    loading={loading}
                />
            </div> :
            <>
                <div className="main-content">
                    <AuthNavBar />
                    <div className="header bg-gradient-info py-9 py-lg-10">
                        <Container>
                            <div className="header-body text-center mb-2">
                                <Row className="justify-content-center">
                                    <Col lg="5" md="6">
                                        <h1 className="text-white">Welcome!</h1>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                        <div className="separator separator-bottom separator-skew zindex-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="fill-default"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div>
                    </div>
                    {/* Page content */}
                    <Container className="mt--8">
                        <Row className="justify-content-center">
                            <Col lg="5" md="7">
                                <Card className="bg-secondary shadow border-0">
                                    <CardBody className="px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-4">
                                            <img alt="..." src={logoWhite} />
                                        </div>
                                        <Form role="form">
                                            <FormGroup className="mb-3">
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input placeholder="Email" type="email" autoComplete="new-email" value={email} onChange={event => setEmail(event.target.value)} />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-lock-circle-open" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input placeholder="Password" type="password" autoComplete="new-password" value={password} onChange={event => setPassword(event.target.value)} />
                                                </InputGroup>
                                            </FormGroup>
                                            <div className="custom-control custom-control-alternative custom-checkbox">
                                                <input
                                                    className="custom-control-input"
                                                    id=" customCheckLogin"
                                                    type="checkbox"
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor=" customCheckLogin"
                                                >
                                                    <span className="text-muted">Remember me</span>
                                                </label>
                                            </div>
                                            <div className="text-center">
                                                <Button className="my-4" color="primary" type="button" onClick={handleLogin}>
                                                    Sign in
                                                </Button>
                                            </div>
                                        </Form>
                                    </CardBody>
                                </Card>
                                <Row className="mt-3">
                                    <Col xs="6">
                                        <a
                                            className="text-light"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            <small>Forgot password?</small>
                                        </a>
                                    </Col>
                                    {/* <Col className="text-right" xs="6">
                                        <a
                                            className="text-light"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            <small>Create new account</small>
                                        </a>
                                    </Col> */}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <AuthFooter />
            </>
        // <div className="main-content">
        //     <AuthNavBar />
        //     <div className="header bg-gradient-info py-7 py-lg-8">
        //         <Container>
        //             <div className="header-body text-center mb-7">
        //                 <Row className="justify-content-center">
        //                     <Col lg="4" md="4">
        //                         <h1 className="text-white">Welcome!</h1>
        //                     </Col>
        //                 </Row>
        //             </div>
        //         </Container>
        //         <div className="separator separator-bottom separator-skew zindex-100">
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 preserveAspectRatio="none"
        //                 version="1.1"
        //                 viewBox="0 0 2560 100"
        //                 x="0"
        //                 y="0"
        //             >
        //                 <polygon
        //                     className="fill-default"
        //                     points="2560 0 2560 100 0 100"
        //                 />
        //             </svg>
        //         </div>
        //     </div>
        //     <Container className="mt--8 pb-5">
        //         <Row className="justify-content-center">
        //             <Col lg="5" md="7">
        //                 <Card className="bg-secondary shadow border-0">
        //                     <CardBody className="px-lg-5 py-lg-5">
        //                         <div className="text-center text-muted mb-4">
        //                             <small>Or sign in with credentials</small>
        //                         </div>
        //                         <Form role="form">
        //                             <FormGroup className="mb-3">
        //                                 <InputGroup className="input-group-alternative">
        //                                     <InputGroupAddon addonType="prepend">
        //                                         <InputGroupText>
        //                                             <i className="ni ni-email-83" />
        //                                         </InputGroupText>
        //                                     </InputGroupAddon>
        //                                     <Input placeholder="Email" type="email" autoComplete="new-email" />
        //                                 </InputGroup>
        //                             </FormGroup>
        //                             <FormGroup>
        //                                 <InputGroup className="input-group-alternative">
        //                                     <InputGroupAddon addonType="prepend">
        //                                         <InputGroupText>
        //                                             <i className="ni ni-lock-circle-open" />
        //                                         </InputGroupText>
        //                                     </InputGroupAddon>
        //                                     <Input placeholder="Password" type="password" autoComplete="new-password" />
        //                                 </InputGroup>
        //                             </FormGroup>
        //                             <div className="custom-control custom-control-alternative custom-checkbox">
        //                                 <input
        //                                     className="custom-control-input"
        //                                     id=" customCheckLogin"
        //                                     type="checkbox"
        //                                 />
        //                                 <label
        //                                     className="custom-control-label"
        //                                     htmlFor=" customCheckLogin"
        //                                 >
        //                                     <span className="text-muted">Remember me</span>
        //                                 </label>
        //                             </div>
        //                             <div className="text-center">
        //                                 <Button className="my-4" color="primary" type="button">
        //                                     Sign in
        //                         </Button>
        //                             </div>
        //                         </Form>
        //                     </CardBody>
        //                 </Card>
        //                 <Row className="mt-3">
        //                     <Col xs="6">
        //                         <a
        //                             className="text-light"
        //                             href="#pablo"
        //                             onClick={e => e.preventDefault()}
        //                         >
        //                             <small>Forgot password?</small>
        //                         </a>
        //                     </Col>
        //                     <Col className="text-right" xs="6">
        //                         <a
        //                             className="text-light"
        //                             href="#pablo"
        //                             onClick={e => e.preventDefault()}
        //                         >
        //                             <small>Create new account</small>
        //                         </a>
        //                     </Col>
        //                 </Row>
        //             </Col>
        //         </Row>
        //     </Container>
        // </div>
    );
};

export default withRouter(Login);
import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../services/base";
import { AuthContext } from "../../services/Auth";
import TopLogo from '../../assets/Logo.gif'
import logo from '../../assets/logo-dark.png'
import swal from 'sweetalert'
import axios from 'axios'
const Login = ({ history }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const handleLogin = async event => {
        event.preventDefault();
        console.log(email, password)
        try {
            const response = await axios.post('/api/verifyadmin', { data: { email: email } })
            console.log(response)
            // const user = await app.auth().signInWithEmailAndPassword(email, password);
            // const dataSnapshot = await app.database().ref('admins').child(user.user.uid).once('value')
            // const isAdmin = dataSnapshot.val()
            // console.log(isAdmin)
            // if (isAdmin) {
            //     setEmail(null); setPassword(null);
            //     history.push("/");
            // } else {
            //     swal('Warning', 'This User Does Not Have Admin Previliges', 'error')
            //     await app.auth().signOut()
            // }
        } catch (error) {
            console.log(error)
            swal('Warning', error.message, 'error')
            if (app.auth().currentUser !== null) {
                await app.auth().signOut()
            }
        }
    }
    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }
    console.log(email, password)
    return (
        <body className="bg-default">
            {/* Nav Bar */}
            <nav id="navbar-main" className="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="dashboard.html">
                        <img src={TopLogo} />
                    </a>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse navbar-custom-collapse collapse" id="navbar-collapse">
                            <div className="navbar-collapse-header">
                                <div className="row">
                                    <div className="col-6 collapse-brand">
                                        <a href="dashboard.html">
                                            <img src="../assets/img/brand/blue.png" />
                                        </a>
                                    </div>
                                    <div className="col-6 collapse-close">
                                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-lg-none" />
                        </div> */}
                </div>
            </nav>

            <div className="main-content">
                {/* Upper div */}
                <div className="header bg-gradient-primary py-7 py-lg-1 pt-lg-7">
                    <div className="container">
                        <div className="header-body text-center mb-7">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                                    <h2 style={{ fontFamily: 'poppins' }} className="text-white">Welcome! CruisersADVISORS ADMIN</h2>
                                    {/* <p className="text-lead text-white">Use these awesome forms to login or create new account in your project for free.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <polygon className="fill-default" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>
                {/* Sign In Div */}
                <div className="container mt--6 pb-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-7">
                            <div className="card bg-secondary border-0 mb-0">
                                <div className="card-body px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                        <img src={logo} style={{ height: 75, width: 120 }}></img>
                                    </div>
                                    {/* <div text-center>
                    <text style={{ textAlign: 'center', fontSize: 12, fontFamily: 'poppins', fontWeight: 'bold', alignSelf: 'center' }}>CruisersADVISORS ADMIN</text>
                  </div> */}

                                    <form role="form">
                                        <div className="form-group mb-3">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                                </div>
                                                <input className="form-control" placeholder="Email" name="email" type="email" value={email} onChange={event => {
                                                    setEmail(event.target.value);
                                                    // console.log(event.target.value)
                                                }} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                                </div>
                                                <input className="form-control" name="password" placeholder="Password" type="password" value={password} onChange={event => setPassword(event.target.value)} />
                                            </div>
                                        </div>
                                        <div className="custom-control custom-control-alternative custom-checkbox">
                                            <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                                            <label className="custom-control-label" for="customCheckLogin">
                                                <span className="text-muted">Remember me</span>
                                            </label>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary my-4" onClick={handleLogin}>Sign in</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <a href="#" className="text-light"><small>Forgot password?</small></a>
                                </div>
                                {/* <div className="col-6 text-right">
                                        <a href="#" className="text-light"><small>Create new account</small></a>
                                    </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="py-5" id="footer-main">
                <div className="container">
                    <div className="row align-items-center justify-content-xl-between">
                        <div className="col-xl-6">
                            <div className="copyright text-center text-xl-left text-muted">
                                &copy; 2020 <a href="https://www.creative-tim.com" className="font-weight-bold ml-1" target="_blank">Creative Tim</a>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                                <li className="nav-item">
                                    <a href="https://www.creative-tim.com" className="nav-link" target="_blank">Creative Tim</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.creative-tim.com/presentation" className="nav-link" target="_blank">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a href="http://blog.creative-tim.com" className="nav-link" target="_blank">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md" className="nav-link" target="_blank">MIT License</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </body >
    );
};

export default withRouter(Login);
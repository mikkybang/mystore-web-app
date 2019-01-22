import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

const Register = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h5 text-center mb-4">Sign up</p>
                        <div className="grey-text">
                            <MDBInput
                                label="Your name"
                                icon="user"
                                group
                                name="name"
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="Your email"
                                icon="envelope"
                                group
                                name="email"
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <select className="browser-default custom-select">
                                <option selected>Kindly Select your type</option>
                                <option value="Buyer">Buyer</option>
                                <option value="Seller">Seller</option>
                            </select>
                            <MDBInput
                                label="Your password"
                                icon="lock"
                                group
                                name="password"
                                type="password"
                                validate
                            />
                            <MDBInput
                                label="Confirm your password"
                                icon="lock"
                                group
                                name="password-confirm"
                                type="password"
                                validate
                            />
                        </div>
                        <div className="text-center">
                            <MDBBtn color="primary">Register</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Register;
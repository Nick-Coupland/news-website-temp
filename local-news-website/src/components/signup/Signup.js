import React, { Component } from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

class Signup extends Component {
    handleSubmit(submitValues) {
        this.props.onSubmit(submitValues);
    }

    SignupSchema = Yup.object().shape({
        username: Yup.string()
            .min(3, "Username must be at least 3 characters")
            .max(20, "Username cannot exceed 20 characters")
            .required("Required"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .max(20, "Password cannot exceed 20 characters")
            .required("Required"),
        retypePassword: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .max(20, "Password cannot exceed 20 characters")
            .required("Required")
            .oneOf([Yup.ref('password'), null]),
    });

    render() {
        return (
            <div>
                <Formik
                initialValues={{
                    username: "",
                    password: "",
                    retypePassword: ""
                }}
                validationSchema={this.SignupSchema}
                onSubmit={(values) => {
                    this.handleSubmit(values);
                }}
                >
                {({errors, touched}) => (
                    <Form className="signupForm">
                        <h1>Sign Up to Nick's News!</h1>
                        <label htmlFor="username">Username</label>
                        <Field name="username" type="text" placeholder="Enter Username"/>
                        {errors.username && touched.username ? (
                            <div>{errors.username}</div>
                        ) : null}

                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password" placeholder="Enter password"/>
                        {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                        ) : null}

                        <label htmlFor="retypePassword">Confirm password</label>
                        <Field name="retypePassword" type="password" placeholder="Retype password"/>
                        {errors.retypePassword && touched.retypePassword ? (
                            <div>{errors.retypePassword}</div>
                        ) : null}

                        <button type="submit">Sign up</button>
                    </Form>
                )}
                </Formik>
            </div>
        );
    }
}

export default Signup;
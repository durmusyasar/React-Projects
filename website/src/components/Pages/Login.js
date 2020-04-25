import React, {Component} from 'react'
import Field from '../Common/Field'
import {withFormik} from 'formik'
import * as yup from 'yup'

const fileds = [
     {name: 'email', elementName: 'input', type: 'email', placeholder: 'Your Email'},
     {name: 'password', elementName: 'input', type: 'password', placeholder: 'Your password'}
]


class Login extends Component {
    render(){
        return (
            <div className="login-page">
                <div className="container">
                    <div className="login-form">
                    <div className="row">
                        <h1>Login</h1>
                    </div>
                    <form onSubmit={this.props.handleSubmit}>
                        <div className="row">
                                {fileds.map((f,i) => {
                                    return (
                                            <div className="col-md-12">
                                            <Field
                                            key={i}
                                            {...f}
                                            value={this.props.values[f.name]}
                                            name={f.name}
                                            onChange={this.props.handleChange}
                                            onblur={this.props.handleBlur}
                                            touched={this.props.touched[f.name]}
                                            errors={this.props.errors[f.name]}
                                            />
                                        </div>
                                    )
                                })}
                                <div className="col-md-12">
                                    <button className="btn btn-primary btn-block">Login</button>
                                </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    validationSchema: yup.object().shape({
        email: yup.string().email('Email is invalid').required("You need to login email adress"),
        password: yup.string().required("You need to enter you password")
    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log("Login attempt", values)
    }
})(Login)




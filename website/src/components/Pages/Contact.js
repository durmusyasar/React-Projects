import React, {Component} from 'react'
import Field from '../Common/Field'

const fields = {
    sections: [
        [
            {name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name*'},
            {name: 'email', elementName: 'input', type: 'text', placeholder: 'Your email*'},
            {name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number*'},
        ],
        [
            {name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Type your message*'},
        ]
    ]
}


class Contact extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            email: '',
            phone: '',
            message: ''
        }
    }

    submitForm = () => {
        alert("Form submited. Thank you very much!")
    }
    
    render() {
        return(
            <div>
                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={e => this.submitForm(e)}> 
                            <div className="row align-items-stretch mb-5">
                                {fields.sections.map((section, sectionIndex) => {
                                    return (
                                        <div className="col-md-6">
                                            {section.map((field, i) => {
                                                return <Field
                                                    {...field}
                                                    key = {i}
                                                    value = {this.state[field.name]}
                                                    onChange = {e => this.setState({
                                                        [field.name]: e.target.value
                                                    })}
                                                />
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="text-center">
                                <div id="success"></div>
                                <button
                                    className="btn btn-primary btn-xl text-uppercase"
                                    id="sendMessageButton"
                                    type="submit"
                                    >Send Message</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div> 
        )
    }
}

export default Contact
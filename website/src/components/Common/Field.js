import React, {Component} from 'react'

class Field extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            email: '',
            phone: '',
            message: ''
        }
    }

    render() {
        return(
            <div className="form-group">
                {this.props.elementName === 'input' ?
                    <input
                        className="form-control"
                        id={this.props.name}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        required="required"
                        data-validation-required-message="Please enter your name."
                        value = {this.state.value}
                        onChange={e => this.props.onChange(e)}
                        />
                    :
                    <textarea
                        className="form-control"
                        id={this.props.name}
                        placeholder={this.props.placeholder}
                        required="required"
                        data-validation-required-message="Please enter a message."
                        value = {this.props.value}
                        onChange={e => this.props.onChange(e)}
                    />
                }
                <p className="help-block text-danger"></p>
            </div>
        )
    }
}

export default Field
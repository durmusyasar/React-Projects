import React, {Component} from 'react'

class TeamMember extends Component{
    render() {
        return(
            <div>
                <div className="col-sm-auto">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src={this.props.image} alt="" />
                        <h4>{this.props.name}</h4>
                        <p className="text-muted">{this.props.role}</p>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div> 
        )
    }
}

export default TeamMember
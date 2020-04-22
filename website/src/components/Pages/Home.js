import React, {Component} from 'react'
import Header from '../Common/Header'
import image from '../assets/img/header.jpg'

// Re-usable components
import Services from '../Common/Services'
import Portfolio from '../Common/Portfolio'
import Timeline from '../Common/Timeline'
import Team from '../Common/Team'
import Client from '../Common/Client'
import Contact from '../Pages/Contact'
import Footer from '../Common/Footer'


class Home extends Component{
    render() {
        return(
            <div>
                <Header
                    title = "Welcome To Our studio!"
                    subtitle = "IT'S NICE TO MEET YOU"
                    buttonText = "Tell me more"
                    link = "/services"
                    showButton = {true}
                    image = { image }
                />
                <Services />
                <Portfolio />
                <Timeline />
                <Team />
                <Client />
                <Contact />
                <Footer />
            </div> 
        )
    }
}

export default Home
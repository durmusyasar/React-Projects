import React, {Component} from 'react'
import ClientItem from './ClientItem'

import img1 from '../assets/img/logos/creative-market.jpg'
import img2 from '../assets/img/logos/designmodo.jpg'
import img3 from '../assets/img/logos/envato.jpg'
import img4 from '../assets/img/logos/themeforest.jpg'

const clients = [
    {image: img1},
    {image: img2},
    {image: img3},
    {image: img4}
]

class Client extends Component{
    render() {
        return(
            <div>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            {clients.map((item, index) => {
                                return <ClientItem {...item} key={index} />
                            })}
                        </div>
                </div>
            </section>
            </div> 
        )
    }
}

export default Client
import React, { Component } from 'react'
import House from './House'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
        this.getHouses = this.getHouses.bind(this)
    }

    componentDidMount() {
        this.getHouses()
    }
    getHouses() {
        axios.get('/api/houses').then(
            res => {
                this.setState({
                    houses: res.data
                })
            }
        )
    }
    deleteHouse(id) {
        console.log(id)
        axios.delete(`api/house/${id}`).then(
            res => {
                this.getHouses()
            }
        )
    }
    render() {
        let displayHouses = this.state.houses.map((e, i) => {
            return <House key={e.id} details={e} delete={this.deleteHouse} />
        })
        return (
            <div className="dash">
            <div className="dash_subheader" >
                    <h2 className='dash_heading' >Dashboard</h2>
                    <Link to="/Wizard/step1" >
                        <button className="dash_subheader_button" >Add New Property</button>
                    </Link>
                </div>
            <div className="dash_prop_container">
                <h3 className='dash_prop_heading' >Home Listings</h3>
                {displayHouses}
            </div>
                

            </div>
        )
    }
}
export default Dashboard;
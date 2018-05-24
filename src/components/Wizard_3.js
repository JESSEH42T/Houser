import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios'
class Wizard_3 extends Component {
    constructor() {
        super()
        this.state = {
            mortgage:0,
            rent:0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit() {
        const { propertyName, address, city, formState, zipcode } = this.state
        axios.post('/api/house/:id', { propertyName, address, city, formState, zipcode }).then(
            this.props.history.push('/')
        )
    }
    render() {
        return (
            <div className='wiz' >
                <div className='wiz_subHeader' >
                    <h2 className='wiz_heading' >Add New Listing</h2>
                    
                </div>
                <div className="wiz_input_container" >
                    <div className="wiz_input_box" > <p>Monthly Mortgage Amount</p>
                <input onChange={this.handleChange} type='text' name='propertyName' /></div>
                    <div className="wiz_input_box"> <p>Desired Monthly Rent</p> 
                <input onChange={this.handleChange} type='text' name='address' /> </div>

                <button className="wiz_button" onClick={this.handleSubmit}>complete</button>
                </div>
            </div>
        )
    }
}
export default Wizard_3;
import React,{Component} from 'react';
import {Route, Link} from 'react-router-dom';
import axios from 'axios'
class Wizard_1 extends Component {
    constructor() {
        super()
        this.state = {
            propertyName: '',
            address: '',
            city: '',
            formState: '',
            zipcode: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    // handleNext() {
    //     const { propertyName, address, city, formState, zipcode } = this.state
    //     axios.post('/api/house/:id', { propertyName, address, city, formState, zipcode }).then(
    //         this.props.history.push('/')
    //     )
    // }
    render() {
        return (
            <div className='wiz' >
                <div className='wiz_subHeader' >
                    <h2 className='wiz_heading' >Add New Listing</h2>
                    
                </div>
                <div className="wiz_input_container" >
                    <div className="wiz_input_box" > <p>Property Name</p>
                <input onChange={this.handleChange} type='text' name='propertyName' /></div>
                    <div className="wiz_input_box"> <p>Address</p> 
                <input onChange={this.handleChange} type='text' name='address' /> </div>
                    <div className="wiz_input_box"> <p>City</p> 
                <input onChange={this.handleChange} type='text' name='city' /></div>
                    <div className="wiz_input_box"> <p>State</p> 
                <input onChange={this.handleChange} type='text' name='formState' /></div>
                    <div className="wiz_input_box"> <p>Zip</p> 
                <input onChange={this.handleChange} type='integer' name='zipcode' /></div>
                </div>
                <Link to='/wizard/step2' ><button className="wiz_button" >Next Step</button></Link>
            </div>
        )
    }
}
export default Wizard_1;
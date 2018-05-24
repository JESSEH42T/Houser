import React,{Component} from 'react';
import {Route, Link} from 'react-router-dom';

class Wizard_2 extends Component {
    constructor() {
        super()
        this.state = {
            imgUrl:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleNext = this.handleNext.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleNext() {
        // const { imgUrl } = this.state
        // axios.post('/api/house/:id', { propertyName, address, city, formState, zipcode }).then(
        //     this.props.history.push('/')
        // )
    }
    render() {
        return (
            <div className='wiz' >
                <div className='wiz_subHeader' >
                    <h2 className='wiz_heading' >Add New Listing</h2>
                    
                </div>
                <div className="wiz_input_container" >
                    <div className="wiz_input_box" > <p>Property Name</p>
                <input onChange={this.handleChange} type='text' name='imgUrl' /></div>
                </div>
                <button className="wiz_button" onClick=''>Previous Step</button>
                <Link to='/wizard/step3' ><button className="wiz_button" onClick=''>Next Step</button></Link>
            </div>
        )
    }
}
export default Wizard_2;
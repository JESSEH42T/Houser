import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
import Step1 from './Wizard_1';
import Step2 from './Wizard_2';
import Step3 from './Wizard_3';


class Wizard extends Component {
    constructor() {
        super()
        this.state={
            nothing:[]
        } 
    }  
    render() {
        return (
            <div className='wiz' >
            <Link to='/'><button>Cancel</button></Link>
            <Route path='/wizard/step1' component= { Step1 }/>
            <Route path='/wizard/step2' component= { Step2 }/>
            <Route path='/wizard/step3' component= { Step3 }/>
            
            </div>
                
        )
    }
}
export default Wizard;
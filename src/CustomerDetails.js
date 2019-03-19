import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios';

export default class CustomerDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidUpdate(prevProps) {
        if(this.props.val !== prevProps.val) {
            this.getCustomerDetails(this.props.val)
        }
    }

    getCustomerDetails(id) {
        axios.get('assets/samplejson/customer' +id+'.json').then(res => {
            this.setState({CustomerDetails: res})
        })
    }

    render() {
        if(!this.state.customerDetails)
            return (<p>Loading data</p>)
        return (<div className="customerdetails">
            <Panel bsStyle="info" className="centeralign">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">{this.state.customerDetails.data.name}</Panel.Title>
                </Panel.Heading>
                <Panel.body>
                    <p>Name : {this.state.customerDetails.data.name}</p>
                    <p>Email : {this.state.customerDetails.data.email}</p>
                    <p>Phone : {this.state.customerDetails.data.phone}</p>
                    <p>City : {this.state.customerDetails.data.city}</p>
                    <p>State : {this.state.customerDetails.data.state}</p>
                    <p>Country : {this.state.customerDetails.data.country}</p>
                    <p>Organization : {this.state.customerDetails.data.organization}</p>
                    <p>Job Profile : {this.state.customerDetails.data.jobProfile}</p>
                    <p>Addition Info : {this.state.customerDetails.data.additionInfo}</p>
                </Panel.body>
            </Panel>
        </div>)
    }
}
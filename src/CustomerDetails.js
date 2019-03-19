import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios';

export default class CustomerDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.getCustomerDetails(this.props.val)
    }

    componentDidUpdate(prevProps) {
        if(this.props.val !== prevProps.val) {
            this.getCustomerDetails(this.props.val)
        }
    }
    
    getCustomerDetails(id) {
        console.log(id)
        axios.get('assets/samplejson/customer' +id+ '.json').then(res => {
            console.log(res)           
            this.setState({customerDetail: res})
        })
    }

    render() {
        if(!this.state.customerDetail)
            return (<p>Loading data</p>)
        return (<div className="customerdetail">
            <Panel bsStyle="info" className="centeralign">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">{this.state.customerDetail.data.name}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <p>Name : {this.state.customerDetail.data.name}</p>
                    <p>Email : {this.state.customerDetail.data.email}</p>
                    <p>Phone : {this.state.customerDetail.data.phone}</p>
                    <p>City : {this.state.customerDetail.data.city}</p>
                    <p>State : {this.state.customerDetail.data.state}</p>
                    <p>Country : {this.state.customerDetail.data.country}</p>
                    <p>Organization : {this.state.customerDetail.data.organization}</p>
                    <p>Job Profile : {this.state.customerDetail.data.jobProfile}</p>
                    <p>Addition Info : {this.state.customerDetail.data.additionInfo}</p>
                </Panel.Body>
            </Panel>
        </div>)
    }
}
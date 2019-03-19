import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import CustomerDetails from './CustomerDetails';
import axios from 'axios';

export default class Customers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCustomer: 1
        }
    }

    componentDidMount() {
        this.getCustomerData();
    }

    getCustomerData() {
        axios.get('assets/samplejson/customerlist.json').then(res => {
            this.setState({customerList: res})
        })
    }

    render() {
        if(!this.state.customerList) 
            return (<p>Loading data</p>)
        return (<div className="addmargin">
            <div className="col-md-3">
            {
                this.state.customerList.data.map(customer => <Panel bsStyle="info" key={customer.name}>
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">{customer.name}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <p>{customer.email}</p>
                        <p>{customer.phone}</p>

                        <Button bsStyle="info" onClick={() => this.setState({selectedCustomer: customer.id})}>
                            Click to View Details
                        </Button>
                    </Panel.Body>
                </Panel>)
            }
            </div>
            <div className="col-md-6">
                <CustomerDetails val={this.state.selectedCustomer} />
            </div>
        </div>)
    }
}
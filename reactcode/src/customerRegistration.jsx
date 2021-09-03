import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import CustomerService from './customerService';


class CustomerRegistration extends React.Component {

    constructor(props) {
        super(props);
        this.state = { customerName: '1', customerRegNo: '1', customerId: '', statusMessage: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showCustomerDashBoard=this.showCustomerDashBoard.bind(this);
    }


    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    handleSubmit(event) {
        CustomerService.saveCustomer(this.state).then(response => {
            this.setState({
                customerId: response.data.customerId,
                companyName: response.data.companyName,
                customerRegNo: response.data.customerRegNo,
                statusMessage: "Customer Registration successfull"
            }
            );

        }).catch(error => {
            console.log(error)
            this.state.statusMessage = "Customer Registration failed !!!!!!!!!"
        });
        event.preventDefault();
    }

    showCustomerDashBoard(event){
        alert("Customer dash board...");
        this.props.history.push('/customerList');
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <a href="listCustomer" onClick={this.showCustomerDashBoard}>Customer Dashboard      </a>

                <Link to="/listCustomer">customerList</Link>


                <p> {this.state.statusMessage} </p>

                <p> Please note your Customer ID : {this.state.customerId}  </p>

                <form onSubmit={this.handleSubmit}>
                    <p>   <label>
                        Customer Name:
                        <input type="text" name="customerName" value={this.state.customerName} onChange={this.handleChange} />
                    </label>
                    </p>
                    <label>
                        Customer Regitration No:
                        <input type="text" name="customerRegNo" value={this.state.customerRegNo} onChange={this.handleChange} />
                    </label>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}


export default CustomerRegistration;

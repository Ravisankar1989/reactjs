import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:4700/api/customer/";

class CustomerService {

    saveCustomer(customer) {
        alert("customer service called...." + customer.customerName);
       return axios.post(EMPLOYEE_API_BASE_URL + "register", customer);
    }
}


export default new CustomerService();
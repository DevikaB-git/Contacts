import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import './style.css';
import Axios from 'axios';
import Dropdown1 from './Dropdown1'



class Dropdown extends React.Component {



    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }



    handleClick() {

        let selectElement = document.querySelector('#view1');

        let output = selectElement.value;

        let selectElement1 = document.querySelector('#view2');

        let output1 = selectElement1.value;

        document.querySelector('.output').textContent = output

        document.querySelector('.output1').textContent = output1;

        document.querySelector('.output2').textContent = output + " " + output1;

    }


    render() {

        return (
            <div class="row">
                <header>CONTACT</header>
                <Form style={{ 'position': 'relative', 'max-width': '60%', 'margin-left': '30%', 'margin-top': '100px' }}>
                    <Form.Field>
                        <label htmlFor="fname">First Name</label>
                        <Dropdown1 id="view1" />

                    </Form.Field>
                </Form>
                <Form style={{ 'position': 'relative', 'max-width': '60%', 'margin-left': '55%', 'margin-top': '-80px' }}>
                    <Form.Field>
                        <label htmlFor="lname">Last Name</label>
                        <Dropdown1 id="view2" />

                    </Form.Field>
                    <Button onClick={this.handleClick} style={{ 'background-color': 'red', 'width': '180px', 'margin-left': '-175px', 'margin-top': '20px', 'height': '50px' }}
                        primary >SUBMIT</Button>
                    <h1 style={{ 'margin-top': '30px', 'margin-left': '-130px', 'margin-bottam': '-15px;', 'font-size': '19px', 'text-decoration': 'underline' }}>RESULTS</h1>
                </Form>
                <div class="row" style={{ 'width': '147px', 'margin-top': '160px', 'margin-left': '-350px' }}>

                    <p style={{}}>
                        First Name  :   <span class="output"></span>
                    </p>

                    <p id="result1" style={{}}>
                        Last Name  :   <span class="output1"></span>
                    </p>

                    <p id="result1" style={{}}>
                        Full Name  :   <span class="output2"></span>
                    </p>
                </div>
            </div>




        )

    }
}

export default Dropdown;

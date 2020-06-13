import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import './style.css';


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

        document.querySelector('.output').textContent = output;

        document.querySelector('.output1').textContent = output1;


    }


    render() {

        return (
            <div class="row">
                <header>CONTACT</header>
                <Form style={{ 'position': 'relative', 'max-width': '60%', 'margin-left': '30%', 'margin-top': '100px' }} onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label htmlFor="fname">First Name</label>
                        <select id="view1" class="dropdown" style={{ width: "200px", height: "50px" }}>
                            <option value="Tony">Tony</option>
                            <option value="Tom">Tom</option>
                            <option value="Jerry">Jerry</option>
                        </select>
                    </Form.Field>
                </Form>
                <Form style={{ 'position': 'relative', 'max-width': '60%', 'margin-left': '55%', 'margin-top': '-80px' }}>
                    <Form.Field>
                        <label htmlFor="lname">Last Name</label>
                        <select id="view2" class="dropdown" style={{ width: "200px", height: "50px" }}>
                            <option value="Stark">Stark</option>
                            <option value="Hello">Hello</option>
                            <option value="World">World</option>
                        </select>
                    </Form.Field>
                    <Button onClick={this.handleClick} style={{ 'background-color': 'red', 'width': '180px', 'margin-left': '-175px', 'margin-top': '20px', 'height': '50px' }} primary >SUBMIT</Button>
                    <h1 style={{ 'margin-top': '30px', 'margin-left': '-160px', 'margin-bottam': '5px;' }}>RESULTS</h1>
                </Form>
                <div class="row" >

                    <p style={{ 'margin-top': '50px', 'margin-left': '650px' }}>
                        First Name :
                    <span class="output"></span>
                    </p>

                    <p id="result1" style={{ 'margin-top': '90px', 'margin-left': '-75px' }}>
                        Last Name :
                    <span class="output1"></span>
                    </p>

                    <p id="result1" style={{ 'margin-top': '130px', 'margin-left': '-70px' }}>
                        Full Name :
                    <span class="output2"></span>
                    </p>
                </div>
            </div>


        )

    }
}

export default Dropdown;

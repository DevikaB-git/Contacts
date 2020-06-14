import React, { Component } from 'react';
class Dropdown1 extends Component {
    state = {
        list: [
            "Tony",
            "Stark",
            "Hello",
            "World",
            "Tom",
            "Jerry"
        ]

    }
    render() {
        return (
            <div>
                <select id={this.props.id} style={{ width: "200px", height: "50px" }}>
                    {this.state.list.map(list => (
                        <option key={list} value={list}>{list}</option>

                    ))}

                </select>

            </div>

        );
    }
}
export default Dropdown1;
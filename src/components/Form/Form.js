import React from 'react';

import { CirclePicker } from 'react-color';

import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);

        // Set an initial state
        this.state = {
            name: '',
            class: '',
            color: '#000000',
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleTermChange(event) {
        // When someone types, change the state to that value
        // Getting the target makes sure that we're altering the proper state value
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleClick(event) {
        // This will run a prop method to add the character to the list
        console.log('Adding ' + this.state.name + ' the ' + this.state.class);
        const player = {
            color: this.state.color,
            title: this.state.name,
            text: this.state.class,
        };

        this.props.addPlayer(player);

        event.preventDefault();
    }

    handleColorChange(color, event) {
        console.log(color.hex);
        this.setState({
            color: color.hex,
        });
        event.preventDefault();
    }

    render() {
        return (
            <div className="form">
                <form>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={this.handleTermChange}
                    />

                    <input
                        type="text"
                        name="class"
                        placeholder="Description"
                        onChange={this.handleTermChange}
                    />

                    <CirclePicker onChange={this.handleColorChange} />
                </form>
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default Form;

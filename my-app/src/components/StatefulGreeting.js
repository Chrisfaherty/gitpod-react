import React from "reach";

class StatefulGreeting extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }

    handleClick(){
        this.setState({
            introduction: "Goodbye!"
    });

    }

    render(){
        return (
            <div>
                <h1>{this.state.introduction} {this.state.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreeting;
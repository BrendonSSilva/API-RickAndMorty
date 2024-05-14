import React from "react";

interface Props {
    text: string;
    onClick: () => void;
}

class Button extends React.Component<Props> {

    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.text}</button>);
    }
}

export default Button;
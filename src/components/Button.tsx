import React from "react";
import {ButtonFilter} from '../assets/styles/index'

interface Props {
    text: string;
    variant?: 'primary' | 'secondary';
    onClick: () => void;
}

class Button extends React.Component<Props> {

    render() {
        const {text, onClick, variant} = this.props;
        return (
            <ButtonFilter variant={variant} onClick={onClick}>
                {text}
            </ButtonFilter>
        );
    }
}

export default Button;
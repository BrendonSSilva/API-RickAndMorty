import React from "react";
interface Props {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: string;
}

class Character extends React.Component<Props> {

    render() {
        return (
            <div>
                name: {this.props.name}
                status: {this.props.status},
                species: {this.props.species},
                type: {this.props.type},
                gender: {this.props.gender},
                origin: {this.props.origin},
            </div>
        );
    }
}

export default Character;
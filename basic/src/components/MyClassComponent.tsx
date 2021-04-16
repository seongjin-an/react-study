import React, {Component} from "react";

interface SomeProps {
    name: String
    favoriteNumber: Number
}

class SomeComponent extends Component<SomeProps> {
    constructor(props:SomeProps) {
        super(props);
        this.state = {
            name: 'hi',
            favoriteNumber:0,
            company:'world'
        }
    }
    render() {
        const {name, favoriteNumber} = this.props
        return <span>안녕.. {name} {favoriteNumber}</span>
    }
}
export default SomeComponent
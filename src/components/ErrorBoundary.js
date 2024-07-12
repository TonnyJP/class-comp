import { Component } from "react";

export class ErrorBoundary extends Component {
    constructor () {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <p>Oops.. something went wrong!</p>
        }
        return this.props.children
    }
}
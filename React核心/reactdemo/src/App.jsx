import React, { Component } from 'react'

function A(props, ref) {
    return <h1 ref={ref}>毛毛</h1>
}

const NewA = React.forwardRef(A)

class B extends React.Component {
    render() {
        return (
            <div ref={this.props.BRef}>
                帅帅
            </div>
        )
    }
}

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.ARef = React.createRef()
        this.BRef = React.createRef()
    }
    componentDidMount() {
        console.log(this.ARef, this.BRef)
    }
    
    render() {
        return (
            <div>
                Hello
                <NewA ref={this.ARef} />
                <B BRef={this.BRef}/>
            </div>
        )
    }
}

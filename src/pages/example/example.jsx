import './style.css'
import React, { Component, useState, useEffect } from 'react'

class example extends Component {
    constructor(props) {
        super(props)

        // creatte state
        this.state = {
            email: 'email here',
            password: 'email here',
            username: 'email here'
        }
    }

    componentDidMount() {
        console.log('didmount triger')
    }

    componentDidUpdate() {
        console.log('didupdate triger')
    }

    onInputChange = (el) => {
        this.setState({ email: el.target.value })
    }

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">{this.state.email}</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.onInputChange} />

                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

function ChildCompoenent(props) {
    return (
        <div className="content">
            <h1>{props.email}</h1>
        </div>
    )
}

function Sample() {
    const [valueEmail, setEmail] = useState('email here')
    const [valuePass, setPassword] = useState('password')

    // didupdate & didmount
    useEffect(() => {
        console.log('didmount')
    })

    useEffect(() => {
        console.log('didupdate email')
    }, [valueEmail])

    const onInputChange = (el) => {
        setEmail(el.target.value)
    }

    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <ChildCompoenent email={valueEmail} />
                    {/* <label for="exampleInputEmail1">{valueEmail}</label> */}
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onInputChange} />

                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Sample

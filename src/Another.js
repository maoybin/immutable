import React, { Component } from 'react'
import withCopyRight from './withCopyRight'

@withCopyRight
class Another extends Component {
    render() {
        return (
            <div>
                Another {this.props.name}
            </div>
        )
    }
}

export default  Another

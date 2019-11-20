import React, { Component } from 'react'

import {connect} from 'react-redux'

// import {} from 'immutable'

 class CounterDisplay extends Component {
    render() {
        console.log(this.props)
        return (
            <div>{this.props.count}</div>
        )
    }
}

const mapStateToProps = state =>{

    return {
        count: state.getIn(['counter','count'])
    }

}

export default connect(mapStateToProps)(CounterDisplay)


import React, { Component } from 'react'

// import Another from './Another'

import {CountDisplay,CounterBtn} from './components'

import { increment,decrement }from './actions/counter'

import {connect} from 'react-redux'


class App extends Component {
    render() {
        return (
         <>
            <CounterBtn onClick={this.props.decrement}>-</CounterBtn>
            <CountDisplay />
            <CounterBtn onClick={this.props.increment}>+</CounterBtn>
         </>
          
        )
    }
}

export default connect(null,{increment,decrement})(App)

import React, { Component } from 'react'

const withCopyRight = (YourConponents)=>{
    return class WithCopyRight extends Component {
        render() {
            console.log(this.props)
            return (
                <>
                    <YourConponents {...this.props}/>
                    <div>&copy; 2019 &emsp;大麦&emsp;理财 </div>
                </>
            )
        }
    }
}

export default withCopyRight;

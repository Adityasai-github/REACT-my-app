import React, { Component } from 'react'

class EventBind extends Component{
    constructor(props){
    super(props)
    this.state={
        message:'Hello sai'
    }

    }

    clickHandler(){
        this.setState({
            message:"Goodbye ra sai enti mari"
        })
        console.log(this)
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Click</button>
            </div>
        )
}
}

export default EventBind
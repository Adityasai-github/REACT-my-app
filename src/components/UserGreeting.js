import React, {Component } from 'react'

class UserGreeting extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }
    render(){
      if(this.state.isLoggedIn) {
        return <div>Hello ra Aditya</div>
      }else{
     return   <div>Welcome ra Guest</div>
      }
            
        
    }
}
export default UserGreeting
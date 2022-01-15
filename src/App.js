import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import UserGreeting from './components/UserGreeting';
import StyleSheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import LifecycleB from './components/LifecycleB';
class App extends Component {
 render(){
  return (
    <div className="App">
      < LifecycleA />
      < LifecycleB />
       {/* < Form /> */}
      {/* <Inline /> */}
      {/* < StyleSheet /> */}
      {/* < UserGreeting /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
     {/* <Greet name="Satish"/> 
     <Greet name="Anand" />
     <Greet name="Hari" /> */}
    {/*  <Welcome /> */}
    {/*<Hello /> */}
    </div>
  );
}
}

export default App;

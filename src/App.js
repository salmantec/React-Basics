import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import ParentComponent from "./components/ParentComponent";
// import Form from "./components/Form";
// import MountLifeCycleA from "./components/MountLifeCycleA";
import UpdatingLifeCycleA from "./components/UpdatingLifeCycleA";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet name="salman" profession="developer" /> */}
        {/* <Welcome /> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <ParentComponent /> */}
        {/* <Form /> */}
        {/* <MountLifeCycleA /> */}
        <UpdatingLifeCycleA />
      </div>
    );
  }
}

export default App;

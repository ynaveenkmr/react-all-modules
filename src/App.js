import React, { Component } from 'react';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Exmp from './component/Hello';
import Message from './component/Message';
import Counter from './component/Counter'
import ParentCompoent from './component/ParentComponent'
import NameList from './component/NameList'
import Stylesheet1 from './component/Stylesheet1'
import Stylesheet2 from './component/Stylesheet2'
import Counter_redux from './redux-components/Counter_redux'
import store  from './redux-components/store/index'
class App extends Component {
  render() { 
    return (
      <div className="App">
      {/* <Message />
        <Greet />
         <Welcome />
         <Welcome />
       <Exmp />
       <Counter />
       <ParentCompoent />
       <NameList />
       <Stylesheet1 />
       <Stylesheet2 primary={false}/> */}

       {/* redux files*/}

      <Counter_redux store={store}/>




      </div> 
    )
  }
}

export default App;
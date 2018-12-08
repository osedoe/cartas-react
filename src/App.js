import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/pages/Form';
import './App.css';

export default class App extends Component {

  render() {
    return <div className='app'>
      <Header />
      <Form />
    </div>
  }
}

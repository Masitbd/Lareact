import React from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Main from './components/Main.js'


import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
       </div>
    );
  }
}

export default App;

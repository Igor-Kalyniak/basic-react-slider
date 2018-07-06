// Include default React libraries
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Include style components
import styled from 'styled-components';

// Bootstrap styles
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

// Main React class
class App extends Component {
  render() {
    return (
            <div className="wrapper">
              <SayFullName name="Ihor" surname= "Kalyniak" link= "https://www.linkedin.com/in/igor-kalyniak/" />
              <SayFullName name="Harry" surname= "Potter" link= "https://github.com/Igor-Kalyniak" />
              <SayFullName name="Andrew" surname= "Cool" link= "https://www.instagram.com/" />
            </div>
    );
  }
}

function SayFullName(props) {
  return (
      <div>
      <h1> My name {props.name}, surname {props.surname}</h1>
      <a href={props.link}> Profile link </a>
      </div>
    )
}

export default App;

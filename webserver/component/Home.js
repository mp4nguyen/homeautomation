import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';

import RelayButton from './RelayButton';
var relay1Value = 0;
var relay2Value = 0;
var relay3Value = 0;
var relay4Value = 0;
var relay5Value = 0;
var relay6Value = 0;
var relay7Value = 0;
var relay8Value = 0;

export default class Home extends Component {

  componentDidMount() {
    console.log('home.componentDidMount');
  }

  componentWillUnmount() {
  }

  _relay1(value){
    console.log('relay 1 pressed');
    axios.post('http://localhost:8000/controlRelay',{relayNumber:11,value})
  }

  _relay2(value){
    console.log('relay 2 pressed');
    relay2Value = relay2Value == 0 ? 1:0;
    axios.post('http://localhost:8000/controlRelay',{relayNumber:13,value})
  }

  _relay3(value){
    console.log('relay 3 pressed');
    relay3Value = relay3Value == 0 ? 1:0;
    axios.post('http://localhost:8000/controlRelay',{relayNumber:15,value})
  }

  _relay4(value){
    console.log('relay 4 pressed');
    relay4Value = relay4Value == 0 ? 1:0;
    axios.post('http://localhost:8000/controlRelay',{relayNumber:29,value})
  }

  _relay5(value){
    console.log('relay 5 pressed');
    relay5Value = relay5Value == 0 ? 1:0;
    axios.post('http://localhost:8000/controlRelay',{relayNumber:31,value})
  }

  _relay6(value){
    console.log('relay 6 pressed');
    relay6Value = relay6Value == 0 ? 1:0;
    axios.post('http://localhost:8000/controlRelay',{relayNumber:33,value})
  }

  _relay7(value){
    console.log('relay 7 pressed');
    relay7Value = relay7Value == 0 ? 1:0;
    axios.post('http://localhost:8000/controlRelay',{relayNumber:35,value})
  }

  _relay8(value){
    console.log('relay 8 pressed');
    relay8Value = relay8Value == 0 ? 1:0;
    axios.post('http://localhost:8000/controlRelay',{relayNumber:17,value})
  }


  render() {
    return (
      (
        <div>
          <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
              <div className="container">
                  <div className="navbar-header page-scroll">
                      <a class="navbar-brand" href="#page-top">Start Bootstrap</a>
                  </div>
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav navbar-right">
                          <li className="hidden">
                              <a href="#page-top"></a>
                          </li>
                          <li className="page-scroll">
                              <a href="#portfolio">Portfolio</a>
                          </li>
                          <li className="page-scroll">
                              <a href="#about">About</a>
                          </li>
                          <li className="page-scroll">
                              <a href="#contact">Contact</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          {/*
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <img className="img-responsive" src="img/profile.png" alt=""/>
                            <div className="intro-text">
                                <span className="name">Start Bootstrap</span>
                                <hr className="star-light"/>
                                <span className="skills">Web Developer - Graphic Artist - User Experience Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            */}
          <section id="portfolio">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <h2>Function</h2>
                          <hr className="star-primary"/>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-sm-3 portfolio-item">
                        <RelayButton img="img/portfolio/grass.jpg" label="Grass" onClick={this._relay1}></RelayButton>
                      </div>
                      <div className="col-sm-3 portfolio-item">
                        <RelayButton img="img/portfolio/vegetable.jpg" label="Vegetable" onClick={this._relay2}></RelayButton>
                      </div>
                      <div className="col-sm-3 portfolio-item">
                        <RelayButton img="img/portfolio/light.jpeg" label="Lamp Light`" onClick={this._relay3}></RelayButton>
                      </div>
                      <div className="col-sm-3 portfolio-item">
                        <RelayButton img="img/portfolio/light.jpeg" label="Light" onClick={this._relay4}></RelayButton>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-sm-3 portfolio-item">
                        <RelayButton img="img/portfolio/cake.png" label="Cake" onClick={this._relay5}></RelayButton>
                      </div>
                      <div className="col-sm-3 portfolio-item">
                        <RelayButton img="img/portfolio/cake.png" label="Cake" onClick={this._relay6}></RelayButton>
                      </div>
                      <div className="col-sm-3 portfolio-item">
                        <RelayButton img="img/portfolio/game.png" label="Game" onClick={this._relay7}></RelayButton>
                      </div>
                      <div className="col-sm-3 portfolio-item">
                        <RelayButton img="img/portfolio/game.png" label="Cake" onClick={this._relay8}></RelayButton>
                      </div>
                  </div>
              </div>
          </section>
        </div>
      )
    );
  }
}

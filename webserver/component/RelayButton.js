import React, { Component,PropTypes } from 'react';
import {Link} from 'react-router';
import axios from 'axios';

import RelayButton from './RelayButton';


export default class Home extends Component {

  static propTypes = {
    img: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func
  }

  constructor(props){
    super(props);
    this.state = {relayValue:0 }
  }
  _onClick(){
    let relayValue = this.state.relayValue == 0 ? 1 : 0;
    this.setState({relayValue});
    this.props.onClick(relayValue)
  }

  render() {
    console.log('relayValue = ',this.state.relayValue);
    let style = this.state.relayValue == 0 ? {opacity:0.5} : {opacity:1};

    return (
      (
      <a onClick={this._onClick.bind(this)} className="portfolio-link" style={style}>
          <div className="caption">
              <div className="caption-content">
                  <i>{this.props.label}</i>
              </div>
          </div>
          <img src={this.props.img} className="img-responsive" alt=""/>
      </a>
      )
    );
  }
}

import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';


class Testin extends Component {

  render(){
    // console.log(this.props)
    return(
      <div>cos tam</div>
    )
  }
}

function mapStateToProps(state){
  return {auth: state.auth}
}

export default connect(mapStateToProps)(Testin);

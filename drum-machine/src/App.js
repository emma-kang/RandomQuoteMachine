import React, { Component } from 'react';
import './App.css';
import DrumMachine from './DrumMachine';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentBank: 'bankOne',
      isChecked: null
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount () {
    this.setState({
      isChecked: this.props.isChecked
    });
  }
  handleChange() {
    var bank = this.state.currentBank === 'bankOne' ? 'bankTwo' : 'bankOne';
    this.setState({
      currentBank: bank,
      isChecked: !this.state.isChecked
    })
  }
  render() {
    return (
      <div className='app'>
          <div class="switch">
          <input type="checkbox" name="switch" className="switch-checkbox" id="myswitch" checked={this.state.isChecked} onChange={this.handleChange} />
          <label class="switch-label" for="myswitch">
            <span class="switch-inner"></span>
            <span class="switch-switch"></span>
          </label>
        </div>
        <DrumMachine bank={this.state.currentBank}/>
      </div>
    );
  }
}

export default App;

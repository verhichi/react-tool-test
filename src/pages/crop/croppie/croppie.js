import React from 'react';
import './croppie.css';
import CroppieJS from 'croppie/croppie';
import 'croppie/croppie.css';

import TheInput from 'components/form/theInput';
import TheSelect from 'components/form/theSelect';

class Croppie extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: '',
      viewport: {
        width: 100,
        height: 100,
        type: 'circle'
      },
      boundary: {
        width: 300,
        height: 300
      }
    }
  }

  componentDidMount(){
    this.setCroppie();
  }

  setCroppie = () => {
    this.croppie && this.croppie.destroy();
    this.croppie = new CroppieJS(document.querySelector('.v-croppie'), {
      viewport: {
        ...this.state.viewport
      },
      boundary: {
        ...this.state.boundary
      }
    });
    this.croppie.bind({ url: this.state.url });
  }

  handleUrlChange = e => {
    this.setState({ url: e.target.value });
    this.croppie.bind({ url: e.target.value });
  }

  handleViewportTypeChange = e => {
    const clone = { ...this.state.viewport, type: e.target.value };
    this.setState({ viewport: clone }, () => { this.setCroppie(); });
  }

  render(){
    return (
      <div>
        <TheInput
          label="Image URL"
          value={this.state.url}
          onChange={this.handleUrlChange}
        />

        <TheSelect
          label="Viewport Type"
          value={this.state.viewport.type}
          options={[ 'circle', 'square' ]}
          onChange={this.handleViewportTypeChange}
        />

        <div className="v-croppie">

        </div>
      </div>
    );
  }
}

export default Croppie;

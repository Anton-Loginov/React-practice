import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class WrapperComponent extends ReactComponent {
  state = {
    isOpen: false
  };

  handleOpen = (ev) => {
    ev && ev.preventDefault && ev.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  render(){
    return <OriginalComponent {...this.props} isOpen={this.state.isOpen} toggleOpen={this.handleOpen}/>
  }
}
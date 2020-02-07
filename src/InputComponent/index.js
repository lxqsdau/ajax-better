import React from 'react';
import { Input } from 'antd';

class InputComponent extends React.Component {
  render () {
    const { optionConfig, ...other } = this.props;
    return <Input className="back-page-search-input" {...other} />
  }
}

export default InputComponent;

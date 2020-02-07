import React from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

class RangePickerComponent extends React.Component {
  render () {
    return (
      <RangePicker style={{ width: "386px" }} {...this.props}  />
    )
  }
}

export default RangePickerComponent
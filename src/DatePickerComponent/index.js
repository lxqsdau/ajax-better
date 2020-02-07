import React from 'react';
import { DatePicker } from 'antd';

class DatePickerComponent extends React.Component {
  render () {
    return (
      <DatePicker className="back-page-search-date-picker" {...this.props}  />
    )
  }
}

export default DatePickerComponent
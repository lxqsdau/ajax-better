import React from 'react';
import { Button } from 'antd';
import "./index.scss";

function Action ({ config, emit }) {
  return (
    <div className="action-box">
      {
        config.map(({ actionFn, title, type }, i) => <Button className="action-btn" key={i} onClick={() => emit(actionFn)} type={type}>{title}</Button>)
      }
    </div>
  )
}

export default Action;
import React from 'react';
import { render } from 'react-dom';
import { Button } from 'antd';
import "antd/dist/antd.css";
import http from "./http";

class App extends React.Component {
  componentDidMount () {
    http({
      url: "/sso/app/logout",
      method: "post",
      a: 1,
      b: 2
    }).then(res => {
      console.log(res, "res")
    }).catch(err => {
      console.log(err, "err")
    })
  }
  render () {
    return (
      <>
        <Button onClick={this.test}>按钮</Button>
      </>
    )
  }
}


render(<App />, document.getElementById("root"));
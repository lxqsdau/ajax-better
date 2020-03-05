import React from 'react';
import { render } from 'react-dom';
import { Button } from 'antd';
import "antd/dist/antd.css";
import http from "./http";

class App extends React.Component {
  componentDidMount () {
    http({
      url: "/queryport/get",
      method:"get",
      data: {
        "token": "a5556301-a692-4bce-84fc-4a8e58d69705",
        "@database": "MYSQL",
        "auth_collect": {
          "@schema": "auth",
        }
      },
      // isApijson: true,
      // params: {
      //   a: 1
      // }
    }, 3).then(res => {
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
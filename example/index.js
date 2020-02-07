import React from 'react';
import { render } from 'react-dom';
import { ConfigComponent, RenderComponent } from '../src';
import { config, tableConfig } from "./config";
import { Table, Button } from 'antd';
import "antd/dist/antd.css";


class App extends RenderComponent {
  test = () => {
    this.updateConfig(1)
    this.refreshTable({
      env: 3
    })
  }

  tableReturn = (data) => {
  }

  onReset = () => {
    console.log("23")
    this.updateConfig(1)
  }

  render () {
    return (
      <>
        <Button onClick={this.test}>按钮</Button>
        <ConfigComponent
          config={config}
          ref={r => this.tableComponent = r}
          actionEmit={this.actionEmit}
          tableConfig={tableConfig}
          tableColumnsProps={{ id: "2" }}
          searchFormConfig={{
            foldtThreshold: 20
          }}
          tableReturn={this.tableReturn}
          onReset={this.onReset}
        />
      </>
    )
  }
}


render(<App />, document.getElementById("root"));
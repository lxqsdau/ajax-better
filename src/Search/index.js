import React, { PureComponent } from 'react';
import { Form, Button, Icon } from 'antd';
import "./index.scss";

class Search extends PureComponent {
  state = {
    fold: true, // 折叠
  }
  
  search = () => {
    const { form, emit } = this.props;
    const searchValue = form.getFieldsValue();
    emit("search", searchValue)
  }

  getSearchValue = () => {
    const { form } = this.props;
    return form.getFieldsValue();
  }

  reset = () => {
    const { form, emit } = this.props;
    form.resetFields();
    emit("reset")
  }

  foldChange = () => {
    const { fold } = this.state;
    this.setState({
      fold: !fold,
    })
  }

  render () {
    const { form, optionConfig, searchFormConfig: { foldtThreshold }, config } = this.props;
    const { getFieldDecorator } = form;
    const { fold } = this.state;
    let showFormItem
    
    if (fold && config.length > foldtThreshold) {
      showFormItem = config.slice(0, foldtThreshold)
    } else {
      showFormItem = config
    }
    return (
      <div className="search-box">
        <Form className="search-form" layout="inline">
          {
            showFormItem.map(({ Component, label, name, defaultValue, ...orther }, i) => <Form.Item className="search-item" key={i}>
              <p className="label">{label}</p>
              {
                getFieldDecorator(name, {
                  initialValue: defaultValue || undefined
                })(<Component optionConfig={optionConfig} {...orther} />)
              }
            </Form.Item>)
          }
          {
           config.length > foldtThreshold && <Form.Item className="search-item ase">
              <div onClick={this.foldChange} className="fold-box">{fold ? <>
                <span>展开</span>  <Icon type="down" />
              </> : <>
                  <span>收起</span>  <Icon type="up" />
                </>}</div>
            </Form.Item>
          }


          <Form.Item className="search-item ase">
            <div className="btn-item">
              <div className="label-btn">&nbsp;</div>
              <Button onClick={this.search} type="primary">查询</Button>
            </div>
            <div className="btn-item">
              <Button onClick={this.reset}>重置</Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Form.create({ name: 'Search' })(Search);

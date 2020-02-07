# react-back-page
react后台配置页面

# 使用方法

# props
config
tableConfig
extraFetchProps 列表数据请求需要需要传的额外字段
extraDeleteProps 给删除接口需要传的额外数据
optionConfig 搜索区域option配置 {[optionField]: []}
tableColumnsProps 需要传给column 自定义render时额外的信息

方法
deleteRecordFn 删除
  参数: { record, extraDeleteProps }

fetchFn 请求列表数据
  参数 { page, ...searchValue, ...this.props.extraFetchProps }



表格的config
columns render参数 {text, record, emit, tableColumnsProps}
actionColumns 
  render参数 {text, record, tableColumnsProps}
  isShow参数 {text, record, tableColumnsProps}

  事件触发参数 { ...record, ...{除title, key, render, actionFn之外的属性} }


# config
search
```javascript
[
  {
    type: "input",
    props: {
      name: "name", // 返回值属性
      label: "搜索", // 显示名字
      // 剩下的值都会传给组件自身
      placeholder: "请输入分类名",
    }
  }
],
```
import React from 'react';
import { Drawer, Table } from 'antd';
import "./index.scss";

// detailData record
function getValueComponent ({ detailData, type, field, render, ...other }) {
  switch (type) {
    case "text":
      return <span className="detail-value">{render ? render({ text: detailData[field], record: detailData }) : detailData[field]}</span>
    case "img":
      return <span><img style={{ maxWidth: "100%" }} src={detailData[field]} alt="" /></span>
    case "table":
      return render ? render({ text: detailData[field], record: detailData }) : <Table dataSource={detailData[field]} {...other} />
  }
}

function DetailModal ({ visible, onClose, detailData, config: { list = [], width = 600 }, title = "详情" }) {
  return (
    <Drawer
      title={title}
      visible={visible}
      onClose={onClose}
      width={width}
    >
      {
        list.filter(({ isShow = () => true, field }) => isShow({ text: detailData[field], record: detailData }))
        .map(({ label, field, type, render, ...other }) => <div key={label + field} className="detail-item">
          <span className="detail-lable">{label}</span>
          {getValueComponent({ detailData, type, field, render, ...other })}
        </div>)
      }
    </Drawer>
  )
}

export default DetailModal;
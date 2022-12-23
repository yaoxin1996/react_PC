import React, { Component } from 'react'
import { Card, Button, Table } from 'antd';
import {
  PlusOutlined
} from '@ant-design/icons';
import { reqCategoryList, reqCategoryAdd, reqCategoryUpdate } from '../../api/index'
/**
 * 商品分类
 */
export default class Category extends Component {
  render() {

    // card 左侧
    const title = '一级分类列表'

    // card 右侧
    const extra = (
      <Button type="primary">
        <PlusOutlined />添加
      </Button>
    )

    const columns = [
      {
        title: '分类名称',
        dataIndex: 'name',
        key: 'name',
        width: '70%'
      },
      {
        title: '操作',
        dataIndex: 'methods',
        key: 'methods',
        render: () => {
          return (
            <div>
              <Button type="link">修改分类</Button>
              <Button type="link">查看子分类</Button>
            </div>
          )
        }
      },
    ];
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];

    return (
      <div>
        <Card
          title={title}
          extra={extra}
        >
          <Table rowKey='_id' columns={columns} dataSource={data} bordered />
        </Card>
      </div>
    )
  }
}

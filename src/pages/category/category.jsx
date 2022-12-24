import React, { Component } from 'react'
import { Card, Button, Table, Modal, Input  } from 'antd';
import {
  PlusOutlined
} from '@ant-design/icons';
import { reqCategoryList, reqCategoryAdd, reqCategoryUpdate } from '../../api/index'
/**
 * 商品分类
 */
export default class Category extends Component {
  state = {
    categorys: [], // 一级分类列表
    categoryName: '', // 分类名称
    praentId: 0,
    categoryId: 0,
    isShowModel: false,
    isShowEditModel: false,
    loading: false
  }

 
  showModal = () => {
    this.setState({
      isShowModel: true
    })
  };

  // 添加分类
  handleOk = () => {
    reqCategoryAdd({
      parentId: this.state.parentId,
      categoryName: this.state.categoryName
    }).then(res => {
      this.getCategoryList()
      this.setState({
        isShowModel: false
      })
    })
  };

  // 修改分类
  editCategory = (val) => {
    this.setState({
      categoryName: val.name,
      isShowEditModel: true,
      categoryId: val._id
    })
  }

  // 提交修改
  handleEdit = () => {
    reqCategoryUpdate({
      categoryId: this.state.categoryId || 0,
      categoryName: this.state.categoryName
    }).then(res => {
      this.setState({
        isShowEditModel: false,
        categoryId: 0
      })
      this.getCategoryList()
    })
  }

  handleCancel = () => {
    this.setState({
      isShowModel: false,
      isShowEditModel: false
    })
  };

  // 初始化table所有列的数组
  initColumns = () => {
    this.columns = [
      {
        title: '分类名称',
        dataIndex: 'name',
        width: '70%'
      },
      {
        title: '操作',
        dataIndex: 'methods',
        key: 'methods',
        render: (text, record, index) => {
          return (
            <div>
              <Button type="link" onClick={ () => this.editCategory(record)}>修改分类</Button>
              <Button type="link">查看子分类</Button>
            </div>
          )
        }
      },
    ];
  }

  // 获取一级或二级分类列表
  getCategoryList = () => {
    this.setState({
      loading: true
    })
    reqCategoryList({
      parentId: 0
    }).then(res => {
      this.setState({
        categorys: res.data.data,
        loading: false
      })
    }).catch(err => {
      this.setState({
        loading: false
      })
    })
  }

  // 获取输入框的值
  getInputVal = (e) => {
    this.setState({
      categoryName: e.target.value
    })
  }

  componentDidMount () {
    this.getCategoryList()
    this.initColumns()
    
  }
  render() {
    const { categorys, loading, categoryName } = this.state
    // card 左侧
    const title = '一级分类列表'

    // card 右侧
    const extra = (
      <Button type="primary">
        <PlusOutlined onClick={this.showModal}/>添加
      </Button>
    )


    return (
      <div>
        <Card
          title={title}
          extra={extra}>
          <Table
            rowKey='_id'
            loading={loading}
            columns={this.columns}
            dataSource={categorys}
            bordered />
        </Card>

        <Modal
          title="添加分类"
          open={this.state.isShowModel}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          <Input 
            value={categoryName}
            onChange={this.getInputVal} />
        </Modal>

        <Modal
          title="编辑分类"
          open={this.state.isShowEditModel}
          onOk={this.handleEdit}
          onCancel={this.handleCancel}>
          <Input 
            value={categoryName}
            onChange={this.getInputVal} />
        </Modal>
      </div>
    )
  }
}

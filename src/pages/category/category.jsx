import React, { Component } from 'react'
import { Card, Button, Table, Modal, Input, Select, Form } from 'antd';
import {
  PlusOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';
import { reqCategoryList, reqCategoryAdd, reqCategoryUpdate } from '../../api/index'
/**
 * 商品分类
 */
export default class Category extends Component {
  state = {
    categorys: [], // 一级分类列表
    subCategorys: [], // 二级分类列表
    categoryName: '', // 分类名称
    parentId: 0,
    parentName: '',
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
              { this.state.parentId == 0 ? <Button  type="link" onClick={ () => this.showCategory(record) }>查看子分类</Button> : null }
            </div>
          )
        }
      },
    ];
  }

  // 获取一级或二级分类列表
  getCategoryList = () => {
    const { parentId } = this.state
    this.setState({
      loading: true
    })
    reqCategoryList({
      parentId
    }).then(res => {
      if (parentId == 0) {
        this.setState({
          categorys: res.data.data,
          loading: false
        })
      } else {
        this.setState({
          subCategorys: res.data.data,
          loading: false
        })
      }
    }).catch(err => {
      this.setState({
        loading: false
      })
    })
  }

  // 获取二级分类列表
  showCategory = (val) => {
    this.setState({
      parentId: val._id,
      parentName: val.name
    }, () => {
      this.getCategoryList()
    })
  }

  // 获取输入框的值
  getInputVal = (e) => {
    this.setState({
      categoryName: e.target.value
    })
  }

  // 获取选择器的值
  handleChange = (e) => {
    console.log(e);
  }

  // 展示一级列表
  showFirstCategorys = () => {
    this.setState({
      parentId: 0,
      parentName: '',
      subCategorys: []
    })
  }

  componentDidMount () {
    this.getCategoryList()
    this.initColumns()
    
  }
  render() {
    const { categorys, loading, categoryName, parentId, parentName, subCategorys } = this.state
    // card 左侧
    const title = parentId == 0 ? '一级分类列表' : ( <div> <Button type="link" onClick={ () => this.showFirstCategorys()}>一级分类列表</Button> <ArrowRightOutlined /> <span>{parentName}</span></div> )

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
            size="small"
            loading={loading}
            columns={this.columns}
            dataSource={ parentId == 0 ? categorys : subCategorys }
            bordered />
        </Card>

        <Modal
          title="添加分类"
          open={this.state.isShowModel}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          


          <Select
            defaultValue="lucy"
            style={{
              width: 120,
            }}
            onChange={this.handleChange}
            options={categorys}
          />
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

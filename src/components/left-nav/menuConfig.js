import { Link, Redirect } from 'react-router-dom'
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

function getItem (label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<Link to="/home">首页</Link>, '/home', <PieChartOutlined />),
  getItem('商品', '/products', <MailOutlined />, [
    getItem(<Link to="/category">品类管理</Link>, '/category'),
    getItem(<Link to="/product">商品管理</Link>, '/product'),
  ]),
  getItem(<Link to="/user">用户管理</Link>, '/user', <ContainerOutlined />),
  getItem(<Link to="/role">角色管理</Link>, '/role', <ContainerOutlined />),
  getItem('图形图表', '/charts', <MailOutlined />, [
    getItem(<Link to="/charts/bar">柱状图</Link>, '/charts/bar'),
    getItem(<Link to="/charts/line">折线图</Link>, '/charts/line'),
    getItem(<Link to="/charts/pie">饼图</Link>, '/charts/pie'),
  ]),
];

export default items
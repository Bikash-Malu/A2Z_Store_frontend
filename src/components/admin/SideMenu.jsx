import React, { useEffect, useState } from "react";
import "./layout.css";
import { Link, useNavigate } from "react-router-dom";
// import 'antd/dist/antd.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  DatabaseOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  ProductOutlined,  
  BorderlessTableOutlined,
  UnorderedListOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";
import { useContext } from "react"
import UserContext from '../../context/UserContext'
import { Layout, Menu, Button, theme } from "antd";
const { Header, Sider, Content } = Layout;
const DefalutLayout = ({ children }) => {
  const navigate=useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { logout } = useContext(UserContext)
  // const dispath=useDispatch();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{marginLeft:'-300px',height:'100vh',marginTop:'-56px'}}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{overflow:'auto'}}>
        <div className="demo-logo-vertical" style={{overflow:'auto'}}>
          <h4 className="text-center text-light font-weight-bold mt-4">{collapsed?'':'ADMIN PANEL'}</h4>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={window.location.pathname}
        >
         <Menu.Item key={"/admin/home"} icon={<HomeOutlined />}>
            <Link to="/admin/home">Home</Link>
          </Menu.Item>
          <Menu.Item key={"/admin/add-category"} icon={<DatabaseOutlined />}>
            <Link to="/admin/add-category">Add Category</Link>
          </Menu.Item>
          <Menu.Item key={"/admin/categories"} icon={<UnorderedListOutlined />}>
            <Link to="/admin/categories">View Category</Link>
          </Menu.Item>
          <Menu.Item key={"/admin/add-product"} icon={<ProductOutlined />}>
            <Link to="/admin/add-product">Add Product</Link>
          </Menu.Item>
          <Menu.Item key={"/admin/products"} icon={<BorderlessTableOutlined />}>
            <Link to="/admin/products">View Product</Link>
          </Menu.Item>
          <Menu.Item key={"/admin/orders"} icon={<OrderedListOutlined />}>
            <Link to="/admin/orders">Order</Link>
          </Menu.Item>
          <Menu.Item key={"/admin/users"} icon={<UsergroupDeleteOutlined />}>
            <Link to="/admin/users">Users</Link>
          </Menu.Item>
          <Menu.Item key={"/logout"}  icon={<LogoutOutlined />}>
          <Link data-bs-toggle="modal" data-bs-target="#exampleModal">Logout</Link>
          </Menu.Item>

        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />


          
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default DefalutLayout;

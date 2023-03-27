
import React, { useState } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { MailOutlined, RedditOutlined } from "@ant-design/icons";
import { Outlet, To, useNavigate, } from "react-router-dom"
// 根目录 @ 要配置
import "@/index.scss";

const { Header, Content, Sider, Footer } = Layout;

function getItem(label:string, key:string, icon?:any, children?:any, type?:any) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
// key值和router中定义相同
const items = [
  getItem("Home", "/Home", <MailOutlined />, 
  	[getItem("About", "/About")]
  ),
]
const rootSubmenuKeys = ["About"];

const App = () => {
  const [openKeys, setOpenKeys] = useState(["Menu1"]);

  const onOpenChange = (keys: any[]) => {
    const latestOpenKey = keys.find((key: string) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const Navigate = useNavigate();

  const toPage = (e: { key: To; }) => {
    Navigate(e.key);
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Header className="header">
        <RedditOutlined style={{ fontSize: "66px" }} />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{ flex: "1" }}
        />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{ height: "100%", borderRight: 0 }}
            items={items}
            onClick={toPage}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px",
          }}
        >
          <Breadcrumb 
            style={{
              margin: "16px 0",
            }} 
            items={[
              { title: 'Home' },
              { title: 'Home' },
              { title: 'Home' }
            ]} />
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {/* 这里注意！之前没有写<Outlet /> 在路由上浪费了好多时间 */}
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        react_demo ©2022 Created by Arbor
      </Footer>
    </Layout>
  );
};

export default App;

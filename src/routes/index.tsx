// 导入路由组件
import { lazy } from "react";

// 快速导入工具函数
const lazyLoad = (moduleName: string) => {
  const Module: React.LazyExoticComponent<React.ComponentType<any>> = 
  lazy(() => import(`../pages/${moduleName}`));
  return <Module />;
};

// interface Router {
//   name?: string;
//   path?: string;
//   index?: Boolean;
//   children?: Array<Router>;
//   element: any;
// }
const routes = [
  {
    path:'/',
    element: lazyLoad("Layout"),
    // 路由嵌套，子路由的元素需使用<Outlet />
    children: [
      {
        index: true,
        element: lazyLoad("Home")
      },
      {
        path: '/about',
        element: lazyLoad("About")
      }
    ]
  },
  {
    path:'/about',
    element: lazyLoad("About")
  },
]

export default routes;